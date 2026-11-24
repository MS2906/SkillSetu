import "dotenv/config";
import express, { type Request, type Response } from "express";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { GoogleGenAI, ThinkingLevel, Type } from "@google/genai";
import {
  analyzeAnswerForGrading,
  buildFallbackGrade,
  buildFallbackPathway,
  computeRubricScore,
  findCleanEvidenceQuote,
  stripHedgingText,
  type SupportedLanguage,
} from "./serverFallback.ts";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PRIMARY_GEMINI_MODEL = "gemini-4-hydrogen";
const FALLBACK_GEMINI_MODEL = "gemini-3.1-flash-lite";

function parseGeminiJson<T>(rawText: string): T {
  const cleaned = rawText
    .trim()
    .replace(/^```(?:json)?\s*/i, "")
    .replace(/\s*```$/i, "")
    .trim();
  return JSON.parse(cleaned) as T;
}

const LANGUAGE_LABELS: Record<SupportedLanguage, string> = {
  en: "English (simple, clear Indian English)",
  hi: "Hindi (Devanagari script, everyday spoken/simple Hindi)",
  kn: "Kannada (Kannada script, everyday clear Kannada)",
};

function getGeminiClient(): GoogleGenAI {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    throw new Error("GEMINI_API_KEY is not configured in the server environment.");
  }
  return new GoogleGenAI({
    apiKey,
    httpOptions: {
      headers: {
        "User-Agent": "aistudio-build",
      },
    },
  });
}

interface SanitizedAttemptError {
  model: string;
  attempt: number;
  status: number;
  code?: string | number;
  message: string;
}

