import type { Language } from "../types";

export interface TTSPlaybackHandle {
  mode: "elevenlabs" | "browser_speech_fallback" | "visual_fallback";
  stop: () => void;
}

const SPEECH_LANG_CODES: Record<Language, string> = {
  en: "en-IN",
  hi: "hi-IN",
  kn: "kn-IN",
};

function startBrowserSpeechFallback(
  text: string,
  language: Language,
  onEnd: () => void,
): TTSPlaybackHandle {
  if (typeof window !== "undefined" && "speechSynthesis" in window) {
    try {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = SPEECH_LANG_CODES[language];
      utterance.rate = 0.95;
      utterance.onend = () => onEnd();
      utterance.onerror = () => onEnd();
      window.speechSynthesis.speak(utterance);

      return {
        mode: "browser_speech_fallback",
        stop: () => {
          window.speechSynthesis.cancel();
          onEnd();
        },
      };
    } catch {
      // Continue to timed visual fallback
    }
  }

  const timer = setTimeout(onEnd, 4500);
  return {
    mode: "visual_fallback",
    stop: () => {
      clearTimeout(timer);
      onEnd();
    },
  };
}

export async function playLessonAudio(
  text: string,
  language: Language,
  onEnd: () => void,
  signal?: AbortSignal,
): Promise<TTSPlaybackHandle> {
  try {
    const response = await fetch("/api/tts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text, language }),
      signal,
    });

    const contentType = (response.headers.get("content-type") ?? "").toLowerCase();
    if (!response.ok || !contentType.includes("audio/")) {
      throw new Error("TTS server returned non-audio response.");
    }

    const audioBlob = await response.blob();
    if (signal?.aborted) {
      return { mode: "elevenlabs", stop: () => onEnd() };
    }

    const objectUrl = URL.createObjectURL(audioBlob);
    const audio = new Audio(objectUrl);

    let cleanedUp = false;
    const cleanup = () => {
      if (cleanedUp) {
        return;
      }
      cleanedUp = true;
      URL.revokeObjectURL(objectUrl);
    };

    audio.onended = () => {
      cleanup();
      onEnd();
    };

    audio.onerror = () => {
      cleanup();
      onEnd();
    };

    await audio.play();

    return {
      mode: "elevenlabs",
      stop: () => {
        audio.pause();
        audio.currentTime = 0;
        cleanup();
        onEnd();
      },
    };
  } catch (err) {
    if (err instanceof DOMException && err.name === "AbortError") {
      return { mode: "elevenlabs", stop: () => onEnd() };
    }
    return startBrowserSpeechFallback(text, language, onEnd);
  }
}
