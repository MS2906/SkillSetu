import { useRef, useState } from "react";
import { ArrowRight, Globe, Loader2, Mic, MicOff } from "lucide-react";
import type { Language } from "../types";
import type { UIStrings } from "../i18n/translations";

interface SpeechRecognitionAlternativeLike {
  transcript: string;
}

interface SpeechRecognitionResultLike {
  [index: number]: SpeechRecognitionAlternativeLike;
}

interface SpeechRecognitionEventLike {
  results: {
    [index: number]: SpeechRecognitionResultLike;
  };
}

interface SpeechRecognitionInstanceLike {
  lang: string;
  interimResults: boolean;
  maxAlternatives: number;
  onresult: ((event: SpeechRecognitionEventLike) => void) | null;
  onerror: (() => void) | null;
  onend: (() => void) | null;
  start: () => void;
  stop: () => void;
}

type SpeechRecognitionConstructorLike = new () => SpeechRecognitionInstanceLike;

interface HomeScreenProps {
  goal: string;
  onGoalChange: (val: string) => void;
  language: Language;
  onLanguageChange: (lang: Language) => void;
  onGeneratePathway: (goalOverride?: string) => void;
  isLoading: boolean;
  error: string | null;
  t: UIStrings;
}

const LANGUAGE_OPTIONS: Array<{ id: Language; native: string; english: string }> = [
  { id: "en", native: "English", english: "English" },
  { id: "hi", native: "हिन्दी", english: "Hindi" },
  { id: "kn", native: "ಕನ್ನಡ", english: "Kannada" },
];

const SPEECH_LOCALE: Record<Language, string> = {
  en: "en-IN",
  hi: "hi-IN",
  kn: "kn-IN",
};

