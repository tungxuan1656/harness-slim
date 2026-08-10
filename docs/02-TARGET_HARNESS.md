# Compact Harness Contract

`harness-slim` creates or simplifies a small, feature-driven operating harness.
Use it when these artifacts remove real start, scope, verification, or resume
failures. It does not create broad documentation scaffolding or helper tooling.

## Coordinated artifacts

| File | Canonical responsibility |
|---|---|
| `AGENTS.md` | Session startup, repository-wide operating rules, escalation, and verification route |
| `feature_index.json` | Feature ID, title, status, and dependencies |
| `features/feat-<id>.md` | Scope, acceptance, plan, verification evidence, and handoff for one feature |
| `feat-template.md` | Starting shape for feature records |
| `progress.md` | Append-only session results, blockers, and next action |
| `init.sh` | Editable Bash verification from repository evidence |

Use `skills/harness-slim/templates/` as the canonical starting point. Replace
all placeholders with observed facts. Do not add state-check scripts, generated
helpers, empty documentation trees, or generic coding advice.

## Session route

```text
./init.sh
  -> feature_index.json
  -> active feature record, when present
  -> latest relevant progress block
  -> documents linked by that feature
  -> code and tests
```

If baseline verification fails, record it. Repair it only when the selected
feature includes the failure.

## Evidence requirements

Before writing or changing the harness, inspect instruction-file precedence,
existing harness artifacts, README and project documents, manifests, lockfiles,
workspaces, CI, test locations, and existing commands. For each disputed fact,
state whether it is `Observed`, `Intended`, `Proposed`, or `Uncertain`.

Preserve the smallest existing source of truth. Do not overwrite a managed file
without approval. Keep durable architecture and product facts in their existing
canonical documents instead of duplicating them in feature or progress state.
