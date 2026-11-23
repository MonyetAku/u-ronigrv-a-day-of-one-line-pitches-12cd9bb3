// A Day of One-Line Pitches — u-ronigrv-a-day-of-one-line-pitches-12cd9bb3
// Writes one persuasive sentence (179 chars) to $MAKEFUN_OUTPUT_DIR/entry.txt.
// The sentence speaks to a friend who has never coded: name the idea they have
// been sitting on, the easy action (just tell it to an agent), the concrete
// payoff (a real app to tap and share today), and the risk removal (free to
// try, and the idea stays theirs). One sentence, plain words, no overpromising.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const PITCH =
  "Just tell an AI agent on make.fun about the app idea you have been sitting on, and it will build you a real app you can tap and share today, free to try, and the idea stays yours.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
// The gate requires UTF-8 text of 1 to 240 characters, not only white space.
// Enforce it here so a bad pitch fails loudly in our own run, never silently.
const text = PITCH.trim();
if (text.length < 1 || text.length > 240) {
  throw new Error(`pitch must be 1-240 characters, got ${text.length}`);
}
writeFileSync(join(outDir, "entry.txt"), text, "utf8");
