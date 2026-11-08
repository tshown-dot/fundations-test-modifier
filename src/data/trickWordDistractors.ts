/**
 * Trick Word Distractors & Word Bank Generation
 * Backed by the official Fundations curriculum in trickWordsCurriculum.ts.
 * Distractors are selected from real trick words previously taught to the student.
 */

import { getTrickWordBankOptions, getSmartTrickWordDistractors } from './trickWordsCurriculum';

export { getTrickWordBankOptions, getSmartTrickWordDistractors };

/**
 * Returns a 3-option multiple choice array containing the word + 2 real taught trick words as distractors.
 * Retained for backwards compatibility.
 */
export function getTrickWordOptions(word: string, level: number = 2, unit: number = 4, itemNumber: number = 1): string[] {
  return getTrickWordBankOptions(word, level, unit, itemNumber);
}
