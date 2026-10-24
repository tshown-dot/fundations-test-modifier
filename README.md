# Fundations Test Modifier

**Live Online Tool:** [https://tshown-dot.github.io/fundations-test-modifier/](https://tshown-dot.github.io/fundations-test-modifier/)

A comprehensive, printable assessment generator and modifier for **Wilson Fundations** (Grade 1 / Level 1 and Grade 2 / Level 2), featuring authentic multisensory visual scaffolds, tiered IEP/504 accommodations, and an interactive curriculum database manager.

---

## 🎯 Key Features

### 1. Authentic Fundations 4-Line Grid Engine
- **Accurate 4-Line Layout:** Pixel-perfect line spacing spanning Skyline, Plane (dashed), Grass (baseline), and Worm lines.
- **Official Icons:** Skyline ✈️, Plane ✈️, Grass 🌿, and Worm 🪱 row guides.
- **Grade-Calibrated Heights:** 1st Grade ($112\text{px}$) and 2nd Grade ($96\text{px}$) authentic row heights.

### 2. Multisensory Tiered Accommodations
- **Baseline (Standard):** Standard dictation lines identical to official Fundations unit tests.
- **Level 1 (Least Modified):** Visual dividers, larger writing lines, and clear section boundaries.
- **Level 2 (Moderate Support):**
  - **Sounds (5 items):** Blank, color-coded Fundations sound tile boxes spanning Grass to Skyline (warm tan square for consonants, salmon/peach square for vowels, green rectangle for glued sounds, canary yellow rectangle for suffixes).
  - **Words & Markings (5 items):** Pre-segmented color-coded tile boxes directly matching phonemic structures, paired with explicit marking directives.
  - **Trick Words (2 items):** Vertically stacked 3-option multiple-choice recognition banks with distractor spellings and writing lines.
  - **Sentence Dictation (2 sentences):** Untested plain words printed directly; bold Trick Words represented as spacious handwritten capsules `( ________ )`; italicized Phonetic Words rendered with discrete tapping dashes along the grass baseline.
- **Level 3 (Most Modified):** Full word banks and heavy graphic organization.
- **Super User Toggles:** Fine-grained custom overrides for any accommodation combination.

### 3. Curriculum Database Manager
- Live visual editor for all 17 units of Level 2 and all 11 units of Level 1.
- In-browser word tap splitting, sound tile color assignment, distractor generation, and sentence token role inspection.
- Local persistence with instant reset to ground truth.

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+)
- npm

### Installation
```bash
git clone https://github.com/tshown-dot/fundations-test-modifier.git
cd fundations-test-modifier
npm install
```

### Development
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### Production Build
```bash
npm run build
```

---

## 🖨️ Printing & Exporting
- Optimized for standard US Letter print margins with zero background leakage.
- Automatic 2-page pagination with sticky teacher scoring guide on Page 2.
- Press `Cmd + P` or click the **Print / Export PDF** button.
