export type Language = "en" | "hi" | "kn";

export type ScreenId =
  | "home"
  | "pathway"
  | "lesson"
  | "task"
  | "passport"
  | "opportunities";

export interface SkillModule {
  id: string;
  week: 1 | 2;
  days: string;
  title: string;
  summary: string;
  lesson: string;
  taskPrompt: string;
  rubric: string[];
  keywords: string[];
}

export interface PathwayPlan {
  goal: string;
  language: Language;
  goalSummary: string;
  twoWeekOverview: string;
  skills: SkillModule[];
  createdAt: string;
}

export interface RubricEvaluation {
  point: string;
  met: boolean;
  evidence: string;
}

export interface GradeResult {
  score: number;
  feedback: string;
  passed: boolean;
  rubric?: RubricEvaluation[];
  source?: "gemini" | "fallback";
}

export interface EarnedBadge {
  id: string;
  skill: string;
  score: number;
  date: string;
  goal: string;
  keywords: string[];
}

export interface Opportunity {
  id: string;
  title: string;
  organisation: string;
  city: string;
  sector: string;
  pay: string;
  required_skills: string[];
}

export interface RankedOpportunity extends Opportunity {
  matchedSkills: string[];
  missingSkills: string[];
  matchScore: number;
  whyYouMatch: string;
}

export interface SharedPassportPayload {
  learnerName: string;
  goal: string;
  badges: Array<{
    skill: string;
    score: number;
    date: string;
  }>;
}
