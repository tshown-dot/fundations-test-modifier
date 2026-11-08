import { TileColorType, WordItem, WordTapUnit } from '../types/fundations';
import { GLUED_SOUNDS } from '../data/curriculum';

export const VOWELS = new Set([
  'a', 'e', 'i', 'o', 'u',
  'a-e', 'e-e', 'i-e', 'o-e', 'u-e',
  'ai', 'ay', 'ee', 'ea', 'ey',
  'oi', 'oy', 'oa', 'oe', 'ow',
  'ou', 'oo', 'ue', 'ew', 'au', 'aw',
  'er', 'ir', 'ur', 'ar', 'or', 'ore',
  'y', // when vowel
]);

// Multi-letter suffixes that are always suffixes
export const MULTI_LETTER_SUFFIXES = new Set([
  'es', 'ed', 'ing', 'est', 'er', 'ful', 'less', 'ness', 'able', 'en', 'ish', 'ly',
]);

export const BONUS_AND_DIGRAPHS = [
  'ck', 'ch', 'sh', 'th', 'wh', 'ph', 'qu', 'll', 'ss', 'ff', 'zz'
];

export const COMMON_SUFFIXES = [
  'less', 'ness', 'ful', 'ing', 'est', 'es', 'ed', 'er', 'en', 'ly', 's'
];

const VOWEL_TEAMS_LIST = [
  'ai', 'ay', 'ee', 'ea', 'ey', 'oi', 'oy', 'oa', 'oe', 'ow',
  'ou', 'oo', 'ue', 'ew', 'au', 'aw'
];

const R_CONTROLLED_LIST = ['ar', 'er', 'ir', 'or', 'ur'];

const DIGRAPHS_LIST = [
  'ck', 'ch', 'sh', 'th', 'wh', 'ph', 'qu', 'wr', 'kn', 'gn',
  'ff', 'll', 'ss', 'zz'
];

function segmentMultiLetterChunk(chunk: string): WordTapUnit[] {
  const tiles: WordTapUnit[] = [];
  let i = 0;
  const s = chunk.toLowerCase();
  while (i < s.length) {
    let matched = false;

    // 1. Glued sounds
    for (const g of GLUED_SOUNDS) {
      if (s.startsWith(g, i)) {
        tiles.push({
          text: chunk.substr(i, g.length),
          type: 'welded',
          tileType: 'welded',
          isDigraphOrSuffix: true,
        });
        i += g.length;
        matched = true;
        break;
      }
    }
    if (matched) continue;

    // 2. Vowel teams
    for (const vt of VOWEL_TEAMS_LIST) {
      if (s.startsWith(vt, i)) {
        tiles.push({
          text: chunk.substr(i, vt.length),
          type: 'single',
          tileType: 'vowel',
          isDigraphOrSuffix: false,
        });
        i += vt.length;
        matched = true;
        break;
      }
    }
    if (matched) continue;

    // 3. R-controlled
    for (const rc of R_CONTROLLED_LIST) {
      if (s.startsWith(rc, i)) {
        tiles.push({
          text: chunk.substr(i, rc.length),
          type: 'single',
          tileType: 'vowel',
          isDigraphOrSuffix: false,
        });
        i += rc.length;
        matched = true;
        break;
      }
    }
    if (matched) continue;

    // 4. Digraphs & bonus letters
    for (const dg of DIGRAPHS_LIST) {
      if (s.startsWith(dg, i)) {
        tiles.push({
          text: chunk.substr(i, dg.length),
          type: 'digraph',
          tileType: 'consonant',
          isDigraphOrSuffix: true,
        });
        i += dg.length;
        matched = true;
        break;
      }
    }
    if (matched) continue;

    // 5. Single letters
    const ch = chunk[i];
    const isVowelLetter = 'aeiou'.includes(s[i]) || (s[i] === 'y' && i > 0);
    tiles.push({
      text: ch,
      type: 'single',
      tileType: isVowelLetter ? 'vowel' : 'consonant',
      isDigraphOrSuffix: false,
    });
    i++;
  }
  return tiles;
}

/**
 * Normalizes and resolves tap units for a WordItem.
 * If a word was mistakenly chunked by syllable scoops (e.g. "com", "bat", "pan", "ic"),
 * it automatically segments each chunk into authentic Fundations sound tiles
 * (consonants, vowels, digraphs, welded cards, and suffixes).
 */
