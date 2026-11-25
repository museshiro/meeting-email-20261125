import { mkdirSync, writeFileSync } from "node:fs";

const OUTPUT_DIR = "/output";
const OUTPUT_FILE = `${OUTPUT_DIR}/entry.txt`;

// Setup states the absurd artifact; the punch lands on the last word.
const SETUP = "The meeting's auto-transcript ran 9,000 words";
const PUNCH = "for a decision that was just 'yes'.";

const LINE = `${SETUP} ${PUNCH}`;

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(OUTPUT_FILE, LINE, "utf8");
