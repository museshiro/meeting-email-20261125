import { mkdirSync, writeFileSync } from "node:fs";

const line =
  'The meeting ran 53 minutes so twelve people could hear ' +
  'the phrase "sounds good" spoken aloud, in unison, like a pledge.';

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line);