export function HomeScreen({
  goal,
  onGoalChange,
  language,
  onLanguageChange,
  onGeneratePathway,
  isLoading,
  error,
  t,
}: HomeScreenProps) {
  const [isListening, setIsListening] = useState(false);
  const [micMessage, setMicMessage] = useState<string | null>(null);
  const recognitionRef = useRef<SpeechRecognitionInstanceLike | null>(null);

  const handleMicClick = () => {
    setMicMessage(null);

    if (isListening && recognitionRef.current) {
      recognitionRef.current.stop();
      setIsListening(false);
      return;
    }

    const win = window as unknown as {
      SpeechRecognition?: SpeechRecognitionConstructorLike;
      webkitSpeechRecognition?: SpeechRecognitionConstructorLike;
    };

    const SpeechRec = win.SpeechRecognition || win.webkitSpeechRecognition;

    if (!SpeechRec) {
      setMicMessage(t.micUnsupported);
      return;
    }

    try {
      const recognition = new SpeechRec();
      recognition.lang = SPEECH_LOCALE[language];
      recognition.interimResults = false;
      recognition.maxAlternatives = 1;

      recognition.onresult = (event) => {
        const transcript = event.results?.[0]?.[0]?.transcript;
        if (transcript) {
          onGoalChange(transcript);
        }
        setIsListening(false);
      };

      recognition.onerror = () => {
        setIsListening(false);
        setMicMessage(t.micUnsupported);
      };

      recognition.onend = () => {
        setIsListening(false);
      };

      recognitionRef.current = recognition;
      setIsListening(true);
      recognition.start();
    } catch {
      setIsListening(false);
      setMicMessage(t.micUnsupported);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!goal.trim() || isLoading) {
      return;
    }
    onGeneratePathway();
  };

  return (
    <div className="space-y-10 md:space-y-14">
      {/* Main Hero Section */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* Left / Primary Anchor */}
        <div className="lg:col-span-7 space-y-6">
          <div className="space-y-3">
            <p className="text-sm font-semibold text-[#EA580C] tracking-tight">
              SkillSetu · {t.tagline}
            </p>
            <h1
              className="font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-bold tracking-tight text-[#0F2140] leading-[1.15]"
              style={{ textWrap: "balance" }}
            >
              {t.homeHeading}
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
              {t.homeSubheading}
            </p>
          </div>

          {/* Language Selector */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-medium text-slate-600">
              <Globe className="w-4 h-4 text-[#0F2140]" />
              <span>{t.languageLabel}</span>
            </div>
            <div
              role="group"
              aria-label={t.languageLabel}
              className="inline-flex flex-wrap items-center gap-1.5 p-1 bg-slate-100 rounded-xl border border-slate-200"
            >
              {LANGUAGE_OPTIONS.map((opt) => {
                const selected = language === opt.id;
                return (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => onLanguageChange(opt.id)}
                    className={`min-h-[40px] px-4 py-2 rounded-lg text-sm font-semibold transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#EA580C] ${
                      selected
                        ? "bg-[#0F2140] text-white shadow-xs"
                        : "text-slate-700 hover:text-[#0F2140] hover:bg-white/70"
                    }`}
                  >
                    {opt.native}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Goal Form with Text Box + Microphone Button */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <label
              htmlFor="goal-input"
              className="block text-sm font-semibold text-[#0F2140]"
            >
              {t.goalLabel}
            </label>
            <div className="flex items-stretch gap-2.5">
              <input
                id="goal-input"
                type="text"
                value={goal}
                onChange={(e) => onGoalChange(e.target.value)}
                placeholder={t.goalPlaceholder}
                className="flex-1 min-w-0 min-h-[52px] px-4 py-3 text-base text-[#0F172A] bg-white border border-slate-300 rounded-xl focus:outline-none focus:border-[#0F2140] focus:ring-2 focus:ring-[#0F2140]/15 placeholder:text-slate-400"
              />
              <button
                type="button"
                onClick={handleMicClick}
                aria-label={t.micLabel}
                title={t.micLabel}
                className={`min-w-[52px] min-h-[52px] px-3.5 rounded-xl border flex items-center justify-center transition-colors shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#EA580C] ${
                  isListening
                    ? "bg-[#EA580C] border-[#EA580C] text-white"
                    : "bg-white border-slate-300 text-[#0F2140] hover:bg-slate-50"
                }`}
              >
                {isListening ? (
                  <MicOff className="w-5 h-5" />
                ) : (
                  <Mic className="w-5 h-5" />
                )}
              </button>
            </div>

            {isListening ? (
              <p className="text-xs font-medium text-[#EA580C]" role="status">
                {t.micListening}
              </p>
            ) : null}

            {micMessage ? (
              <p className="text-xs text-slate-600 bg-slate-100 border border-slate-200 rounded-lg px-3 py-2">
                {micMessage}
              </p>
            ) : null}

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
              disabled={!goal.trim() || isLoading}
              className="w-full sm:w-auto min-h-[52px] px-6 py-3 bg-[#EA580C] hover:bg-[#DC4E07] disabled:bg-slate-300 disabled:text-slate-500 text-white font-semibold text-base rounded-xl inline-flex items-center justify-center gap-2.5 transition-colors cursor-pointer whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0F2140]"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span>{t.buildingPathway}</span>
                </>
              ) : (
                <>
                  <span>{t.buildPathwayBtn}</span>
                  <ArrowRight className="w-5 h-5" />
                </>
              )}
            </button>
          </form>
        </div>

        {/* Right Column: Starter Goals Card */}
        <aside className="lg:col-span-5 bg-white border border-slate-200 rounded-2xl p-6 space-y-4">
          <h2 className="font-display text-base font-bold text-[#0F2140]">
            {t.popularGoalsLabel}
          </h2>
          <div className="space-y-2">
            {t.starterGoals.map((preset) => (
              <button
                key={preset}
                type="button"
                disabled={isLoading}
                onClick={() => {
                  onGoalChange(preset);
                  onGeneratePathway(preset);
                }}
                className="w-full min-h-[46px] px-4 py-2.5 text-left text-sm font-medium text-[#0F2140] bg-slate-50 hover:bg-[#FFF7ED] hover:text-[#EA580C] border border-slate-200 hover:border-[#F97316]/40 rounded-xl flex items-center justify-between gap-3 transition-colors cursor-pointer"
              >
                <span className="truncate">{preset}</span>
                <ArrowRight className="w-4 h-4 shrink-0 text-slate-400" />
              </button>
            ))}
          </div>
        </aside>
      </section>

      {/* 3-Step Journey Rhythm */}
      <section className="border-t border-slate-200 pt-8 md:pt-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <div className="space-y-2">
            <h3 className="font-display text-lg font-bold text-[#0F2140]">
              {t.step1Title}
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              {t.step1Desc}
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="font-display text-lg font-bold text-[#0F2140]">
              {t.step2Title}
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              {t.step2Desc}
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="font-display text-lg font-bold text-[#0F2140]">
              {t.step3Title}
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              {t.step3Desc}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
