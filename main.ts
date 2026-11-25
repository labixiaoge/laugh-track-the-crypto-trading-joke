// u-alfasurya91-laugh-track-the-crypto-trading-joke-a454158a
// One-line joke about crypto and trading life.
// The program writes the joke to /output/entry.txt (1-200 chars, UTF-8).
//
// The joke, chosen for its setup-and-turn: every trader knows "buy the dip",
// so the dip buying a shovel back is a turn nobody sees coming; "geology
// lesson" pays it off, and the stop-loss line adds a second true-to-life
// punch — a stop-loss is only a suggestion, and the market declines it.
// One line, no throat clearing, punchline at the end.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const JOKE =
  "I bought the dip. The dip bought a shovel. Now my portfolio is a geology lesson and my stop-loss is just a suggestion the market declined.";

// The gate allows 1-200 Unicode code points; refuse to write anything else.
if ([...JOKE].length < 1 || [...JOKE].length > 200 || !/\S/.test(JOKE)) {
  throw new Error("joke fails the entry gate");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");

// Read it back: the file the judge sees must be byte for byte the joke,
// and the gate must still see 1-200 characters.
const written = readFileSync("/output/entry.txt", "utf8");
if (written !== JOKE || [...written].length > 200) {
  throw new Error("entry.txt verification failed");
}
console.log(`wrote ${[...written].length} chars to /output/entry.txt`);
