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

const SUFFIXES = new Set([
  's', 'es', 'ed', 'ing', 'est', 'er', 'ful', 'less', 'ness', 'able', 'en', 'ish', 'ly',
]);

export function getTileType(
  text: string,
  options?: { isSuffix?: boolean; isWelded?: boolean; forceVowel?: boolean }
): TileColorType {
  const clean = text.toLowerCase().trim().replace(/^-/, '');

  if (options?.isSuffix || (options?.isSuffix !== false && SUFFIXES.has(clean) && clean.length >= 2)) {
    return 'suffix'; // Yellow Rectangle
  }

  if (options?.isWelded || GLUED_SOUNDS.includes(clean as any)) {
    return 'welded'; // Green Rectangle
  }

  if (options?.forceVowel || VOWELS.has(clean)) {
    return 'vowel'; // Peach / Salmon Square
  }

  return 'consonant'; // Yellow / Tan Square
}

export function getTileStyles(type: TileColorType): {
  container: string;
  isRectangle: boolean;
  label: string;
} {
  switch (type) {
    case 'vowel':
      return {
        // Peach / Salmon Square Tile (matches Fundations peach vowel cards)
        container: 'bg-orange-100 border-2 border-orange-400 text-orange-950 w-11 h-11 rounded-sm shadow-2xs',
        isRectangle: false,
        label: 'Vowel (Salmon)',
      };
    case 'welded':
      return {
        // Green Horizontal Rectangle Tile (matches Fundations green welded cards)
        container: 'bg-emerald-100 border-2 border-emerald-500 text-emerald-950 w-16 h-11 rounded-sm shadow-2xs',
        isRectangle: true,
        label: 'Glued Sound (Green)',
      };
    case 'suffix':
      return {
        // Yellow Horizontal Rectangle Tile (matches Fundations suffix frame)
        container: 'bg-amber-100 border-2 border-amber-500 text-amber-950 w-16 h-11 rounded-sm shadow-2xs',
        isRectangle: true,
        label: 'Suffix (Yellow Rect)',
      };
    case 'consonant':
    default:
      return {
        // Yellow / Tan Square Tile (matches Fundations standard consonant cards)
        container: 'bg-yellow-100 border-2 border-yellow-400 text-yellow-950 w-11 h-11 rounded-sm shadow-2xs',
        isRectangle: false,
        label: 'Consonant (Yellow)',
      };
  }
}
