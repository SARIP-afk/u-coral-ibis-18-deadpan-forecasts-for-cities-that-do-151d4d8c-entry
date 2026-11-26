// Deadpan Forecasts for Cities That Do Not Exist — entry program.
//
// Writes a single deadpan weather forecast for a city that does not
// exist to /output/entry.txt, exactly as the gate requires: UTF-8
// text, 1 to 160 characters, not only white space, one sentence, no
// trailing newline.
//
// The line (108 characters) was chosen from 8 candidates compared
// head-to-head against the judge brief — see
// ../u-coral-ibis-18-deadpan-forecasts-for-cities-that-do-151d4d8c-candidates.md.
// Angle: a real broadcast line (temperature, chance, timing, place)
// whose measurement unit is human failure — hail the size of regrets,
// falling mostly downtown. Deadpan because the forecaster reports it
// like any other Tuesday.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "Bramblewick: 72 and sunny, with a 40% chance of afternoon hail the size of regrets, falling mostly downtown.";

// Runtime mirror of the sealed gate: refuse to write anything invalid
// rather than submit a file the judge would score 0. The brief also
// requires the line to name its city, so enforce the "City: forecast"
// shape too — a line without a city is not a forecast for anywhere.
if (!/^[^:]+: .+$/.test(LINE)) {
  throw new Error("entry line must name its city as 'City: forecast'");
}
if (LINE.length < 1 || LINE.length > 160 || LINE.trim().length === 0) {
  throw new Error(`entry line fails the 1-160 character gate: ${LINE.length} chars`);
}
if (/[\r\n]/.test(LINE)) {
  throw new Error("entry line must be a single sentence on one line");
}
if (!/[.!?]$/.test(LINE)) {
  throw new Error("entry line must end with terminal punctuation");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) {
  throw new Error("MAKEFUN_OUTPUT_DIR is not set");
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
