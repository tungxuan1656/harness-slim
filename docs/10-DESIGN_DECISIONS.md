# Design Decisions

## D001 — Keep the skill family independent

**Status:** Accepted

The family has five focused skills: `harness-slim`, `harness-slim-review`,
`harness-slim-gardenring`, `agent-docs-architect`, and `agent-docs-writer`.
There is no router, phase composition, or generated fallback reference layer.

## D002 — Harness Slim uses coordinated, compact state

**Status:** Accepted

When a repository needs a harness, `AGENTS.md`, feature state, feature records,
append-only progress, and an evidence-backed Bash verification entry point work
together. Keep zero or one active feature to make the current scope explicit.

## D003 — Review is read-only

**Status:** Accepted

`harness-slim-review` records evidence and the smallest useful fixes. It does
not silently repair files or run formatter and linter fixes without permission.

## D004 — Garden in small evidence-backed batches

**Status:** Accepted

`harness-slim-gardenring` cleans confirmed drift, preserves behavior, and adds a
durable guardrail only for recurring objective failures. It does not treat
generated-looking or unfamiliar code as defective by default.

## D005 — Separate documentation architecture from prose

**Status:** Accepted

`agent-docs-architect` selects the smallest documentation system, canonical
owners, routes, and lifecycle. `agent-docs-writer` creates concise documents
from that accepted map. This separation prevents a document rewrite from
silently redesigning the repository knowledge system.

## D006 — Existing canonical sources win

**Status:** Accepted

Reuse repository-native documents, commands, trackers, schemas, and generated
references when they already own the required truth. Add a local artifact only
for a demonstrated failure and a maintainable lifecycle.
