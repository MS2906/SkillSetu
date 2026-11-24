import { ArrowRight, BookOpen, CheckCircle2, ClipboardCheck, Loader2, RotateCcw } from "lucide-react";
import type { EarnedBadge, PathwayPlan, SkillModule } from "../types";
import type { UIStrings } from "../i18n/translations";

interface PathwayScreenProps {
  pathway: PathwayPlan | null;
  badges: EarnedBadge[];
  isGenerating?: boolean;
  onSelectLesson: (skill: SkillModule) => void;
  onSelectTask: (skill: SkillModule) => void;
  onGoHome: () => void;
  t: UIStrings;
}

export function PathwayScreen({
  pathway,
  badges,
  isGenerating = false,
  onSelectLesson,
  onSelectTask,
  onGoHome,
  t,
}: PathwayScreenProps) {
  if (!pathway && isGenerating) {
    return (
      <div className="bg-white border border-slate-200 rounded-2xl p-8 max-w-xl mx-auto text-center space-y-4">
        <Loader2 className="w-6 h-6 animate-spin text-[#EA580C] mx-auto" />
        <p className="text-sm font-medium text-[#0F2140]">{t.buildingPathway}</p>
      </div>
    );
  }

  if (!pathway) {
    return (
      <div className="bg-white border border-slate-200 rounded-2xl p-8 max-w-xl mx-auto text-center space-y-4">
        <h1 className="font-display text-2xl font-bold text-[#0F2140]">
          {t.pathwayTitle}
        </h1>
        <p className="text-sm text-slate-600">
          {t.homeSubheading}
        </p>
        <button
          type="button"
          onClick={onGoHome}
          className="min-h-[46px] px-5 py-2.5 bg-[#EA580C] hover:bg-[#DC4E07] text-white font-semibold text-sm rounded-xl inline-flex items-center gap-2 transition-colors cursor-pointer"
        >
          <span>{t.homeHeading}</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    );
  }

  const earnedTitles = new Set(badges.map((b) => b.skill.toLowerCase()));
  const completedCount = pathway.skills.filter((s) =>
    earnedTitles.has(s.title.toLowerCase()),
  ).length;

  return (
    <div className="space-y-8">
      {/* Pathway Header */}
      <div className="bg-[#0F2140] text-white rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div className="space-y-2 max-w-2xl">
          <div className="flex flex-wrap items-center gap-2 text-xs text-slate-300">
            <span>{t.pathwayTitle}</span>
            <span aria-hidden="true">·</span>
            <span className="font-mono tabular-nums">
              {completedCount} / {pathway.skills.length} {t.completedLabel}
            </span>
          </div>
          <h1
            className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-white"
            style={{ textWrap: "balance" }}
          >
            {pathway.goalSummary || pathway.goal}
          </h1>
          <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
            {pathway.twoWeekOverview}
          </p>
        </div>

        <button
          type="button"
          onClick={onGoHome}
          className="min-h-[44px] px-4 py-2.5 bg-white/10 hover:bg-white/20 text-white text-sm font-medium rounded-xl inline-flex items-center justify-center gap-2 transition-colors self-start md:self-center whitespace-nowrap shrink-0 cursor-pointer"
        >
          <RotateCcw className="w-4 h-4" />
          <span>{t.navHome}</span>
        </button>
      </div>

      {/* 3 Skill Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {pathway.skills.map((skill, index) => {
          const matchingBadge = badges.find(
            (b) => b.skill.toLowerCase() === skill.title.toLowerCase(),
          );
          const isCompleted = Boolean(matchingBadge);

          return (
            <article
              key={skill.id}
              className="bg-white border border-slate-200 rounded-2xl p-6 flex flex-col justify-between gap-6"
            >
              <div className="space-y-3">
                {/* Clean unboxed metadata line */}
                <div className="flex items-center justify-between gap-2 text-xs text-slate-500">
                  <span>
                    0{index + 1} · Week {skill.week} · {skill.days}
                  </span>
                  {isCompleted ? (
                    <span className="inline-flex items-center gap-1 font-semibold text-emerald-700">
                      <CheckCircle2 className="w-4 h-4" />
                      <span className="tabular-nums">
                        {matchingBadge?.score}/100
                      </span>
                    </span>
                  ) : (
                    <span className="text-[#EA580C] font-medium">
                      {t.readyLabel}
                    </span>
                  )}
                </div>

                <h2 className="font-display text-xl font-bold text-[#0F2140] leading-snug">
                  {skill.title}
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {skill.summary}
                </p>

                <div className="pt-2 border-t border-slate-100 space-y-1.5">
                  <p className="text-xs font-semibold text-slate-700">
                    {t.rubricTitle.replace("{count}", String(skill.rubric.length))}
                  </p>
                  <ul className="space-y-1 text-xs text-slate-600">
                    {skill.rubric.map((criterion, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="font-mono text-[#EA580C] font-semibold">
                          {idx + 1}.
                        </span>
                        <span>{criterion}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2.5 pt-2">
                <button
                  type="button"
                  onClick={() => onSelectLesson(skill)}
                  className="min-h-[44px] px-3 py-2.5 rounded-xl border border-slate-300 bg-white hover:bg-slate-50 text-[#0F2140] text-sm font-semibold inline-flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                >
                  <BookOpen className="w-4 h-4 shrink-0" />
                  <span className="truncate">{t.openLesson}</span>
                </button>
                <button
                  type="button"
                  onClick={() => onSelectTask(skill)}
                  className="min-h-[44px] px-3 py-2.5 rounded-xl bg-[#EA580C] hover:bg-[#DC4E07] text-white text-sm font-semibold inline-flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                >
                  <ClipboardCheck className="w-4 h-4 shrink-0" />
                  <span className="truncate">
                    {isCompleted ? t.reviewTask : t.startTask}
                  </span>
                </button>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
