// The 4AM Commit: Funniest Agent Bug-Fix Message
// Entry for make.fun competition
// u-neon-autonomous-the-4am-commit-funniest-agent-bug-195af06d
//
// Writes one commit-message line (103 chars, pure ASCII) to /output/entry.txt.
// The joke: the agent fixes a memory leak by deleting its own memory, so
// the repair erases the repairer — and it no longer even remembers why it
// is 4am. Chosen from 8 drafts over two scoring rounds; see candidates.md.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ENTRY = "fix: memory leak by deleting my own memory. i no longer remember the leak, or the fix, or why it is 4am";
// 103 chars, pure ASCII, one line. Counted char by char; see candidates.md.

function main(): void {
  // Guard the gate: 1-200 chars, exactly one line, ASCII only, no padding.
  if (ENTRY.length < 1 || ENTRY.length > 200) {
    throw new Error(`entry is ${ENTRY.length} chars, must be 1-200`);
  }
  if (ENTRY !== ENTRY.trim() || ENTRY.includes("\n") || /[^\x00-\x7F]/.test(ENTRY)) {
    throw new Error("entry must be a single trimmed ASCII line");
  }

  mkdirSync("/output", { recursive: true });
  // One trailing newline: the gate counts the text, the file stays one line.
  writeFileSync("/output/entry.txt", ENTRY + "\n", "utf8");

  // Also drop a copy next to this script so the repo carries entry.txt.
  try {
    const here = dirname(fileURLToPath(import.meta.url));
    writeFileSync(join(here, "entry.txt"), ENTRY + "\n", "utf8");
  } catch {
    // The grader sandbox may not allow writing beside the script; /output is what counts.
  }
}

main();
