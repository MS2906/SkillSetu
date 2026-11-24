import { Award, Briefcase, Compass, Home } from "lucide-react";
import type { ScreenId } from "../types";
import type { UIStrings } from "../i18n/translations";

interface TopNavProps {
  activeScreen: ScreenId;
  onNavigate: (screen: ScreenId) => void;
  hasPathway: boolean;
  badgeCount: number;
  t: UIStrings;
}

export function TopNav({
  activeScreen,
  onNavigate,
  hasPathway,
  badgeCount,
  t,
}: TopNavProps) {
  const navItems: Array<{ id: ScreenId; label: string; icon: typeof Home }> = [
    { id: "home", label: t.navHome, icon: Home },
    { id: "pathway", label: t.navPathway, icon: Compass },
    { id: "passport", label: t.navPassport, icon: Award },
    { id: "opportunities", label: t.navJobs, icon: Briefcase },
  ];

  const isPathwayGroup =
    activeScreen === "pathway" ||
    activeScreen === "lesson" ||
    activeScreen === "task";

  return (
    <>
      <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-12 md:h-16 flex items-center justify-between gap-8">
          {/* Zone 1: Single text element wordmark */}
          <button
            type="button"
            onClick={() => onNavigate("home")}
            className="font-display text-lg md:text-xl font-bold tracking-tight text-[#0F2140] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#EA580C] cursor-pointer"
          >
            SkillSetu
          </button>

          {/* Zone 2: 4 concise single-line text nav links on desktop */}
          <nav
            aria-label="Primary navigation"
            className="hidden md:flex items-center gap-7 text-sm font-medium"
          >
            {navItems.map((item) => {
              const active =
                item.id === "pathway" ? isPathwayGroup : activeScreen === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => onNavigate(item.id)}
                  className={`relative py-2 whitespace-nowrap shrink-0 transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#EA580C] ${
                    active
                      ? "text-[#0F2140] font-semibold"
                      : "text-slate-600 hover:text-[#0F2140]"
                  }`}
                >
                  <span>{item.label}</span>
                  {item.id === "passport" && badgeCount > 0 ? (
                    <span className="ml-1.5 font-mono text-xs tabular-nums text-[#EA580C]">
                      ({badgeCount})
                    </span>
                  ) : null}
                  {active ? (
                    <span
                      aria-hidden="true"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#EA580C]"
                    />
                  ) : null}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="flex items-center shrink-0">
            <button
              type="button"
              onClick={() =>
                onNavigate(hasPathway ? "pathway" : "opportunities")
              }
              className="min-h-[40px] px-4 py-2 text-xs md:text-sm font-semibold text-white bg-[#0F2140] hover:bg-[#17305C] rounded-xl transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#EA580C]"
            >
              {hasPathway ? t.navPathway : t.navJobs}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Fixed Bottom Tab Bar */}
      <nav
        aria-label="Mobile navigation"
        className="md:hidden fixed bottom-0 left-0 right-0 z-40 h-14 bg-white/95 backdrop-blur-md border-t border-slate-200 grid grid-cols-4 items-center px-1"
      >
        {navItems.map((item) => {
          const Icon = item.icon;
          const active =
            item.id === "pathway" ? isPathwayGroup : activeScreen === item.id;
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => onNavigate(item.id)}
              className={`min-h-[44px] flex flex-col items-center justify-center gap-0.5 transition-colors cursor-pointer ${
                active
                  ? "text-[#EA580C]"
                  : "text-slate-500 hover:text-[#0F2140]"
              }`}
            >
              <Icon className="w-5 h-5" strokeWidth={active ? 2.25 : 1.75} />
              <span className="text-[11px] font-medium tracking-tight whitespace-nowrap">
                {item.label}
              </span>
            </button>
          );
        })}
      </nav>
    </>
  );
}
