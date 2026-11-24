import { useEffect, useState } from "react";
import {
  AlertCircle,
  ArrowLeft,
  Award,
  CheckCircle2,
  Loader2,
  Send,
  XCircle,
} from "lucide-react";
import type { GradeResult, Language, SkillModule } from "../types";
import type { UIStrings } from "../i18n/translations";
import { postJson } from "../utils/api";

interface TaskScreenProps {
  skill: SkillModule | null;
  language: Language;
  savedAnswer: string;
  savedResult: GradeResult | null;
  onBackToPathway: () => void;
  onGoToPassport: () => void;
  onGraded: (
    skill: SkillModule,
    answer: string,
    result: GradeResult,
  ) => void;
  t: UIStrings;
}

export function TaskScreen({
  skill,
  language,
  savedAnswer,
  savedResult,
  onBackToPathway,
  onGoToPassport,
  onGraded,
  t,
}: TaskScreenProps) {
  const [answer, setAnswer] = useState(savedAnswer);
  const [result, setResult] = useState<GradeResult | null>(savedResult);
  const [isGrading, setIsGrading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setAnswer(savedAnswer);
    setResult(savedResult);
    setError(null);
  }, [skill?.id, savedAnswer, savedResult]);

  if (!skill) {
    return (
      <div className="bg-white border border-slate-200 rounded-2xl p-8 max-w-xl mx-auto text-center space-y-4">
        <p className="text-slate-600 text-sm">
          Select a skill from your pathway to complete its practical task.
        </p>
        <button
          type="button"
          onClick={onBackToPathway}
          className="min-h-[44px] px-4 py-2 bg-[#0F2140] text-white text-sm font-semibold rounded-xl cursor-pointer"
        >
          {t.backToPathway}
        </button>
      </div>
    );
  }

  const wordCount = answer.trim().split(/\s+/).filter(Boolean).length;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (answer.trim().length < 2 || isGrading) {
      return;
    }

    setIsGrading(true);
    setError(null);

    try {
      const data = await postJson<GradeResult>("/api/grade", {
        skillTitle: skill.title,
        taskPrompt: skill.taskPrompt,
        rubric: skill.rubric,
        answer: answer.trim(),
        language,
      });

      const gradeResult: GradeResult = {
        score: Number(data.score) || 0,
        feedback: String(data.feedback ?? ""),
        passed: Boolean(data.passed),
        rubric: Array.isArray(data.rubric) ? data.rubric : undefined,
        source: data.source === "gemini" ? "gemini" : "fallback",
      };

      setResult(gradeResult);
      onGraded(skill, answer.trim(), gradeResult);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Server not reachable, please retry",
      );
    } finally {
      setIsGrading(false);
    }
  };

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      <button
        type="button"
        onClick={onBackToPathway}
        className="min-h-[44px] inline-flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-[#0F2140] transition-colors cursor-pointer"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>{t.backToPathway}</span>
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left: Task Prompt + 3-Point Rubric */}
        <section className="lg:col-span-5 bg-white border border-slate-200 rounded-2xl p-6 space-y-5">
          <div className="space-y-2">
            <p className="text-xs font-medium text-slate-500">
              Week {skill.week} · {skill.days}
            </p>
            <h1 className="font-display text-xl sm:text-2xl font-bold text-[#0F2140]">
              {skill.title}
            </h1>
            <p className="text-sm sm:text-base text-[#0F172A] leading-relaxed pt-1">
              {skill.taskPrompt}
            </p>
          </div>

          <div className="pt-4 border-t border-slate-100 space-y-3">
            <h2 className="font-display text-sm font-bold text-[#0F2140]">
              {t.rubricTitle.replace("{count}", String(skill.rubric.length))}
            </h2>
            <ol className="space-y-2.5 text-sm text-slate-700">
              {skill.rubric.map((criterion, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-md bg-slate-100 text-[#0F2140] font-mono text-xs font-semibold flex items-center justify-center shrink-0 mt-0.5 tabular-nums">
                    {idx + 1}
                  </span>
                  <span className="leading-snug">{criterion}</span>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Right: Answer Form + Grading Result */}
        <section className="lg:col-span-7 space-y-6">
          <form
            onSubmit={handleSubmit}
            className="bg-white border border-slate-200 rounded-2xl p-6 space-y-4"
          >
            <div className="flex items-center justify-between gap-2">
              <label
                htmlFor="task-answer"
                className="font-display text-sm font-bold text-[#0F2140]"
              >
                {t.answerLabel}
              </label>
              <span className="font-mono text-xs text-slate-500 tabular-nums">
                {wordCount} words
              </span>
            </div>

            <textarea
              id="task-answer"
              rows={6}
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              placeholder={t.answerPlaceholder}
              className="w-full p-4 text-sm sm:text-base text-[#0F172A] bg-slate-50 border border-slate-300 rounded-xl focus:outline-none focus:bg-white focus:border-[#0F2140] focus:ring-2 focus:ring-[#0F2140]/15 placeholder:text-slate-400 leading-relaxed"
            />

            {error ? (
              <div
                role="alert"
                className="text-sm text-red-800 bg-red-50 border border-red-200 rounded-xl px-4 py-3"
              >
                {error}
              </div>
            ) : null}

            <button
              type="submit"
              disabled={answer.trim().length < 2 || isGrading}
              className="w-full sm:w-auto min-h-[48px] px-6 py-3 bg-[#EA580C] hover:bg-[#DC4E07] disabled:bg-slate-300 disabled:text-slate-500 text-white font-semibold text-sm sm:text-base rounded-xl inline-flex items-center justify-center gap-2 transition-colors cursor-pointer"
            >
              {isGrading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>{t.gradingTask}</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>{t.submitTaskBtn}</span>
                </>
              )}
            </button>
          </form>

          {/* Evaluation Result */}
          {result ? (
            <div
              className={`rounded-2xl border p-6 space-y-5 ${
                result.passed
                  ? "bg-emerald-50/70 border-emerald-200"
                  : "bg-amber-50/70 border-amber-200"
              }`}
            >
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div className="space-y-1">
                  <p className="text-xs font-medium text-slate-600">
                    {result.source === "gemini"
                      ? t.gradedByGemini
                      : t.gradedOffline}
                  </p>
                  <div className="flex items-center gap-2.5">
                    {result.passed ? (
                      <CheckCircle2 className="w-6 h-6 text-emerald-700 shrink-0" />
                    ) : (
                      <AlertCircle className="w-6 h-6 text-amber-700 shrink-0" />
                    )}
                    <span
                      className={`font-display text-base font-bold ${
                        result.passed ? "text-emerald-900" : "text-amber-900"
                      }`}
                    >
                      {result.passed ? t.passedLabel : t.tryAgainLabel}
                    </span>
                  </div>
                </div>

                <div className="font-mono text-2xl font-bold tabular-nums text-[#0F2140]">
                  {result.score}
                  <span className="text-sm font-normal text-slate-500">
                    /100
                  </span>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-800 leading-relaxed">
                {result.feedback}
              </p>

              {/* 3-Point Rubric Checklist with Ticks & Evidence */}
              {result.rubric && result.rubric.length > 0 ? (
                <div className="pt-4 border-t border-slate-200/80 space-y-3">
                  <h3 className="font-display text-xs font-bold text-[#0F2140]">
                    {t.rubricChecklistLabel}
                  </h3>
                  <ul className="space-y-2.5">
                    {result.rubric.map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2.5 text-sm"
                      >
                        {item.met ? (
                          <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                        ) : (
                          <XCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                        )}
                        <div className="space-y-0.5 min-w-0">
                          <p
                            className={`font-medium leading-snug ${
                              item.met ? "text-[#0F172A]" : "text-slate-700"
                            }`}
                          >
                            {item.point}
                          </p>
                          <p className="text-xs text-slate-600">
                            {item.met
                              ? item.evidence
                                ? `${t.evidenceLabel}: “${item.evidence}”`
                                : t.evidenceLabel
                              : t.missedEvidenceLabel}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}

              {result.passed ? (
                <div className="pt-1">
                  <button
                    type="button"
                    onClick={onGoToPassport}
                    className="min-h-[44px] px-5 py-2.5 bg-[#0F2140] hover:bg-[#17305C] text-white text-sm font-semibold rounded-xl inline-flex items-center gap-2 transition-colors cursor-pointer"
                  >
                    <Award className="w-4 h-4" />
                    <span>{t.viewPassportBtn}</span>
                  </button>
                </div>
              ) : null}
            </div>
          ) : null}
        </section>
      </div>
    </div>
  );
}
