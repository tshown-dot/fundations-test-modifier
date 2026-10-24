import { TileColorType } from '../types/fundations';
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
const MULTI_LETTER_SUFFIXES = new Set([
  'es', 'ed', 'ing', 'est', 'er', 'ful', 'less', 'ness', 'able', 'en', 'ish', 'ly',
]);

const BONUS_AND_DIGRAPHS = [
  'ck', 'ch', 'sh', 'th', 'wh', 'ph', 'qu', 'll', 'ss', 'ff', 'zz'
];

const COMMON_SUFFIXES = [
  'less', 'ness', 'ful', 'ing', 'est', 'es', 'ed', 'er', 'en', 'ly', 's'
];

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
