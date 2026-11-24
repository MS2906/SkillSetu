import type { EarnedBadge, Opportunity, RankedOpportunity } from "../types";

const STOP_WORDS = new Set([
  "and",
  "the",
  "for",
  "with",
  "basics",
  "basic",
  "check",
  "setup",
  "entry",
  "skill",
  "skills",
]);

// Broad umbrella/sector terms that must never single-handedly mark an unrelated skill as matched
const BROAD_DOMAIN_WORDS = new Set([
  "solar",
  "ev",
  "retail",
  "customer",
  "service",
  "support",
  "office",
  "digital",
  "safety",
  "billing",
  "accounting",
  "tax",
  "workplace",
  "reporting",
  "communication",
  "resolution",
  "verification",
  "testing",
  "maintenance",
  "logging",
  "handling",
  "tracking",
  "management",
]);

// Specific domain tools/concepts whose single appearance genuinely indicates the skill
const DISTINCTIVE_SKILL_TOKENS = new Set([
  "harness",
  "ppe",
  "multimeter",
  "gst",
  "gstin",
  "tally",
  "ledger",
  "reconciliation",
  "upi",
  "pos",
  "upselling",
  "expiry",
  "fefo",
  "shelf",
  "tyre",
  "brake",
  "etiquette",
  "barcode",
  "hygiene",
  "whatsapp",
]);

