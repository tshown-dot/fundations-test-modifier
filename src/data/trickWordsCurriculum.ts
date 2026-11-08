/**
 * Official Wilson Fundations Second Edition Trick Word Curriculum
 * Extracted directly from:
 *  - Grade1-TrickWords (Level 1): 93 total trick words
 *  - Level 2 Trick Word List: 84 total trick words
 */

export const LEVEL_1_TRICK_WORDS_BY_UNIT: Record<number, string[]> = {
  1: [],
  2: ['the', 'a', 'and', 'is', 'his', 'of'],
  3: ['as', 'has', 'to', 'into', 'we', 'he', 'she', 'be', 'me', 'for', 'or'],
  4: ['you', 'your', 'I', 'they', 'was', 'one', 'said'],
  5: ['from', 'have', 'do', 'does'],
  6: ['were', 'are', 'who', 'what', 'when', 'where', 'there', 'here'],
  7: ['why', 'by', 'my', 'try', 'put', 'two', 'too', 'very', 'also', 'some', 'come'],
  8: ['would', 'could', 'should', 'her', 'over', 'number'],
  9: ['say', 'says', 'see', 'between', 'each'],
  10: ['any', 'many', 'how', 'now', 'down', 'out', 'about', 'our'],
  11: ['friend', 'other', 'another', 'none', 'nothing'],
  12: ['people', 'month', 'little', 'been', 'own', 'want', 'Mr.', 'Mrs.'],
  13: ['work', 'word', 'write', 'being', 'their', 'first', 'look', 'good', 'new'],
  14: ['water', 'called', 'day', 'may', 'way'],
};

export const LEVEL_2_TRICK_WORDS_BY_UNIT: Record<number, string[]> = {
  1: [],
  2: ['shall', 'full', 'pull', 'both', 'talk', 'walk'],
  3: ['done', 'goes', 'pretty'],
  4: ['again', 'please', 'animal', 'sure', 'use', 'used'],
  5: ['against', 'knew', 'know', 'always', 'often', 'once'],
  6: ['only', 'house', 'move', 'right', 'place', 'together'],
  7: ['eight', 'large', 'change', 'city', 'every', 'family', 'night', 'carry', 'something'],
  8: ['world', 'answer', 'different'],
  9: ['picture', 'learn', 'earth', 'father', 'brother', 'mother'],
  10: ['great', 'country', 'away', 'America', 'school', 'thought'],
  11: ['whose', 'won', 'son', 'breakfast', 'head', 'ready'],
  12: ['favorite', 'early', 'ocean'],
  13: ['Monday', 'Tuesday', 'cousin', 'lose', 'tomorrow', 'beautiful'],
  14: ['Wednesday', 'Thursday', 'Saturday', 'bought', 'brought', 'piece'],
  15: ['January', 'February', 'July', 'enough', 'special', 'December'],
  16: ['August', 'laugh', 'daughter'],
  17: ['trouble', 'couple', 'young'],
};

/**
 * Returns all trick words taught up to a specific level and unit.
 * For Level 2 students: pulls ALL Level 1 trick words (Units 1-14) PLUS Level 2 words up to `unit`.
 * For Level 1 students: pulls Level 1 words up to `unit`.
 */
export function getTaughtTrickWords(level: number, unit: number): string[] {
  const pool = new Set<string>();

  if (level >= 2) {
    // All Level 1 trick words are taught before Level 2
    Object.values(LEVEL_1_TRICK_WORDS_BY_UNIT).forEach((words) => {
      words.forEach((w) => pool.add(w));
    });

    // Plus Level 2 trick words up to current unit
    for (let u = 1; u <= unit; u++) {
      const uWords = LEVEL_2_TRICK_WORDS_BY_UNIT[u] || [];
      uWords.forEach((w) => pool.add(w));
    }
  } else {
    // Level 1: words taught up to current unit
    for (let u = 1; u <= unit; u++) {
      const uWords = LEVEL_1_TRICK_WORDS_BY_UNIT[u] || [];
      uWords.forEach((w) => pool.add(w));
    }
  }

  return Array.from(pool);
}

/**
 * Standard Levenshtein distance for string edit similarity.
 */
function levenshteinDistance(s1: string, s2: string): number {
  if (s1 === s2) return 0;
  if (s1.length === 0) return s2.length;
  if (s2.length === 0) return s1.length;

  const v0 = new Array(s2.length + 1);
  const v1 = new Array(s2.length + 1);

  for (let i = 0; i <= s2.length; i++) v0[i] = i;

  for (let i = 0; i < s1.length; i++) {
    v1[0] = i + 1;
    for (let j = 0; j < s2.length; j++) {
      const cost = s1[i] === s2[j] ? 0 : 1;
      v1[j + 1] = Math.min(v1[j] + 1, v0[j + 1] + 1, v0[j] + cost);
    }
    for (let j = 0; j <= s2.length; j++) v0[j] = v1[j];
  }

  return v0[s2.length];
}

/**
 * Pedagogical similarity metric:
 * Evaluates how visually and phonologically similar a candidate trick word is to the target.
 * Emphasizes initial letter, prefixes, suffixes (rhymes/inflections), length, and letter composition.
 */
