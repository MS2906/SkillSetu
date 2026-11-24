import { useEffect, useRef, useState } from "react";
import { HomeScreen } from "./components/HomeScreen";
import { LessonScreen } from "./components/LessonScreen";
import { OpportunitiesScreen } from "./components/OpportunitiesScreen";
import { PassportScreen } from "./components/PassportScreen";
import { PathwayScreen } from "./components/PathwayScreen";
import { TaskScreen } from "./components/TaskScreen";
import { TopNav } from "./components/TopNav";
import { TRANSLATIONS } from "./i18n/translations";
import type {
  EarnedBadge,
  GradeResult,
  Language,
  PathwayPlan,
  ScreenId,
  SharedPassportPayload,
  SkillModule,
} from "./types";
import { decodePassportPayload } from "./utils/passportShare";
import { postJson } from "./utils/api";

interface PersistedState {
  learnerName: string;
  goal: string;
  language: Language;
  pathway: PathwayPlan | null;
  badges: EarnedBadge[];
  answers: Record<string, string>;
  grades: Record<string, GradeResult>;
}

const STORAGE_KEY = "skillsetu_state_v1";

function loadInitialState(): PersistedState {
  const defaults: PersistedState = {
    learnerName: "Asha Kumari",
    goal: "",
    language: "en",
    pathway: null,
    badges: [],
    answers: {},
    grades: {},
  };

  if (typeof window === "undefined") {
    return defaults;
  }

  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      return defaults;
    }
    const parsed = JSON.parse(raw) as Partial<PersistedState>;
    return {
      learnerName:
        typeof parsed.learnerName === "string"
          ? parsed.learnerName
          : defaults.learnerName,
      goal: typeof parsed.goal === "string" ? parsed.goal : defaults.goal,
      language:
        parsed.language === "en" ||
        parsed.language === "hi" ||
        parsed.language === "kn"
          ? parsed.language
          : "en",
      pathway: parsed.pathway ?? null,
      badges: Array.isArray(parsed.badges) ? parsed.badges : [],
      answers: parsed.answers ?? {},
      grades: parsed.grades ?? {},
    };
  } catch {
    return defaults;
  }
}

function getInitialSharedPassport(): SharedPassportPayload | null {
  if (typeof window === "undefined") {
    return null;
  }
  const params = new URLSearchParams(window.location.search);
  const encoded = params.get("passport");
  if (!encoded) {
    return null;
  }
  return decodePassportPayload(encoded);
}

