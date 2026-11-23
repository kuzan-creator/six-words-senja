// Six Words, One Story — make.fun entry.
// Writes exactly one six-word story to /output/entry.txt.
// Word count: Visa(1) approved(2) Home(3) no(4) longer(5) exists(6) — 37 characters.
import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const story = "Visa approved. Home no longer exists.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), story, "utf8");