function normalizeText(input: string): string {
  return input
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function tokenize(input: string): string[] {
  const norm = normalizeText(input);
  if (!norm) {
    return [];
  }
  return norm
    .split(" ")
    .filter((token) => token.length >= 2 && !STOP_WORDS.has(token));
}

function doesBadgeMatchRequiredSkill(
  reqSkill: string,
  badgeNormSources: string[],
  badgeTokenSet: Set<string>,
): boolean {
  const reqNorm = normalizeText(reqSkill);
  const reqTokens = tokenize(reqSkill);
  if (reqTokens.length === 0) {
    return false;
  }

  // 1. Direct multi-word phrase match from badge title or English keywords
  for (const src of badgeNormSources) {
    const srcWords = src.split(" ").filter(Boolean);
    if (srcWords.length >= 2 && reqNorm.includes(src)) {
      return true;
    }
    if (reqTokens.length >= 2 && src.includes(reqTokens.join(" "))) {
      return true;
    }
  }

  // 2. Specific (non-broad) token overlap check
  const matchedSpecificTokens = reqTokens.filter(
    (token) => !BROAD_DOMAIN_WORDS.has(token) && badgeTokenSet.has(token),
  );

  if (matchedSpecificTokens.length >= 2) {
    return true;
  }

  if (
    matchedSpecificTokens.length === 1 &&
    DISTINCTIVE_SKILL_TOKENS.has(matchedSpecificTokens[0])
  ) {
    return true;
  }

  return false;
}

function formatBadgeList(names: string[]): string {
  if (names.length === 0) return "";
  if (names.length === 1) return names[0];
  if (names.length === 2) return `${names[0]} and ${names[1]}`;
  return `${names.slice(0, -1).join(", ")}, and ${names[names.length - 1]}`;
}

export function rankOpportunities(
  opportunities: Opportunity[],
  badges: EarnedBadge[],
  currentGoal: string,
): RankedOpportunity[] {
  const badgeMatchers = badges.map((badge) => {
    const rawSources = [badge.skill, ...(badge.keywords ?? [])];
    const normSources = rawSources.map(normalizeText).filter(Boolean);
    const tokenSet = new Set<string>();
    for (const src of rawSources) {
      for (const token of tokenize(src)) {
        tokenSet.add(token);
      }
    }
    return { badge, normSources, tokenSet };
  });

  const allBadgeTokens = new Set<string>();
  for (const matcher of badgeMatchers) {
    for (const token of matcher.tokenSet) {
      allBadgeTokens.add(token);
    }
  }

  const goalTokens = new Set(tokenize(currentGoal));

  const ranked = opportunities.map((opp) => {
    const matchedSkills: string[] = [];
    const missingSkills: string[] = [];
    const badgeCoveredSkills = badgeMatchers.map(() => new Set<string>());
    let goalAffinity = 0;

    for (const reqSkill of opp.required_skills) {
      const reqTokens = tokenize(reqSkill);
      let hasBadgeMatch = false;
      if (badges.length > 0) {
        badgeMatchers.forEach((matcher, idx) => {
          if (
            doesBadgeMatchRequiredSkill(
              reqSkill,
              matcher.normSources,
              matcher.tokenSet,
            )
          ) {
            hasBadgeMatch = true;
            badgeCoveredSkills[idx].add(reqSkill);
          }
        });
      }

      if (hasBadgeMatch) {
        matchedSkills.push(reqSkill);
      } else {
        missingSkills.push(reqSkill);
      }

      if (reqTokens.some((token) => goalTokens.has(token))) {
        goalAffinity += 0.35;
      }
    }

    const titleTokens = tokenize(`${opp.title} ${opp.sector}`);
    const titleGoalMatch = titleTokens.some((t) => goalTokens.has(t)) ? 0.5 : 0;
    const titleBadgeMatch =
      badges.length > 0 && titleTokens.some((t) => allBadgeTokens.has(t))
        ? 0.75
        : 0;

    const overlapRatio =
      opp.required_skills.length > 0
        ? matchedSkills.length / opp.required_skills.length
        : 0;

    const matchScore =
      matchedSkills.length * 10 +
      overlapRatio * 5 +
      titleBadgeMatch +
      goalAffinity +
      titleGoalMatch;

    let whyYouMatch = "";
    if (matchedSkills.length > 0) {
      const contributingIndices = badgeCoveredSkills
        .map((covered, idx) => ({ idx, covered }))
        .filter((entry) => entry.covered.size > 0)
        .sort((a, b) => b.covered.size - a.covered.size || a.idx - b.idx);

      const uncovered = new Set(matchedSkills);
      const primaryIndices: number[] = [];
      const overlappingNames: string[] = [];

      for (const entry of contributingIndices) {
        const addsNewSkill = Array.from(entry.covered).some((sk) =>
          uncovered.has(sk),
        );
        if (addsNewSkill) {
          primaryIndices.push(entry.idx);
          for (const sk of entry.covered) {
            uncovered.delete(sk);
          }
        } else {
          overlappingNames.push(badgeMatchers[entry.idx].badge.skill);
        }
      }

      const primaryNames = primaryIndices
        .sort((a, b) => a - b)
        .map((idx) => badgeMatchers[idx].badge.skill);
      const isPlural = primaryNames.length > 1;
      const overlapNote =
        overlappingNames.length > 0
          ? ` (overlapping match: ${formatBadgeList(overlappingNames)})`
          : "";

      whyYouMatch = `Your earned badge${isPlural ? "s" : ""} (${formatBadgeList(
        primaryNames,
      )}) ${isPlural ? "cover" : "covers"} ${matchedSkills.length} of ${opp.required_skills.length} required skills${overlapNote}.`;
    } else if (goalAffinity > 0 || titleGoalMatch > 0) {
      whyYouMatch = `Aligns with your current learning goal (${currentGoal.trim()}); earn a badge on your pathway to unlock full skill overlap.`;
    } else if (badges.length > 0) {
      whyYouMatch = `Entry-level role open to cross-skilling; complete a targeted task for the missing skills below to boost your match.`;
    } else {
      whyYouMatch = `Entry-level opening in ${opp.sector}. Earn your first Skill Passport badge to rank higher for this role.`;
    }

    return {
      ...opp,
      matchedSkills,
      missingSkills,
      matchScore,
      whyYouMatch,
    };
  });

  return ranked.sort((a, b) => b.matchScore - a.matchScore);
}
