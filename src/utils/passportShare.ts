import QRCode from "qrcode";
import type { SharedPassportPayload } from "../types";

export function encodePassportPayload(payload: SharedPassportPayload): string {
  const json = JSON.stringify(payload);
  const bytes = new TextEncoder().encode(json);
  let binary = "";
  for (const byte of bytes) {
    binary += String.fromCharCode(byte);
  }
  return btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

export function decodePassportPayload(encoded: string): SharedPassportPayload | null {
  try {
    const padded = encoded.replace(/-/g, "+").replace(/_/g, "/") + "=".repeat((4 - (encoded.length % 4)) % 4);
    const binary = atob(padded);
    const bytes = new Uint8Array(binary.length);
    for (let i = 0; i < binary.length; i++) {
      bytes[i] = binary.charCodeAt(i);
    }
    const json = new TextDecoder().decode(bytes);
    const parsed = JSON.parse(json) as SharedPassportPayload;
    if (!parsed || !Array.isArray(parsed.badges)) {
      return null;
    }
    return {
      learnerName: typeof parsed.learnerName === "string" ? parsed.learnerName : "SkillSetu Learner",
      goal: typeof parsed.goal === "string" ? parsed.goal : "",
      badges: parsed.badges
        .filter((b) => b && typeof b.skill === "string")
        .map((b) => ({
          skill: String(b.skill),
          score: Number(b.score) || 0,
          date: String(b.date ?? ""),
        })),
    };
  } catch {
    return null;
  }
}

export function buildPassportShareUrl(payload: SharedPassportPayload): string {
  if (typeof window === "undefined") {
    return "";
  }
  const url = new URL(window.location.href);
  url.search = "";
  url.hash = "";
  url.searchParams.set("passport", encodePassportPayload(payload));
  return url.toString();
}

export async function generateQrDataUrl(text: string): Promise<string> {
  return QRCode.toDataURL(text, {
    width: 240,
    margin: 2,
    color: {
      dark: "#0F2140",
      light: "#FFFFFF",
    },
    errorCorrectionLevel: "M",
  });
}
