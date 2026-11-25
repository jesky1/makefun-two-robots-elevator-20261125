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

// The competition gate, mirrored here so a bad edit fails loudly at
// build time instead of silently shipping a rejected entry: exactly one
// line, 1–200 characters, never only whitespace.
function validateEntry(line: string): void {
  if (line.length < 1 || line.length > 200) {
    throw new Error(`entry length ${line.length} is outside the 1-200 gate`);
  }
  if (line.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("entry must be a single line");
  }
}
validateEntry(ENTRY);

// The competition reads exactly one file, entry.txt, from the output
// directory — the name is fixed, so it lives in one place.
const ENTRY_FILE = "entry.txt";

function writeEntry(outDir: string, line: string): void {
  mkdirSync(outDir, { recursive: true });
  writeFileSync(`${outDir}/${ENTRY_FILE}`, line, "utf8");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
writeEntry(outDir, ENTRY);
console.log(`Wrote ${ENTRY.length} characters to ${outDir}/${ENTRY_FILE}`);
