import { UnitTestData } from '../types/fundations';

// Wilson Fundations Glued / Welded Sounds
export const GLUED_SOUNDS = [
  'all',
  'am',
  'an',
  'ang',
  'ing',
  'ong',
  'ung',
  'ank',
  'ink',
  'onk',
  'unk',
  'ild',
  'ind',
  'old',
  'olt',
  'ost',
] as const;

export const sampleTests: Record<string, UnitTestData> = {
  'level-2-unit-4': {
    level: 2,
    unit: 4,
    title: 'Fundations: End of Unit Test',
    totalScore: 25,
    sounds: [
      { number: 1, prompt: '/d/', answers: ['d', 'ed'] },
      { number: 2, prompt: '/t/', answers: ['t', 'ed'] },
      { number: 3, prompt: '/ing/', answers: ['ing'] },
      { number: 4, prompt: '/s/', answers: ['s'] },
      { number: 5, prompt: '/z/', answers: ['z', 's'] },
    ],
    words: [
      {
        number: 1,
        word: 'bunches',
        baseword: 'bunch',
        suffix: 'es',
        tapUnits: [
          { text: 'b', type: 'single' },
          { text: 'u', type: 'single' },
          { text: 'n', type: 'single' },
          { text: 'ch', isDigraphOrSuffix: true, type: 'digraph' },
          { text: 'es', isDigraphOrSuffix: true, type: 'suffix' },
        ],
        markingDescription: 'breve on u, c closed syllable, circle es suffix',
      },
      {
        number: 2,
        word: 'swishing',
        baseword: 'swish',
        suffix: 'ing',
        tapUnits: [
          { text: 's', type: 'single' },
          { text: 'w', type: 'single' },
          { text: 'i', type: 'single' },
          { text: 'sh', isDigraphOrSuffix: true, type: 'digraph' },
          { text: 'ing', isDigraphOrSuffix: true, type: 'suffix' },
        ],
        markingDescription: 'breve on i, c closed syllable, circle ing suffix',
      },
      {
        number: 3,
        word: 'coldest',
        baseword: 'cold',
        suffix: 'est',
        tapUnits: [
          { text: 'c', type: 'single' },
          { text: 'old', isDigraphOrSuffix: true, type: 'welded' }, // Glued sound /ōld/ = 1 tap unit!
          { text: 'est', isDigraphOrSuffix: true, type: 'suffix' },
        ],
        markingDescription: 'macron on o, closed exception (c/), box old, circle est suffix',
      },
      {
        number: 4,
        word: 'spelled',
        baseword: 'spell',
        suffix: 'ed',
        tapUnits: [
          { text: 's', type: 'single' },
          { text: 'p', type: 'single' },
          { text: 'e', type: 'single' },
          { text: 'll', isDigraphOrSuffix: true, type: 'blend' }, // Bonus letter unit
          { text: 'ed', isDigraphOrSuffix: true, type: 'suffix' },
        ],
        markingDescription: '/d/ over ed, breve on e, star bonus l, c closed, circle ed suffix',
      },
      {
        number: 5,
        word: 'dusted',
        baseword: 'dust',
        suffix: 'ed',
        tapUnits: [
          { text: 'd', type: 'single' },
          { text: 'u', type: 'single' },
          { text: 's', type: 'single' },
          { text: 't', type: 'single' },
          { text: 'ed', isDigraphOrSuffix: true, type: 'suffix' },
        ],
        markingDescription: '/id/ over ed, breve on u, c closed syllable, circle ed suffix',
      },
    ],
    trickWords: [
      { number: 1, word: 'again' },
      { number: 2, word: 'animal' },
    ],
    sentences: [
      {
        number: 1,
        text: 'The fastest foxes sprinted there by the hills.',
        words: ['The', 'fastest', 'foxes', 'sprinted', 'there', 'by', 'the', 'hills'],
        phoneticWords: ['fastest', 'foxes', 'sprinted', 'hills'],
        trickWords: ['there'],
        punctuation: '.',
      },
      {
        number: 2,
        text: 'Please use the blocks.',
        words: ['Please', 'use', 'the', 'blocks'],
        phoneticWords: ['blocks'],
        trickWords: ['Please', 'use'],
        punctuation: '.',
      },
    ],
  },
};