function sanitizeErrorText(raw: string): string {
  return raw
    .replace(/AIza[0-9A-Za-z_-]{20,}/g, "[REDACTED_KEY]")
    .replace(/([?&]key=)[^&\s"']+/gi, "$1[REDACTED]");
}

async function generateWithGemini(
  label: string,
  ai: GoogleGenAI,
  contents: string,
  config: Record<string, unknown>,
): Promise<{ text: string; modelUsed: string }> {
  const modelsToTry = [PRIMARY_GEMINI_MODEL, FALLBACK_GEMINI_MODEL];
  const attemptErrors: SanitizedAttemptError[] = [];
  let lastError: unknown;

  for (const model of modelsToTry) {
    const maxAttempts = model === FALLBACK_GEMINI_MODEL ? 3 : 2;
    for (let attempt = 0; attempt < maxAttempts; attempt++) {
      try {
        const modelConfig =
          model === FALLBACK_GEMINI_MODEL
            ? {
                ...config,
                thinkingConfig: { thinkingLevel: ThinkingLevel.MINIMAL },
              }
            : config;

        const response = await ai.models.generateContent({
          model,
          contents,
          config: modelConfig,
        });
        const text = (response.text ?? "").trim();
        if (!text) {
          throw new Error(`Empty response text from model=${model}`);
        }
        return { text, modelUsed: model };
      } catch (error) {
        lastError = error;
        const errObj = error as { status?: number; code?: string | number };
        const status = typeof errObj?.status === "number" ? errObj.status : 500;
        const msg = sanitizeErrorText(error instanceof Error ? error.message : String(error));
        attemptErrors.push({
          model,
          attempt: attempt + 1,
          status,
          code: errObj?.code,
          message: msg,
        });
        console.error(
          `[Gemini ${label}] Error (model=${model}, attempt=${attempt + 1}, status=${status}): ${msg}`,
        );

        const isTransient =
          status === 503 ||
          msg.includes("UNAVAILABLE");
        const shouldSwitchModel =
          status === 429 ||
          status === 404 ||
          msg.includes("RESOURCE_EXHAUSTED") ||
          msg.includes("NOT_FOUND");

        if (shouldSwitchModel) {
          break; // try next model immediately
        }
        if (attempt + 1 < maxAttempts && isTransient) {
          await new Promise((resolve) => setTimeout(resolve, 650 * (attempt + 1)));
          continue;
        }
        break;
      }
    }
  }

  const combinedErr = new Error(
    attemptErrors.map((a) => `[${a.model} #${a.attempt} HTTP ${a.status}] ${a.message}`).join(" | ") ||
      sanitizeErrorText(lastError instanceof Error ? lastError.message : String(lastError)),
  ) as Error & { status?: number; attempts?: SanitizedAttemptError[] };
  combinedErr.status = attemptErrors[attemptErrors.length - 1]?.status;
  combinedErr.attempts = attemptErrors;
  throw combinedErr;
}

function isSupportedLanguage(val: unknown): val is SupportedLanguage {
  return val === "en" || val === "hi" || val === "kn";
}

async function createApp() {
  const app = express();
  app.use(express.json({ limit: "1mb" }));

  // 1. Register all /api routes BEFORE Vite middleware and SPA fallback
  app.get("/api/health", (_req: Request, res: Response) => {
    res.json({
      ok: true,
      service: "SkillSetu API",
      apiKeyConfigured: Boolean(process.env.GEMINI_API_KEY),
    });
  });

  app.post("/api/pathway", async (req: Request, res: Response) => {
    const goalRaw = req.body?.goal;
    const langRaw = req.body?.language;

    if (typeof goalRaw !== "string" || goalRaw.trim().length < 2) {
      res.status(400).json({ error: "Please enter a clear career or skill goal." });
      return;
    }

    const goal = goalRaw.trim().slice(0, 240);
    const language: SupportedLanguage = isSupportedLanguage(langRaw) ? langRaw : "en";

    try {
      const ai = getGeminiClient();

      const prompt = [
        `Design a practical 2-week micro-skill learning pathway for an underserved first-time job seeker in India whose goal is: "${goal}".`,
        `Write all user-facing text (goalSummary, twoWeekOverview, title, summary, lesson, taskPrompt, rubric) in ${LANGUAGE_LABELS[language]}.`,
        `Keep language warm, simple, encouraging, and grounded in real Indian workplace scenarios (tools, customers, local businesses, safety, or practical billing/operations).`,
        `Structure exactly 3 sequential skills spanning Week 1 and Week 2:`,
        `- Skill 1: Week 1 (Days 1–4)`,
        `- Skill 2: Week 1 (Days 5–7)`,
        `- Skill 3: Week 2 (Days 8–14)`,
        `For each skill provide:`,
        `1. A clear skill title and 1-sentence summary.`,
        `2. A single rich, readable one-paragraph lesson (90–140 words) teaching concrete steps the learner can apply immediately.`,
        `3. One practical scenario-based task prompt asking for exactly 3 concrete steps/items.`,
        `4. Exactly 3 concise grading rubric criteria matching those 3 steps 1-to-1.`,
        `CRITICAL CONSISTENCY RULE: The number of steps or items requested in taskPrompt MUST strictly equal the number of items in rubric (3 steps in taskPrompt and 3 points in rubric).`,
        `5. Between 3 and 5 short English lowercase skill keywords (even when the lesson language is Hindi or Kannada) for matching with entry-level job listings.`,
      ].join("\n");

      const { text, modelUsed } = await generateWithGemini("/api/pathway", ai, prompt, {
        systemInstruction:
          "You are SkillSetu, an empathetic vocational mentor for underserved youth and adults in India. Return strictly valid JSON matching the requested schema.",
        thinkingConfig: { thinkingLevel: ThinkingLevel.LOW },
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            goalSummary: {
              type: Type.STRING,
              description: "Short 1-sentence restatement of the learner's goal.",
            },
            twoWeekOverview: {
              type: Type.STRING,
              description: "Brief 1-2 sentence encouraging overview of what the learner will achieve in 2 weeks.",
            },
            skills: {
              type: Type.ARRAY,
              description: "Exactly 3 practical skills across the 2-week plan.",
              items: {
                type: Type.OBJECT,
                properties: {
                  id: {
                    type: Type.STRING,
                    description: "Short slug id like skill-1, skill-2, skill-3.",
                  },
                  week: {
                    type: Type.INTEGER,
                    description: "1 for Week 1 or 2 for Week 2.",
                  },
                  days: {
                    type: Type.STRING,
                    description: "Day span such as Days 1-4.",
                  },
                  title: {
                    type: Type.STRING,
                    description: "Practical skill name.",
                  },
                  summary: {
                    type: Type.STRING,
                    description: "One-line outcome description for the skill card.",
                  },
                  lesson: {
                    type: Type.STRING,
                    description: "One-paragraph practical lesson (90-140 words).",
                  },
                  taskPrompt: {
                    type: Type.STRING,
                    description: "One practical scenario task the learner completes in writing.",
                  },
                  rubric: {
                    type: Type.ARRAY,
                    description: "Exactly 3 grading rubric points.",
                    items: { type: Type.STRING },
                  },
                  keywords: {
                    type: Type.ARRAY,
                    description: "3-5 lowercase English skill keywords for job matching.",
                    items: { type: Type.STRING },
                  },
                },
                required: [
                  "id",
                  "week",
                  "days",
                  "title",
                  "summary",
                  "lesson",
                  "taskPrompt",
                  "rubric",
                  "keywords",
                ],
              },
            },
          },
          required: ["goalSummary", "twoWeekOverview", "skills"],
        },
      });

      const parsed = parseGeminiJson<{
        goalSummary?: unknown;
        twoWeekOverview?: unknown;
        skills?: Array<Record<string, unknown>>;
      }>(text);

      if (!parsed || !Array.isArray(parsed.skills) || parsed.skills.length === 0) {
        throw new Error("Invalid pathway structure returned by Gemini.");
      }

      const normalizedSkills = parsed.skills.slice(0, 3).map((skill: Record<string, unknown>, idx: number) => ({
        id: typeof skill.id === "string" && skill.id.trim() ? skill.id.trim() : `skill-${idx + 1}`,
        week: skill.week === 2 ? 2 : 1,
        days:
          typeof skill.days === "string" && skill.days.trim()
            ? skill.days.trim()
            : idx === 2
              ? "Days 8–14"
              : idx === 1
                ? "Days 5–7"
                : "Days 1–4",
        title: String(skill.title ?? `Skill ${idx + 1}`),
        summary: String(skill.summary ?? ""),
        lesson: String(skill.lesson ?? ""),
        taskPrompt: String(skill.taskPrompt ?? ""),
        rubric: Array.isArray(skill.rubric) ? skill.rubric.slice(0, 4).map(String) : [],
        keywords: Array.isArray(skill.keywords) ? skill.keywords.map((k) => String(k).toLowerCase()) : [],
      }));

      res.json({
        goal,
        language,
        goalSummary: String(parsed.goalSummary ?? goal),
        twoWeekOverview: String(parsed.twoWeekOverview ?? ""),
        skills: normalizedSkills,
        createdAt: new Date().toISOString(),
        source: "gemini",
        model: modelUsed,
      });
    } catch (error) {
      const errObj = error as { status?: number; attempts?: SanitizedAttemptError[] };
      const errMsg = sanitizeErrorText(error instanceof Error ? error.message : String(error));
      console.error(
        `[Gemini /api/pathway] Failed after trying [${PRIMARY_GEMINI_MODEL}, ${FALLBACK_GEMINI_MODEL}], serving fallback:`,
        { status: errObj?.status, attempts: errObj?.attempts, message: errMsg },
      );
      const fallback = buildFallbackPathway(goal, language);
      res.json({ ...fallback, source: "fallback", fallbackReason: errMsg.slice(0, 2500) });
    }
  });

  app.post("/api/grade", async (req: Request, res: Response) => {
    const skillTitle = req.body?.skillTitle;
    const taskPrompt = req.body?.taskPrompt;
    const rubric = req.body?.rubric;
    const answer = req.body?.answer;
    const langRaw = req.body?.language;

    if (typeof answer !== "string" || answer.trim().length < 2) {
      res.status(400).json({ error: "Please write an answer before submitting." });
      return;
    }
    if (typeof skillTitle !== "string" || typeof taskPrompt !== "string" || !Array.isArray(rubric) || rubric.length === 0) {
      res.status(400).json({ error: "Missing task or rubric details." });
      return;
    }

    const language: SupportedLanguage = isSupportedLanguage(langRaw) ? langRaw : "en";
    const safeRubric = rubric.slice(0, 6).map(String);
    const totalPoints = safeRubric.length;
    const requiredToPass = totalPoints >= 4 ? totalPoints - 1 : Math.min(totalPoints, 2);
    const analysis = analyzeAnswerForGrading(answer);
    const qualifies = !analysis.isMostlyHedging && analysis.hasMinimumSubstance;
    const cleanedAnswerForPrompt = (
      analysis.cleanedText || "(no concrete technical answer remaining after removing hedging phrases)"
    ).slice(0, 4000);

    try {
      const ai = getGeminiClient();
      const numberedRubric = safeRubric.map((pt, i) => `${i + 1}. ${pt}`).join("\n");

      const prompt = [
        `You are a STRICT vocational examiner grading a learner's practical answer against a ${totalPoints}-point rubric.`,
        `Skill: ${skillTitle}`,
        `Task Prompt: ${taskPrompt}`,
        `${totalPoints}-Point Grading Rubric:`,
        numberedRubric,
        `Learner's Technical Content (hedging openers stripped): "${cleanedAnswerForPrompt}"`,
        `Pre-check metrics: cleanedWords=${analysis.cleanedWordCount}, substantiveWords=${analysis.substantiveWordCount}, mostlyHedging=${analysis.isMostlyHedging}`,
        `Strict Grading Rules:`,
        `- Evaluate EACH of the ${totalPoints} rubric points separately as met (true/false) in exact order.`,
        `- Set met = true ONLY if the technical content explicitly demonstrates that specific criterion with concrete actions or facts, and quote a short exact phrase from the cleaned answer in evidence (NEVER include hedging phrases like "I don't know", "maybe", or "not sure" in evidence). Otherwise set met = false and evidence = "".`,
        `- An answer that is mostly hedging, vague, off-topic, or lacks concrete technical content (e.g. "I don't know.", "Maybe I will climb and start.") MUST have met = false on all points, score = 0, and passed = false.`,
        `- Do NOT fail a valid ${requiredToPass}/${totalPoints} answer simply because it covers ${requiredToPass} steps instead of ${totalPoints}.`,
        `- Base score = Math.round((points_met / ${totalPoints}) * 100), with at most a bounded +/- 5 point adjustment for clarity/detail (never crossing the pass threshold; 100 when all ${totalPoints} points are clearly met).`,
        `- Set passed = true ONLY if at least ${requiredToPass} of ${totalPoints} rubric points are met AND score >= 60.`,
        `- Write feedback in ${LANGUAGE_LABELS[language]}. Explicitly name which rubric points were met, which rubric points were missed, and what specific details the learner must add.`,
      ].join("\n");

      console.log(
        `[Gemini /api/grade] Calling primary=${PRIMARY_GEMINI_MODEL} (secondary=${FALLBACK_GEMINI_MODEL}) rubricPoints=${totalPoints} cleanedWords=${analysis.cleanedWordCount} substantiveWords=${analysis.substantiveWordCount}`,
      );

      const { text, modelUsed } = await generateWithGemini("/api/grade", ai, prompt, {
        systemInstruction:
          `You are a strict, fair vocational examiner. Grade strictly against all ${totalPoints} rubric criteria and return valid JSON matching the schema.`,
        thinkingConfig: { thinkingLevel: ThinkingLevel.LOW },
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            rubric: {
              type: Type.ARRAY,
              description: `Evaluation of each of the ${totalPoints} rubric points.`,
              items: {
                type: Type.OBJECT,
                properties: {
                  point: {
                    type: Type.STRING,
                    description: "The rubric point text.",
                  },
                  met: {
                    type: Type.BOOLEAN,
                    description: "True only if explicitly demonstrated in the learner's answer.",
                  },
                  evidence: {
                    type: Type.STRING,
                    description: "Short direct quote from the cleaned answer if met (no hedging), or empty string if missed.",
                  },
                },
                required: ["point", "met", "evidence"],
              },
            },
            score: {
              type: Type.INTEGER,
              description: `Integer score 0-100 based on points met / ${totalPoints} * 100 (+/- 5 bounded detail adjustment).`,
            },
            passed: {
              type: Type.BOOLEAN,
              description: `True only if at least ${requiredToPass} of ${totalPoints} rubric points are met and score >= 60.`,
            },
            feedback: {
              type: Type.STRING,
              description: "Feedback naming met points, missed points, and what to add.",
            },
          },
          required: ["rubric", "score", "passed", "feedback"],
        },
      });

      const parsed = parseGeminiJson<{
        rubric?: Array<{ point?: unknown; met?: unknown; evidence?: unknown }>;
        score?: unknown;
        passed?: unknown;
        feedback?: unknown;
      }>(text);

      const rawRubric = Array.isArray(parsed.rubric) ? parsed.rubric : [];
      const normalizedRubric = safeRubric.map((criterion, idx) => {
        const item = rawRubric[idx];
        const met = qualifies && Boolean(item?.met);
        const rawEvidence = met && typeof item?.evidence === "string" ? item.evidence.trim() : "";
        let sanitizedEvidence = met ? stripHedgingText(rawEvidence) : "";
        if (met && !sanitizedEvidence) {
          sanitizedEvidence = findCleanEvidenceQuote(analysis.cleanedText);
        }
        return {
          point: criterion,
          met,
          evidence: sanitizedEvidence,
        };
      });

      const metCount = normalizedRubric.filter((r) => r.met).length;
      const baseScore = Math.round((metCount / totalPoints) * 100);
      const rawScore = Number(parsed.score);
      const detailDelta = Number.isFinite(rawScore) ? Math.round(rawScore) - baseScore : 0;

      const { score, passed } = computeRubricScore(
        metCount,
        totalPoints,
        detailDelta,
        qualifies,
      );
      const feedback = String(parsed.feedback ?? "");

      res.json({
        rubric: normalizedRubric,
        score,
        passed,
        feedback,
        source: "gemini",
        model: modelUsed,
      });
    } catch (error) {
      const errObj = error as { status?: number; code?: string | number; attempts?: SanitizedAttemptError[] };
      const status = typeof errObj?.status === "number" ? errObj.status : undefined;
      const errMsg = sanitizeErrorText(error instanceof Error ? error.message : String(error));
      console.error(`[Gemini /api/grade] Failed after trying [${PRIMARY_GEMINI_MODEL}, ${FALLBACK_GEMINI_MODEL}]:`, {
        status,
        code: errObj?.code,
        attempts: errObj?.attempts,
        message: errMsg,
      });
      const fallback = buildFallbackGrade(answer, safeRubric, language);
      res.json({ ...fallback, source: "fallback", fallbackReason: errMsg.slice(0, 2500) });
    }
  });

  const ttsCache = new Map<string, Buffer>();
  const MAX_TTS_CACHE_ENTRIES = 100;
  const MAX_TTS_TEXT_LENGTH = 1500;

  app.post("/api/tts", async (req: Request, res: Response) => {
    const rawText = req.body?.text;
    const rawLang = req.body?.language;

    if (typeof rawText !== "string" || rawText.trim().length === 0) {
      res.status(400).json({ error: "Lesson text is required for audio playback." });
      return;
    }
    if (!isSupportedLanguage(rawLang)) {
      res.status(400).json({ error: "Unsupported language for ElevenLabs text-to-speech." });
      return;
    }

    const cleanText = rawText.trim().slice(0, MAX_TTS_TEXT_LENGTH);
    const cacheKey = `${rawLang}::${cleanText}`;

    const cached = ttsCache.get(cacheKey);
    if (cached) {
      res.setHeader("Content-Type", "audio/mpeg");
      res.setHeader("Cache-Control", "private, max-age=3600");
      res.setHeader("X-TTS-Cache", "HIT");
      res.send(cached);
      return;
    }

    const apiKey = process.env.ELEVENLABS_API_KEY?.trim();
    const voiceId = process.env.ELEVENLABS_VOICE_ID?.trim();

    if (!apiKey || !voiceId) {
      res.status(503).json({
        error: "ElevenLabs text-to-speech is not configured on the server.",
      });
      return;
    }

    if (!/^[a-zA-Z0-9_-]{4,64}$/.test(voiceId)) {
      res.status(500).json({ error: "Invalid ElevenLabs voice ID format." });
      return;
    }

    try {
      const upstream = await fetch(
        `https://api.elevenlabs.io/v1/text-to-speech/${encodeURIComponent(voiceId)}`,
        {
          method: "POST",
          headers: {
            "xi-api-key": apiKey,
            "Content-Type": "application/json",
            Accept: "audio/mpeg",
          },
          body: JSON.stringify({
            text: cleanText,
            model_id: "eleven_multilingual_v2",
          }),
        },
      );

      if (!upstream.ok) {
        console.warn("ElevenLabs TTS upstream returned status:", upstream.status);
        res.status(502).json({
          error: "ElevenLabs audio service could not synthesize this lesson right now.",
        });
        return;
      }

      const arrayBuffer = await upstream.arrayBuffer();
      const audioBuffer = Buffer.from(arrayBuffer);

      if (audioBuffer.length === 0) {
        res.status(502).json({ error: "Received empty audio stream from ElevenLabs." });
        return;
      }

      if (ttsCache.size >= MAX_TTS_CACHE_ENTRIES) {
        const oldestKey = ttsCache.keys().next().value;
        if (oldestKey !== undefined) {
          ttsCache.delete(oldestKey);
        }
      }
      ttsCache.set(cacheKey, audioBuffer);

      res.setHeader("Content-Type", "audio/mpeg");
      res.setHeader("Cache-Control", "private, max-age=3600");
      res.setHeader("X-TTS-Cache", "MISS");
      res.send(audioBuffer);
    } catch (error) {
      console.warn("ElevenLabs TTS request error:", error instanceof Error ? error.message : error);
      res.status(502).json({
        error: "Unable to reach ElevenLabs audio service.",
      });
    }
  });

  // 2. Unknown /api/* routes MUST return JSON 404 (never fall through to Vite / index.html)
  app.use("/api", (_req: Request, res: Response) => {
    res.status(404).json({ error: "API route not found." });
  });

  // 3. Mount Vite middleware in development or static dist + SPA fallback in production
  if (process.env.NODE_ENV !== "production") {
    const { createServer: createViteServer } = await import("vite");
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.resolve(__dirname, "dist");
    if (fs.existsSync(distPath)) {
      app.use(express.static(distPath));
      app.get("*", (_req: Request, res: Response) => {
        res.sendFile(path.join(distPath, "index.html"));
      });
    }
  }

  const port = Number(process.env.PORT) || 3000;
  app.listen(port, "0.0.0.0", () => {
    console.log(`SkillSetu server running on http://0.0.0.0:${port}`);
  });
}

createApp().catch((err) => {
  console.error("Failed to start SkillSetu server:", err);
  process.exit(1);
});
