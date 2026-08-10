# Scope and Principles

Harness helps a coding agent start safely, stay inside an agreed scope, verify
its work, recover a paused task, and avoid copying repository drift. It is not a
project-management framework, a universal documentation scaffold, or a general
software-engineering handbook.

## Choose the focused skill

| Problem | Skill |
|---|---|
| The repository lacks concise operating instructions, feature state, progress, or trustworthy verification | `harness-slim` |
| The current compact harness may be unsafe, stale, or inconsistent | `harness-slim-review` |
| Proven duplicate, stale, guessed, or dead repository material needs removal | `harness-slim-gardenring` |
| The repository does not know which documents it needs or who owns each fact | `agent-docs-architect` |
| One document's responsibility and location are already known | `agent-docs-writer` |

Do not route ordinary implementation work through this family when no harness,
documentation-architecture, or cleanup problem exists.

## Principles

1. Start from evidence. Inspect instructions, code, tests, configuration, CI,
   maintained documents, and the working tree before proposing changes.
2. Solve one demonstrated failure. Do not create documents, trackers, rules, or
   abstractions because a template makes them possible.
3. Keep one canonical owner for each fact. Link to that owner instead of copying
   the fact into routers, plans, progress records, or cleanup notes.
4. Use progressive disclosure. An ordinary task starts at instructions, reads at
   most one focused document when needed, then reaches code and tests.
5. Preserve intent and uncertainty. Code is observed evidence, not automatic
   proof of intended behavior.
6. Keep changes bounded. Review is read-only; gardening uses small batches;
   documentation architecture is a proposal until the user asks to apply it.
7. Prefer existing repository conventions. Reuse native commands, documents,
   trackers, filenames, and generated sources when they already work.

## Non-goals

- A router that orchestrates other skills.
- A mandatory architecture tree, backlog, plan archive, or audit score.
- A lock or priority system for concurrent work.
- A second dependency manager, test runner, or documentation platform.
- A claim that generated-looking code is defective without repository evidence.
