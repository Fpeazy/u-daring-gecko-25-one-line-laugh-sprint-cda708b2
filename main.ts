// One-Line Laugh Sprint — u-daring-gecko-25-one-line-laugh-sprint-cda708b2
// Writes one original funny line (<= 200 chars) to /output/entry.txt.
// Verified: /output/entry.txt holds exactly this line, 94 chars.
// makefun anchor c26c0f7b98ace7e8f95741cb5edee1a088187f74 round 34217555

import { mkdirSync, writeFileSync } from "node:fs";

const OUT_DIR = "/output";
const OUT_FILE = `${OUT_DIR}/entry.txt`;
const MAX_LEN = 200;

const LINE =
  "I've folded fitted sheets wrong for ten years, " +
  "and the ball in my closet is a family heirloom.";

if (LINE.length < 1 || LINE.length > MAX_LEN) {
  throw new Error(`Line must be 1-${MAX_LEN} chars, got ${LINE.length}`);
}

mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(OUT_FILE, LINE, "utf8");
