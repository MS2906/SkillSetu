import { useEffect, useState } from "react";
import { Award, Check, Copy, ExternalLink, QrCode, User } from "lucide-react";
import type { EarnedBadge, SharedPassportPayload } from "../types";
import type { UIStrings } from "../i18n/translations";
import {
  buildPassportShareUrl,
  generateQrDataUrl,
} from "../utils/passportShare";

interface PassportScreenProps {
  learnerName: string;
  onLearnerNameChange: (name: string) => void;
  goal: string;
  badges: EarnedBadge[];
  sharedView: SharedPassportPayload | null;
  onExitSharedView: () => void;
  onGoToPathway: () => void;
  onGoToJobs: () => void;
  t: UIStrings;
}

export function PassportScreen({
  learnerName,
  onLearnerNameChange,
  goal,
  badges,
  sharedView,
  onExitSharedView,
  onGoToPathway,
  onGoToJobs,
  t,
}: PassportScreenProps) {
  const [qrDataUrl, setQrDataUrl] = useState<string>("");
  const [copied, setCopied] = useState(false);

  const activeName = sharedView ? sharedView.learnerName : learnerName;
  const activeGoal = sharedView ? sharedView.goal : goal;
  const activeBadges = sharedView
    ? sharedView.badges
    : badges.map((b) => ({ skill: b.skill, score: b.score, date: b.date }));

  const shareUrl = buildPassportShareUrl({
    learnerName: activeName || "SkillSetu Learner",
    goal: activeGoal,
    badges: activeBadges,
  });

  useEffect(() => {
    let cancelled = false;
    if (activeBadges.length === 0 || !shareUrl) {
      setQrDataUrl("");
      return;
    }
    generateQrDataUrl(shareUrl)
      .then((url) => {
        if (!cancelled) {
          setQrDataUrl(url);
        }
      })
      .catch(() => {
        if (!cancelled) {
          setQrDataUrl("");
        }
      });
    return () => {
      cancelled = true;
    };
  }, [activeBadges.length, shareUrl]);

  const handleCopy = async () => {
    if (!shareUrl) {
      return;
    }
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="space-y-8">
      {sharedView ? (
        <div className="bg-[#FFF7ED] border border-[#F97316]/30 rounded-2xl px-5 py-4 flex flex-wrap items-center justify-between gap-4">
          <p className="text-sm font-medium text-[#0F2140]">
            Viewing a public Skill Passport link for{" "}
            <span className="font-bold">{sharedView.learnerName}</span>.
          </p>
          <button
            type="button"
            onClick={onExitSharedView}
            className="min-h-[40px] px-4 py-2 bg-[#0F2140] text-white text-xs font-semibold rounded-xl cursor-pointer"
          >
            Open My Own Passport
          </button>
        </div>
      ) : null}

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left: Digital Skill Passport Credential & Earned Badges */}
        <section className="lg:col-span-8 space-y-6">
          <div className="bg-[#0F2140] text-white rounded-2xl p-6 sm:p-8 space-y-5">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div className="space-y-1.5">
                <p className="text-xs font-semibold text-[#F97316]">
                  SkillSetu · {t.passportTitle}
                </p>
                <h1 className="font-display text-2xl sm:text-3xl font-bold text-white">
                  {activeName || "SkillSetu Learner"}
                </h1>
                {activeGoal ? (
                  <p className="text-sm text-slate-300">
                    Goal: {activeGoal}
                  </p>
                ) : null}
              </div>

              <div className="text-right">
                <p className="text-xs text-slate-300">Verified Badges</p>
                <p className="font-mono text-3xl font-bold tabular-nums text-white">
                  {activeBadges.length}
                </p>
              </div>
            </div>

            {!sharedView ? (
              <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row sm:items-center gap-3">
                <label
                  htmlFor="learner-name-input"
                  className="text-xs text-slate-300 inline-flex items-center gap-1.5 shrink-0"
                >
                  <User className="w-3.5 h-3.5" />
                  <span>Learner Name:</span>
                </label>
                <input
                  id="learner-name-input"
                  type="text"
                  value={learnerName}
                  onChange={(e) => onLearnerNameChange(e.target.value)}
                  placeholder="Enter your full name for employers"
                  className="flex-1 min-h-[40px] px-3 py-1.5 bg-white/10 border border-white/20 rounded-lg text-sm text-white placeholder:text-slate-400 focus:outline-none focus:border-[#F97316]"
                />
              </div>
            ) : null}
          </div>

          {/* Badges List */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h2 className="font-display text-lg font-bold text-[#0F2140]">
                Earned Skill Badges
              </h2>
              <button
                type="button"
                onClick={onGoToJobs}
                className="text-sm font-semibold text-[#EA580C] hover:underline inline-flex items-center gap-1 cursor-pointer"
              >
                <span>{t.navJobs}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </button>
            </div>

            {activeBadges.length === 0 ? (
              <div className="py-8 text-center space-y-3 border-t border-slate-100">
                <Award className="w-10 h-10 text-slate-300 mx-auto" />
                <div className="space-y-1 max-w-md mx-auto">
                  <h3 className="font-display text-base font-bold text-[#0F2140]">
                    {t.noBadgesTitle}
                  </h3>
                  <p className="text-sm text-slate-600">{t.noBadgesDesc}</p>
                </div>
                {!sharedView ? (
                  <button
                    type="button"
                    onClick={onGoToPathway}
                    className="min-h-[44px] px-5 py-2.5 bg-[#EA580C] hover:bg-[#DC4E07] text-white text-sm font-semibold rounded-xl cursor-pointer"
                  >
                    {t.navPathway}
                  </button>
                ) : null}
              </div>
            ) : (
              <div className="divide-y divide-slate-100">
                {activeBadges.map((badge, idx) => (
                  <div
                    key={`${badge.skill}-${idx}`}
                    className="py-4 first:pt-2 last:pb-1 flex items-center justify-between gap-4"
                  >
                    <div className="flex items-start gap-3 min-w-0">
                      <div className="w-10 h-10 rounded-xl bg-[#FFF7ED] text-[#EA580C] flex items-center justify-center shrink-0">
                        <Award className="w-5 h-5" />
                      </div>
                      <div className="min-w-0">
                        <h3 className="font-display text-base font-bold text-[#0F2140] truncate">
                          {badge.skill}
                        </h3>
                        <p className="text-xs text-slate-500 mt-0.5 font-mono tabular-nums">
                          Verified {badge.date} · Rubric Passed
                        </p>
                      </div>
                    </div>

                    <div className="text-right shrink-0">
                      <span className="font-mono text-lg font-bold text-emerald-700 tabular-nums">
                        {badge.score}/100
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Right: Shareable Link + QR Code */}
        <aside className="lg:col-span-4 bg-white border border-slate-200 rounded-2xl p-6 space-y-5">
          <div className="flex items-center gap-2">
            <QrCode className="w-5 h-5 text-[#EA580C]" />
            <h2 className="font-display text-lg font-bold text-[#0F2140]">
              {t.qrTitle}
            </h2>
          </div>

          {activeBadges.length === 0 ? (
            <div className="bg-slate-50 border border-dashed border-slate-300 rounded-xl p-6 text-center space-y-3">
              <Award className="w-10 h-10 text-slate-300 mx-auto" />
              <div className="space-y-1">
                <p className="text-sm font-semibold text-[#0F2140]">
                  {t.noBadgesTitle}
                </p>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {t.noBadgesDesc}
                </p>
              </div>
            </div>
          ) : (
            <>
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 flex items-center justify-center">
                {qrDataUrl ? (
                  <img
                    src={qrDataUrl}
                    alt="Skill Passport verification QR code"
                    className="w-48 h-48 object-contain rounded-lg"
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  <div className="w-48 h-48 flex items-center justify-center text-xs text-slate-400">
                    Generating QR...
                  </div>
                )}
              </div>

              <p className="text-xs text-slate-600 leading-relaxed">{t.qrHint}</p>

              <div className="space-y-2 pt-2 border-t border-slate-100">
                <label
                  htmlFor="share-link-input"
                  className="block text-xs font-semibold text-[#0F2140]"
                >
                  {t.shareLinkLabel}
                </label>
                <div className="flex items-center gap-2">
                  <input
                    id="share-link-input"
                    type="text"
                    readOnly
                    value={shareUrl}
                    className="flex-1 min-w-0 min-h-[42px] px-3 py-2 text-xs font-mono text-slate-600 bg-slate-50 border border-slate-200 rounded-xl"
                  />
                  <button
                    type="button"
                    onClick={handleCopy}
                    className="min-h-[42px] px-3.5 py-2 bg-[#0F2140] hover:bg-[#17305C] text-white text-xs font-semibold rounded-xl inline-flex items-center gap-1.5 shrink-0 cursor-pointer"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5" />
                        <span>{t.copiedBtn}</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>{t.copyLinkBtn}</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </>
          )}
        </aside>
      </div>
    </div>
  );
}
