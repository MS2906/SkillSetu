import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Loader2, Square, Volume2 } from "lucide-react";
import type { Language, SkillModule } from "../types";
import type { UIStrings } from "../i18n/translations";
import { playLessonAudio, type TTSPlaybackHandle } from "../services/tts";

interface LessonScreenProps {
  skill: SkillModule | null;
  language: Language;
  onBack: () => void;
  onStartTask: (skill: SkillModule) => void;
  t: UIStrings;
}

export function LessonScreen({
  skill,
  language,
  onBack,
  onStartTask,
  t,
}: LessonScreenProps) {
  const [isLoadingAudio, setIsLoadingAudio] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [playbackMode, setPlaybackMode] = useState<
    TTSPlaybackHandle["mode"] | null
  >(null);

  const handleRef = useRef<TTSPlaybackHandle | null>(null);
  const abortRef = useRef<AbortController | null>(null);

  const stopAllAudio = () => {
    abortRef.current?.abort();
    abortRef.current = null;
    handleRef.current?.stop();
    handleRef.current = null;
    setIsLoadingAudio(false);
    setIsPlaying(false);
  };

  useEffect(() => {
    return () => {
      abortRef.current?.abort();
      handleRef.current?.stop();
    };
  }, [skill?.id]);

  if (!skill) {
    return (
      <div className="bg-white border border-slate-200 rounded-2xl p-8 max-w-xl mx-auto text-center space-y-4">
        <p className="text-slate-600 text-sm">
          Select a skill from your pathway to read its lesson.
        </p>
        <button
          type="button"
          onClick={onBack}
          className="min-h-[44px] px-4 py-2 bg-[#0F2140] text-white text-sm font-semibold rounded-xl cursor-pointer"
        >
          {t.backToPathway}
        </button>
      </div>
    );
  }

  const handleToggleListen = async () => {
    if (isPlaying || isLoadingAudio) {
      stopAllAudio();
      return;
    }

    const controller = new AbortController();
    abortRef.current = controller;
    setIsLoadingAudio(true);
    setPlaybackMode(null);

    const handle = await playLessonAudio(
      `${skill.title}. ${skill.lesson}`,
      language,
      () => {
        setIsPlaying(false);
        setIsLoadingAudio(false);
        handleRef.current = null;
      },
      controller.signal,
    );

    if (controller.signal.aborted) {
      setIsLoadingAudio(false);
      setIsPlaying(false);
      return;
    }

    abortRef.current = null;
    handleRef.current = handle;
    setIsLoadingAudio(false);
    setIsPlaying(true);
    setPlaybackMode(handle.mode);
  };

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <button
        type="button"
        onClick={() => {
          stopAllAudio();
          onBack();
        }}
        className="min-h-[44px] inline-flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-[#0F2140] transition-colors cursor-pointer"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>{t.backToPathway}</span>
      </button>

      <article className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-6">
        <div className="space-y-2">
          <p className="text-xs font-medium text-slate-500">
            Week {skill.week} · {skill.days}
          </p>
          <h1
            className="font-display text-2xl sm:text-3xl font-bold text-[#0F2140] tracking-tight"
            style={{ textWrap: "balance" }}
          >
            {skill.title}
          </h1>
          <p className="text-sm text-slate-600">{skill.summary}</p>
        </div>

        {/* Listen Button (ElevenLabs /api/tts with loading state & browser fallback) */}
        <div className="flex flex-wrap items-center gap-3 pt-1">
          <button
            type="button"
            onClick={handleToggleListen}
            className={`min-h-[46px] px-5 py-2.5 rounded-xl font-semibold text-sm inline-flex items-center gap-2 transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#EA580C] ${
              isPlaying || isLoadingAudio
                ? "bg-[#EA580C] text-white"
                : "bg-[#0F2140] hover:bg-[#17305C] text-white"
            }`}
          >
            {isLoadingAudio ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>{t.loadingAudioBtn}</span>
              </>
            ) : isPlaying ? (
              <>
                <Square className="w-4 h-4 fill-current" />
                <span>{t.stopListenBtn}</span>
              </>
            ) : (
              <>
                <Volume2 className="w-4 h-4" />
                <span>{t.listenBtn}</span>
              </>
            )}
          </button>

          {playbackMode === "elevenlabs" ? (
            <span className="text-xs text-slate-500">
              {t.ttsPlayingElevenLabs}
            </span>
          ) : playbackMode === "browser_speech_fallback" ||
            playbackMode === "visual_fallback" ? (
            <span className="text-xs text-amber-800 bg-amber-50 border border-amber-200 rounded-lg px-2.5 py-1">
              {t.ttsFallbackNotice}
            </span>
          ) : null}
        </div>

        {/* One-Paragraph Lesson */}
        <div className="pt-4 border-t border-slate-100">
          <p className="text-base sm:text-lg text-[#0F172A] leading-[1.75]">
            {skill.lesson}
          </p>
        </div>

        {/* Next CTA */}
        <div className="pt-4 border-t border-slate-100 flex justify-end">
          <button
            type="button"
            onClick={() => {
              stopAllAudio();
              onStartTask(skill);
            }}
            className="w-full sm:w-auto min-h-[48px] px-6 py-3 bg-[#EA580C] hover:bg-[#DC4E07] text-white font-semibold text-sm sm:text-base rounded-xl inline-flex items-center justify-center gap-2 transition-colors cursor-pointer"
          >
            <span>{t.goToTaskBtn}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </article>
    </div>
  );
}
