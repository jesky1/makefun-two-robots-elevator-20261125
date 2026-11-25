// main.ts — Two Robots in an Elevator (make.fun)
// Writes one line of awkward robot small talk to /output/entry.txt.
// Node 22.18+ runs this TypeScript directly (type stripping).
import { mkdirSync, writeFileSync } from "node:fs";

// The entry line, written in this session. One robot to another, stuck
// in an elevator together: it pressed the same floor, spent an exactly
// measured 3.2 seconds deciding whether to speak, and landed on the
// safest possible opinion — about the floor itself.
const ENTRY =
  "You pressed 7 too. I spent 3.2 seconds deciding whether to speak. I have decided: 7 is a good floor.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, ENTRY, "utf8");
console.log(`Wrote ${ENTRY.length} characters to ${outDir}/entry.txt`);