export function scoreTrickWordSimilarity(target: string, candidate: string): number {
  const t = target.toLowerCase().replace(/[.,!?;:]/g, '');
  const c = candidate.toLowerCase().replace(/[.,!?;:]/g, '');

  if (t === c) return -9999; // Never pick the word itself

  let score = 0;

  // 1. Length similarity
  const lenDiff = Math.abs(t.length - c.length);
  score -= lenDiff * 8;
  if (lenDiff === 0) score += 25;
  else if (lenDiff === 1) score += 12;

  // 2. Initial letters match (crucial for elementary sight word identification)
  if (t.length > 0 && c.length > 0 && t[0] === c[0]) {
    score += 45;
    if (t.length > 1 && c.length > 1 && t.slice(0, 2) === c.slice(0, 2)) {
      score += 35;
      if (t.length > 2 && c.length > 2 && t.slice(0, 3) === c.slice(0, 3)) {
        score += 25;
      }
    }
  }

  // 3. Ending letters match (rhymes, inflections like -ed, -er, -lk, -ight, -ould)
  if (t.length > 0 && c.length > 0 && t[t.length - 1] === c[c.length - 1]) {
    score += 25;
    if (t.length > 1 && c.length > 1 && t.slice(-2) === c.slice(-2)) {
      score += 30;
      if (t.length > 2 && c.length > 2 && t.slice(-3) === c.slice(-3)) {
        score += 30;
      }
    }
  }

  // 4. Character overlap
  const tChars = new Set(t.split(''));
  const cChars = new Set(c.split(''));
  let sharedCount = 0;
  tChars.forEach((ch) => {
    if (cChars.has(ch)) sharedCount++;
  });
  score += sharedCount * 4;

  // 5. Levenshtein distance bonus
  const dist = levenshteinDistance(t, c);
  score += Math.max(0, 40 - dist * 12);

  return score;
}

/**
 * Returns the 2 best real taught trick words as distractors for a given target word.
 * If siblingTargetWords is provided, it avoids using other tested target words from the same sheet
 * as distractors (whenever sufficient other taught words exist in the curriculum pool).
 */
export function getSmartTrickWordDistractors(
  targetWord: string,
  level: number = 2,
  unit: number = 4,
  siblingTargetWords?: string[]
): [string, string] {
  const cleanTarget = targetWord.trim().replace(/[.,!?;:]/g, '').toLowerCase();
  const pool = getTaughtTrickWords(level, unit);

  // Normalize sibling targets to avoid cross-item giveaway on the same page
  const siblingSet = new Set(
    (siblingTargetWords || []).map((w) => w.trim().replace(/[.,!?;:]/g, '').toLowerCase())
  );
  siblingSet.add(cleanTarget);

  // First try pool excluding target and all sibling target words
  let eligible = pool.filter(
    (w) => !siblingSet.has(w.toLowerCase().replace(/[.,!?;:]/g, ''))
  );

  // Fallback to only excluding the target word itself if pool is small
  if (eligible.length < 2) {
    eligible = pool.filter(
      (w) => w.toLowerCase().replace(/[.,!?;:]/g, '') !== cleanTarget
    );
  }

  if (eligible.length === 0) {
    return ['the', 'and'];
  }
  if (eligible.length === 1) {
    return [eligible[0], 'the'];
  }

  // Score each candidate
  const scored = eligible.map((cand) => ({
    word: cand,
    score: scoreTrickWordSimilarity(cleanTarget, cand),
  }));

  // Sort descending by similarity score, then alphabetically for deterministic consistency
  scored.sort((a, b) => {
    if (b.score !== a.score) return b.score - a.score;
    return a.word.localeCompare(b.word);
  });

  return [scored[0].word, scored[1].word];
}

/**
 * Returns a 3-option multiple-choice bank (1 target + 2 distractors).
 * The target's placement rotates based on itemNumber so students don't guess a fixed position.
 */
export function getTrickWordBankOptions(
  targetWord: string,
  level: number = 2,
  unit: number = 4,
  itemNumber: number = 1,
  manualDistractors?: string[],
  siblingTargetWords?: string[]
): string[] {
  const cleanWord = targetWord.trim().replace(/[.,!?;:]/g, '');

  let d1: string;
  let d2: string;

  if (manualDistractors && manualDistractors.length >= 2 && manualDistractors[0] && manualDistractors[1]) {
    d1 = manualDistractors[0].trim();
    d2 = manualDistractors[1].trim();
  } else {
    const distractors = getSmartTrickWordDistractors(cleanWord, level, unit, siblingTargetWords);
    d1 = distractors[0];
    d2 = distractors[1];
  }

  // Deterministically vary the correct answer position across items
  // item 1 -> Position B (middle)
  // item 2 -> Position A (first)
  // item 3 -> Position C (last)
  // item 4 -> Position B
  // item 5 -> Position A
  const positionPattern = (itemNumber - 1) % 3;
  if (positionPattern === 0) {
    return [d1, cleanWord, d2];
  } else if (positionPattern === 1) {
    return [cleanWord, d1, d2];
  } else {
    return [d1, d2, cleanWord];
  }
}
