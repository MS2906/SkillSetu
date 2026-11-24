# SkillSetu

**Learn it. Prove it. Get hired.**

SkillSetu is a mobile-first vocational learning and job-readiness web app designed for underserved learners across India. Learners pick a career goal in **English**, **Hindi**, or **Kannada**, receive a Gemini-generated 2-week micro-skill pathway, listen to lessons with ElevenLabs multilingual audio, complete practical rubric-graded tasks, earn a shareable **QR Skill Passport**, and discover matched entry-level opportunities.

## Screens

1. **Home**: Career goal input (`"What do you want to become?"`), voice microphone button (uses browser SpeechRecognition when available), starter career goals, and English / Hindi / Kannada language switcher.
2. **Pathway**: Calls `POST /api/pathway` (Gemini `gemini-4-hydrogen` with strict JSON schema and built-in starter-goal fallbacks) to generate a 2-week plan with 3 sequential skills, each containing a one-paragraph lesson, a practical task, and a structured grading rubric (3-point rubrics for most tasks, and a 4-point rubric for Solar Site Safety).
3. **Lesson**: Displays the skill lesson with a **Listen** button wired to `POST /api/tts` (ElevenLabs `eleven_multilingual_v2` model returning `audio/mpeg`, cached in server memory per `(text, language)`, with automatic browser speech-synthesis fallback if unavailable).
4. **Task**: Displays the practical prompt and grading rubric alongside an answer textarea. Submits to `POST /api/grade` (strict 3-point or 4-point rubric evaluation returning `{ rubric, score, passed, feedback }`). Passing requires meeting at least 2 of 3 criteria on 3-point rubrics—or at least 3 of 4 criteria on the 4-point Solar Site Safety rubric (`score >= 60`)—and awards a verified badge to the Skill Passport.
5. **Skill Passport**: Public-ready credential page listing earned badges (`skill`, `score`, `date`), a live shareable `?passport=...` link, and a scannable QR code generated via `qrcode`.
6. **Opportunities**: Ranks 12 seeded Indian entry-level job listings from `src/data/opportunities.json` by overlap with the learner's earned badges, showing **Why you match** and **Skill missing** (with one-click pathway creation for missing skills).

## Tech Stack & Data Storage

- **Frontend**: React 19, TypeScript, Tailwind CSS v4, Lucide Icons, `qrcode`
- **Backend**: Express (`server.ts`) + `@google/genai` SDK + ElevenLabs REST API
- **Persistence**: In-memory / `localStorage` and local JSON (`src/data/opportunities.json`); no database required.

## Environment Variables

Configure these server-side environment variables in your environment or Settings > Secrets panel (see `.env.example`):

```env
GEMINI_API_KEY="YOUR_GEMINI_API_KEY"
ELEVENLABS_API_KEY="YOUR_ELEVENLABS_API_KEY"
ELEVENLABS_VOICE_ID="YOUR_ELEVENLABS_VOICE_ID"
```

- `GEMINI_API_KEY`: Used on the server in `server.ts` for `/api/pathway` and `/api/grade`.
- `ELEVENLABS_API_KEY`: Used on the server in `server.ts` to call `https://api.elevenlabs.io/v1/text-to-speech/{voiceId}` (`eleven_multilingual_v2`).
- `ELEVENLABS_VOICE_ID`: ElevenLabs voice ID used by `/api/tts` to synthesize lesson audio in English, Hindi, and Kannada. If either ElevenLabs variable is unset or the request fails, SkillSetu automatically falls back to browser speech synthesis with a small UI notice.

All API keys remain strictly on the server (`process.env`) and are never exposed in client-side bundles.

## Running Locally

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
npm start
```
