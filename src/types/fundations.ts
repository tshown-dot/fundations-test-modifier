export type ModificationLevel = 'baseline' | 'level1' | 'level2' | 'level3' | 'custom';

export type TileColorType = 'consonant' | 'vowel' | 'welded' | 'suffix';

export interface SoundItem {
  number: number;
  prompt: string; // e.g. "/d/"
  answers: string[]; // e.g. ["d", "ed"]
  tileTypes?: TileColorType[]; // color-coded tile types for each answer
}

export interface WordTapUnit {
  text: string;
  isDigraphOrSuffix?: boolean;
  type?: 'single' | 'digraph' | 'blend' | 'suffix' | 'welded';
  tileType?: TileColorType;
}

export interface WordItem {
  number: number;
  word: string; // e.g. "bunches"
  baseword?: string; // e.g. "bunch"
  suffix?: string; // e.g. "es"
  tapUnits: WordTapUnit[];
  markingDescription?: string; // District marking instruction
}

export interface TrickWordItem {
  number: number;
  word: string; // e.g. "again"
  distractors?: string[]; // e.g. ["agan", "agen"]
}

export interface SentenceWordToken {
  word: string;
  type: 'untested' | 'phonetic' | 'trick';
  tapCount?: number;
}

export interface SentenceItem {
  number: number;
  text: string;
  words: string[];
  phoneticWords: string[];
  trickWords: string[];
  punctuation: string; // e.g. "." or "?"
}

export interface UnitTestData {
  level: number; // 1 or 2
  unit: number; // 1 to 17
  title: string;
  totalScore: number;
  sounds: SoundItem[];
  words: WordItem[];
  trickWords: TrickWordItem[];
  sentences: SentenceItem[];
}

export interface ModificationSettings {
  level: ModificationLevel;
  // Sounds mods
  soundBlanksCount: boolean; // Level 1: show blanks for count of spellings
  soundShowCommas: boolean; // Level 1: comma between multiple sound blanks
  soundTileBoxes?: boolean; // Level 2: color-coded Fundations sound tile boxes

  // Words mods
  wordTapBlanks: boolean; // Level 1: blanks per tap unit
  wordWiderDigraphSuffix: boolean; // Level 1: wider slots for digraphs and suffixes
  wordTileTemplate?: boolean; // Level 2: connected color-coded tile boxes matching word structure
  wordShowMarkingPrompt?: boolean; // Level 2: print exact district marking directive

  // Trick Words mods
  trickWordLetterBlanks: boolean; // Level 1: 1 line per letter
  trickWordMultipleChoice?: boolean; // Level 2: 3-option word bank (1 correct + 2 distractors)

  // Sentence mods
  sentenceWordBlanks: boolean; // Level 1: discrete blanks for each word
  sentencePunctuationCue: boolean; // Level 1: show period/punctuation cue at end
  sentenceClozeScaffold?: boolean; // Level 2: Untested printed, Trick in ( ____ ), Phonetic with tap dashes
}
