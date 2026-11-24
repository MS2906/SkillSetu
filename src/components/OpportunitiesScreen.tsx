import { useMemo, useState } from "react";
import { AlertCircle, ArrowRight, CheckCircle2, MapPin } from "lucide-react";
import opportunitiesData from "../data/opportunities.json";
import type { EarnedBadge, Opportunity } from "../types";
import type { UIStrings } from "../i18n/translations";
import { rankOpportunities } from "../utils/matching";

interface OpportunitiesScreenProps {
  badges: EarnedBadge[];
  currentGoal: string;
  onLearnMissingSkill: (skillName: string) => void;
  t: UIStrings;
}

export function OpportunitiesScreen({
  badges,
  currentGoal,
  onLearnMissingSkill,
  t,
}: OpportunitiesScreenProps) {
  const [cityFilter, setCityFilter] = useState<string>("All");

  const opportunities = opportunitiesData as Opportunity[];

  const cities = useMemo(() => {
    const unique = Array.from(new Set(opportunities.map((o) => o.city))).sort();
    return ["All", ...unique];
  }, [opportunities]);

  const ranked = useMemo(() => {
    const list = rankOpportunities(opportunities, badges, currentGoal);
    if (cityFilter === "All") {
      return list;
    }
    return list.filter((opp) => opp.city === cityFilter);
  }, [opportunities, badges, currentGoal, cityFilter]);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="space-y-4">
        <div className="space-y-1.5">
          <h1 className="font-display text-2xl sm:text-3xl font-bold text-[#0F2140] tracking-tight">
            {t.opportunitiesTitle}
          </h1>
          <p className="text-sm sm:text-base text-slate-600 max-w-3xl">
            {t.opportunitiesSubtitle}
          </p>
        </div>

        {/* Interactive City Filter */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1">
          {cities.map((city) => {
            const active = cityFilter === city;
            return (
              <button
                key={city}
                type="button"
                onClick={() => setCityFilter(city)}
                className={`min-h-[38px] px-3.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap shrink-0 transition-colors cursor-pointer ${
                  active
                    ? "bg-[#0F2140] text-white"
                    : "bg-white border border-slate-200 text-slate-600 hover:text-[#0F2140]"
                }`}
              >
                {city}
              </button>
            );
          })}
        </div>
      </div>

      {/* Ranked Listings Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {ranked.map((opp, idx) => {
          const overlapPct =
            opp.required_skills.length > 0
              ? Math.round(
                  (opp.matchedSkills.length / opp.required_skills.length) * 100,
                )
              : 0;

          return (
            <article
              key={opp.id}
              className="bg-white border border-slate-200 rounded-2xl p-6 flex flex-col justify-between gap-5"
            >
              <div className="space-y-4">
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-1 min-w-0">
                    <p className="text-xs text-slate-500">
                      #{idx + 1} · {opp.organisation} ·{" "}
                      <span className="inline-flex items-center gap-1">
                        <MapPin className="w-3 h-3 inline" />
                        {opp.city}
                      </span>
                    </p>
                    <h2 className="font-display text-lg font-bold text-[#0F2140]">
                      {opp.title}
                    </h2>
                    <p className="text-xs text-slate-500">
                      {opp.sector} ·{" "}
                      <span className="font-mono tabular-nums text-[#0F2140] font-medium">
                        {opp.pay}
                      </span>
                    </p>
                  </div>

                  <div className="text-right shrink-0">
                    <span className="font-mono text-base font-bold tabular-nums text-[#EA580C]">
                      {overlapPct}%
                    </span>
                    <p className="text-[11px] text-slate-500">overlap</p>
                  </div>
                </div>

                {/* Why You Match */}
                <div className="pt-3 border-t border-slate-100 space-y-1.5">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-800">
                    <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                    <span>{t.whyYouMatch}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    {opp.whyYouMatch}
                  </p>
                  {opp.matchedSkills.length > 0 ? (
                    <p className="text-xs text-emerald-800 font-medium">
                      Matched: {opp.matchedSkills.join(" · ")}
                    </p>
                  ) : null}
                </div>

                {/* Skill Missing */}
                {opp.missingSkills.length > 0 ? (
                  <div className="pt-3 border-t border-slate-100 space-y-1.5">
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-amber-800">
                      <AlertCircle className="w-4 h-4 text-amber-700 shrink-0" />
                      <span>{t.skillMissing}</span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {opp.missingSkills.join(" · ")}
                    </p>
                  </div>
                ) : null}
              </div>

              {opp.missingSkills.length > 0 ? (
                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() =>
                      onLearnMissingSkill(
                        `${opp.title} (${opp.missingSkills[0]})`,
                      )
                    }
                    className="min-h-[42px] px-4 py-2 rounded-xl border border-slate-300 hover:border-[#EA580C] hover:text-[#EA580C] text-[#0F2140] text-xs font-semibold inline-flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <span>
                      {t.learnMissingSkill}: {opp.missingSkills[0]}
                    </span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              ) : null}
            </article>
          );
        })}
      </div>
    </div>
  );
}
