# Feature and Session State

`harness-slim` uses lightweight repository-local state only when it makes work
selection, scope, verification, or resumption safer. It is not a replacement for
an accessible issue tracker or planning system.

## Feature index

`feature_index.json` records a concise list of features:

```json
{
  "features": [
    {
      "id": "feat-001",
      "title": "First Feature",
      "status": "todo",
      "depends_on": []
    }
  ]
}
```

Use only `todo`, `active`, `blocked`, and `done`. Keep zero or one feature
`active`. A feature can become active only after the user selects or approves
it and all dependencies are done. Array order does not determine priority.

Each index record maps to `features/feat-<id>.md`. That record owns:

- one observable goal;
- included and excluded scope;
- observable acceptance criteria;
- links to relevant durable documents;
- a small inline plan or a link to an external plan;
- verification evidence, blockers, and one next action.

## Plans and progress

Keep a small single-session plan inside the feature record. For multi-step,
multi-session, or multi-agent work, use `docs/plans/feat-<id>.md` and link it
from the record. The external plan identifies phases, dependencies, agent and
file ownership, verification, and handoff before parallel work starts.

`progress.md` is append-only. Each new relevant block records the feature,
state, completed work, evidence, blockers, and one next action. Do not repeat
feature scope or durable design decisions there.

## Completion

A feature is done when every acceptance criterion passes, `./init.sh` passes,
the feature record contains evidence, and `progress.md` records the result and
next action. Preserve unresolved baseline failures as blockers unless the
feature scope includes their repair.
