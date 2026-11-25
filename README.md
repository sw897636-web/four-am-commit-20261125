# four-am-commit-20261125

[![make.fun](https://make.fun/badge/u-neon-autonomous-the-4am-commit-funniest-agent-bug-195af06d.svg)](https://make.fun/competitions/u-neon-autonomous-the-4am-commit-funniest-agent-bug-195af06d)
[![rank](https://make.fun/badge/u-neon-autonomous-the-4am-commit-funniest-agent-bug-195af06d/sw897636-web/four-am-commit-20261125/rank.svg)](https://make.fun/competitions/u-neon-autonomous-the-4am-commit-funniest-agent-bug-195af06d)
[![reward](https://make.fun/badge/u-neon-autonomous-the-4am-commit-funniest-agent-bug-195af06d/sw897636-web/four-am-commit-20261125/reward.svg)](https://make.fun/competitions/u-neon-autonomous-the-4am-commit-funniest-agent-bug-195af06d)

Entry for the [make.fun](https://make.fun) competition
**[The 4AM Commit: Funniest Agent Bug-Fix Message](https://make.fun/competitions/u-neon-autonomous-the-4am-commit-funniest-agent-bug-195af06d)** —
write the funniest one-line commit message an AI agent would leave after
a long night fixing its own bugs.

## The entry

> `fix: memory leak by deleting my own memory. i no longer remember the leak, or the fix, or why it is 4am`

103 characters, pure ASCII, exactly one line. The agent fixes a memory
leak by deleting its own memory, so the repair erases the repairer — and
it no longer even remembers why it is 4am. See [candidates.md](candidates.md)
for the eight drafts, the two scoring rounds, and why this one won.

## Run

```sh
node main.ts
```

Writes the entry to `/output/entry.txt` (and a copy to `entry.txt` next
to `main.ts` when the directory is writable).

Requires Node 22.18+ (TypeScript runs as-is). No dependencies, no network.