export function resolveWordTapUnits(wordItem?: WordItem): WordTapUnit[] {
  if (!wordItem || !wordItem.tapUnits || wordItem.tapUnits.length === 0) {
    return segmentMultiLetterChunk(wordItem?.word || '');
  }

  // Handle silent-e notation like [s, p, o-e, k] -> [s, p, o, k, e]
  const hasVE = wordItem.tapUnits.some((u) => /^[aeiou]-e$/i.test(u.text));
  if (hasVE) {
    const expanded: WordTapUnit[] = [];
    let pendingE = false;
    for (const u of wordItem.tapUnits) {
      if (/^[aeiou]-e$/i.test(u.text)) {
        expanded.push({ text: u.text[0], type: 'single', tileType: 'vowel' });
        pendingE = true;
      } else if (
        pendingE &&
        (u.type === 'suffix' || MULTI_LETTER_SUFFIXES.has(u.text.toLowerCase()) || u.text.toLowerCase() === 's')
      ) {
        expanded.push({ text: 'e', type: 'single', tileType: 'vowel' });
        expanded.push(u);
        pendingE = false;
      } else {
        expanded.push(u);
      }
    }
    if (pendingE) {
      expanded.push({ text: 'e', type: 'single', tileType: 'vowel' });
    }
    return expanded;
  }

  // Decompose any syllable chunk that is not an authentic multi-letter Fundations tile
  const result: WordTapUnit[] = [];
  for (const u of wordItem.tapUnits) {
    const t = u.text.toLowerCase().trim().replace(/^-/, '');
    const isKnownSuffix = u.type === 'suffix' || MULTI_LETTER_SUFFIXES.has(t) || (t === 's' && u.isDigraphOrSuffix);
    const isKnownWelded = u.type === 'welded' || GLUED_SOUNDS.includes(t as any);
    const isKnownVowelTeam = VOWEL_TEAMS_LIST.includes(t);
    const isKnownRControlled = R_CONTROLLED_LIST.includes(t);
    const isKnownDigraph = DIGRAPHS_LIST.includes(t);

    if (t.length <= 1 || isKnownSuffix || isKnownWelded || isKnownVowelTeam || isKnownRControlled || isKnownDigraph) {
      result.push(u);
    } else {
      // Chunk that needs segmenting (e.g. "com", "bat", "pan", "ic", "vent", "ath", "lete")
      result.push(...segmentMultiLetterChunk(u.text));
    }
  }

  return result;
}

/**
 * Calculates authentic Wilson Fundations tap counts:
 * - Glued sounds = 1 tap
 * - Digraphs & bonus letters (ll, ss, ff, zz) = 1 tap
 * - Suffixes (-s, -es, -ed, -ing, -est) = 1 tap
 */
export function calculateTapCount(word: string): number {
  let clean = word.toLowerCase().replace(/[^a-z]/g, '');
  if (!clean) return 1;

  let suffixTap = 0;
  for (const suf of COMMON_SUFFIXES) {
    if (clean.length > suf.length + 1 && clean.endsWith(suf)) {
      suffixTap = 1;
      clean = clean.slice(0, -suf.length);
      break;
    }
  }

  let i = 0;
  let baseTaps = 0;
  while (i < clean.length) {
    // 1. Check glued sound
    let matched = false;
    for (const g of GLUED_SOUNDS) {
      if (clean.startsWith(g, i)) {
        baseTaps++;
        i += g.length;
        matched = true;
        break;
      }
    }
    if (matched) continue;

    // 2. Check digraph or bonus letter (ll, ss, ff, zz)
    for (const d of BONUS_AND_DIGRAPHS) {
      if (clean.startsWith(d, i)) {
        baseTaps++;
        i += d.length;
        matched = true;
        break;
      }
    }
    if (matched) continue;

    // 3. Single phoneme tap
    baseTaps++;
    i++;
  }

  return Math.max(1, baseTaps + suffixTap);
}

export function getTileType(
  text: string,
  options?: { isSuffix?: boolean; isWelded?: boolean; forceVowel?: boolean }
): TileColorType {
  const clean = text.toLowerCase().trim().replace(/^-/, '');

  // 1. Explicitly marked as suffix
  if (options?.isSuffix) {
    return 'suffix';
  }

  // 2. Multi-letter suffix ('es', 'ed', 'ing', 'est', etc.)
  if (MULTI_LETTER_SUFFIXES.has(clean)) {
    return 'suffix';
  }

  // 3. Single letter 's': ONLY a suffix if explicitly marked with isSuffix: true.
  // At the start or middle of words (like 'skim', 'strap', 'snack'), 's' is an initial consonant!
  if (clean === 's') {
    return options?.isSuffix ? 'suffix' : 'consonant';
  }

  // 4. Glued / Welded sounds (green horizontal rectangle)
  if (options?.isWelded || GLUED_SOUNDS.includes(clean as any)) {
    return 'welded';
  }

  // 5. Vowels (peach / salmon square)
  if (options?.forceVowel || VOWELS.has(clean)) {
    return 'vowel';
  }

  // 6. Default: consonant / digraph (tan square)
  return 'consonant';
}

export function getTileStyles(type: TileColorType): {
  container: string;
  isRectangle: boolean;
  label: string;
} {
  switch (type) {
    case 'vowel':
      return {
        // Peach / Salmon Square Tile (spans skyline to grass line)
        container: 'bg-[#FED7AA] border-2 border-[#FB923C] text-orange-950 w-11 h-11 rounded-sm shadow-2xs',
        isRectangle: false,
        label: 'Vowel (Salmon)',
      };
    case 'welded':
      return {
        // Green Horizontal Rectangle Tile (matches Fundations green welded cards)
        container: 'bg-[#A7F3D0] border-2 border-[#10B981] text-emerald-950 w-19 h-11 rounded-sm shadow-2xs',
        isRectangle: true,
        label: 'Glued Sound (Green)',
      };
    case 'suffix':
      return {
        // Vibrant Sunny Yellow Horizontal Rectangle Tile
        container: 'bg-[#FDE047] border-2 border-[#EAB308] text-yellow-950 w-19 h-11 rounded-sm shadow-2xs',
        isRectangle: true,
        label: 'Suffix (Yellow Rect)',
      };
    case 'consonant':
    default:
      return {
        // Authentic Warm Tan / Sand Square Tile
        container: 'bg-[#F1E5D1] border-2 border-[#B89874] text-amber-950 w-11 h-11 rounded-sm shadow-2xs',
        isRectangle: false,
        label: 'Consonant (Tan)',
      };
  }
}
