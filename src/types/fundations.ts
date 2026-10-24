export type ModificationLevel = 'baseline' | 'level1' | 'level2' | 'level3' | 'custom';

export interface SoundItem {
  number: number;
  prompt: string; // e.g. "/d/"
  answers: string[]; // e.g. ["d", "ed"]
}

export interface WordTapUnit {
  text: string;
  isDigraphOrSuffix?: boolean;
  type?: 'single' | 'digraph' | 'blend' | 'suffix' | 'welded';
}

export interface WordItem {
  number: number;
  word: string; // e.g. "bunches"
  baseword?: string; // e.g. "bunch"
  suffix?: string; // e.g. "es"
  tapUnits: WordTapUnit[]; // e.g. [{text: 'b'}, {text: 'u'}, {text: 'n'}, {text: 'ch', isDigraphOrSuffix: true}, {text: 'es', isDigraphOrSuffix: true}]
  markingDescription?: string;
}

export interface TrickWordItem {
  number: number;
  word: string; // e.g. "again"
}

export interface SentenceItem {
  number: number;
  text: string; // e.g. "The fastest foxes sprinted there by the hills."
  words: string[];
  phoneticWords: string[];
  trickWords: string[];
  punctuation: string; // e.g. "."
}

export interface UnitTestData {
  level: number; // e.g. 2
  unit: number; // e.g. 4
  title: string;
  totalScore: number; // e.g. 25
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
  // Words mods
  wordTapBlanks: boolean; // Level 1: blanks per tap unit
  wordWiderDigraphSuffix: boolean; // Level 1: wider slots for digraphs and suffixes
  // Trick Words mods
  trickWordLetterBlanks: boolean; // Level 1: 1 line per letter
  // Sentence mods
  sentenceWordBlanks: boolean; // Level 1: discrete blanks for each word
  sentencePunctuationCue: boolean; // Level 1: show period/punctuation cue at end
}