export default function App() {
  const [state, setState] = useState<PersistedState>(loadInitialState);
  const [sharedView, setSharedView] = useState<SharedPassportPayload | null>(
    getInitialSharedPassport,
  );
  const [activeScreen, setActiveScreen] = useState<ScreenId>(() =>
    getInitialSharedPassport() ? "passport" : "home",
  );
  const [selectedSkillId, setSelectedSkillId] = useState<string | null>(
    () => state.pathway?.skills?.[0]?.id ?? null,
  );
  const [isGenerating, setIsGenerating] = useState(false);
  const [pathwayError, setPathwayError] = useState<string | null>(null);
  const pathwayRequestIdRef = useRef(0);
  const languageRef = useRef<Language>(state.language);
  const activePathwayGoalRef = useRef<string | null>(state.pathway?.goal ?? null);
  const pendingNavigateToPathwayRef = useRef(false);

  useEffect(() => {
    languageRef.current = state.language;
  }, [state.language]);

  useEffect(() => {
    if (state.pathway?.goal) {
      activePathwayGoalRef.current = state.pathway.goal;
    }
  }, [state.pathway?.goal]);

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch {
      // Ignore storage quota errors
    }
  }, [state]);

  const t = TRANSLATIONS[state.language];

  const activeSkill: SkillModule | null =
    state.pathway?.skills.find((s) => s.id === selectedSkillId) ??
    state.pathway?.skills[0] ??
    null;

  const handleLanguageChange = async (newLang: Language) => {
    if (newLang === languageRef.current) {
      return;
    }

    languageRef.current = newLang;
    const targetGoal = state.pathway?.goal ?? activePathwayGoalRef.current;

    setState((prev) => ({
      ...prev,
      language: newLang,
      pathway:
        prev.pathway && prev.pathway.language !== newLang ? null : prev.pathway,
    }));

    if (!targetGoal) {
      return;
    }

    const reqId = ++pathwayRequestIdRef.current;
    setIsGenerating(true);
    setPathwayError(null);

    try {
      const plan = await postJson<PathwayPlan>("/api/pathway", {
        goal: targetGoal,
        language: newLang,
      });

      if (pathwayRequestIdRef.current === reqId) {
        activePathwayGoalRef.current = plan.goal;
        setState((prev) => ({
          ...prev,
          pathway: plan,
        }));
        if (pendingNavigateToPathwayRef.current) {
          pendingNavigateToPathwayRef.current = false;
          setSelectedSkillId(plan.skills[0]?.id ?? null);
          setActiveScreen("pathway");
        }
      }
    } catch (err) {
      if (pathwayRequestIdRef.current === reqId) {
        pendingNavigateToPathwayRef.current = false;
        setPathwayError(
          err instanceof Error ? err.message : "Server not reachable, please retry",
        );
      }
    } finally {
      if (pathwayRequestIdRef.current === reqId) {
        setIsGenerating(false);
      }
    }
  };

  const handleGeneratePathway = async (goalOverride?: string) => {
    const targetGoal = (goalOverride ?? state.goal).trim();
    if (!targetGoal || isGenerating) {
      return;
    }

    const requestLang = languageRef.current;
    activePathwayGoalRef.current = targetGoal;
    pendingNavigateToPathwayRef.current = true;
    const reqId = ++pathwayRequestIdRef.current;
    setIsGenerating(true);
    setPathwayError(null);

    try {
      const plan = await postJson<PathwayPlan>("/api/pathway", {
        goal: targetGoal,
        language: requestLang,
      });

      if (pathwayRequestIdRef.current === reqId) {
        pendingNavigateToPathwayRef.current = false;
        activePathwayGoalRef.current = plan.goal;
        setState((prev) => ({
          ...prev,
          goal: targetGoal,
          pathway: plan,
        }));
        setSelectedSkillId(plan.skills[0]?.id ?? null);
        setActiveScreen("pathway");
      }
    } catch (err) {
      if (pathwayRequestIdRef.current === reqId) {
        pendingNavigateToPathwayRef.current = false;
        setPathwayError(
          err instanceof Error ? err.message : "Server not reachable, please retry",
        );
      }
    } finally {
      if (pathwayRequestIdRef.current === reqId) {
        setIsGenerating(false);
      }
    }
  };

  const handleGraded = (
    skill: SkillModule,
    answer: string,
    result: GradeResult,
  ) => {
    const taskKey = `${state.pathway?.goal ?? "goal"}::${skill.id}`;
    const today = new Date().toISOString().slice(0, 10);

    setState((prev) => {
      let nextBadges = prev.badges;
      if (result.passed) {
        const existingIndex = prev.badges.findIndex(
          (b) => b.skill.toLowerCase() === skill.title.toLowerCase(),
        );
        const newBadge: EarnedBadge = {
          id: `${skill.id}-${Date.now()}`,
          skill: skill.title,
          score: result.score,
          date: today,
          goal: prev.pathway?.goal ?? prev.goal,
          keywords: skill.keywords ?? [],
        };
        if (existingIndex >= 0) {
          nextBadges = [...prev.badges];
          nextBadges[existingIndex] = newBadge;
        } else {
          nextBadges = [newBadge, ...prev.badges];
        }
      }

      return {
        ...prev,
        badges: nextBadges,
        answers: {
          ...prev.answers,
          [taskKey]: answer,
        },
        grades: {
          ...prev.grades,
          [taskKey]: result,
        },
      };
    });
  };

  const handleExitSharedView = () => {
    setSharedView(null);
    if (typeof window !== "undefined") {
      const url = new URL(window.location.href);
      url.searchParams.delete("passport");
      window.history.replaceState({}, "", url.toString());
    }
  };

  const handleLearnMissingSkill = (skillGoal: string) => {
    setState((prev) => ({ ...prev, goal: skillGoal }));
    setActiveScreen("home");
    void handleGeneratePathway(skillGoal);
  };

  const currentTaskKey = activeSkill
    ? `${state.pathway?.goal ?? "goal"}::${activeSkill.id}`
    : "";

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-[#0F172A]">
      <TopNav
        activeScreen={activeScreen}
        onNavigate={(screen) => {
          if (screen !== "passport" && sharedView) {
            handleExitSharedView();
          }
          setActiveScreen(screen);
        }}
        hasPathway={Boolean(state.pathway)}
        badgeCount={state.badges.length}
        t={t}
      />

      <main className="flex-1 w-full max-w-6xl mx-auto px-4 sm:px-6 pt-6 sm:pt-10 pb-24 md:pb-14">
        {activeScreen === "home" ? (
          <HomeScreen
            goal={state.goal}
            onGoalChange={(val) =>
              setState((prev) => ({ ...prev, goal: val }))
            }
            language={state.language}
            onLanguageChange={(lang) => {
              void handleLanguageChange(lang);
            }}
            onGeneratePathway={handleGeneratePathway}
            isLoading={isGenerating}
            error={pathwayError}
            t={t}
          />
        ) : null}

        {activeScreen === "pathway" ? (
          <PathwayScreen
            pathway={state.pathway}
            badges={state.badges}
            isGenerating={isGenerating}
            onSelectLesson={(skill) => {
              setSelectedSkillId(skill.id);
              setActiveScreen("lesson");
            }}
            onSelectTask={(skill) => {
              setSelectedSkillId(skill.id);
              setActiveScreen("task");
            }}
            onGoHome={() => setActiveScreen("home")}
            t={t}
          />
        ) : null}

        {activeScreen === "lesson" ? (
          <LessonScreen
            skill={activeSkill}
            language={state.language}
            onBack={() => setActiveScreen("pathway")}
            onStartTask={(skill) => {
              setSelectedSkillId(skill.id);
              setActiveScreen("task");
            }}
            t={t}
          />
        ) : null}

        {activeScreen === "task" ? (
          <TaskScreen
            skill={activeSkill}
            language={state.language}
            savedAnswer={state.answers[currentTaskKey] ?? ""}
            savedResult={state.grades[currentTaskKey] ?? null}
            onBackToPathway={() => setActiveScreen("pathway")}
            onGoToPassport={() => setActiveScreen("passport")}
            onGraded={handleGraded}
            t={t}
          />
        ) : null}

        {activeScreen === "passport" ? (
          <PassportScreen
            learnerName={state.learnerName}
            onLearnerNameChange={(name) =>
              setState((prev) => ({ ...prev, learnerName: name }))
            }
            goal={state.pathway?.goal ?? state.goal}
            badges={state.badges}
            sharedView={sharedView}
            onExitSharedView={handleExitSharedView}
            onGoToPathway={() => setActiveScreen("pathway")}
            onGoToJobs={() => setActiveScreen("opportunities")}
            t={t}
          />
        ) : null}

        {activeScreen === "opportunities" ? (
          <OpportunitiesScreen
            badges={state.badges}
            currentGoal={state.pathway?.goal ?? state.goal}
            onLearnMissingSkill={handleLearnMissingSkill}
            t={t}
          />
        ) : null}
      </main>
    </div>
  );
}
