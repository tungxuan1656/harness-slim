# Harness Slim review rubric

Apply the smallest set of criteria that lets an agent start, stay scoped, verify work, and resume safely.

## AGENTS.md

| Criterion | Pass condition |
|---|---|
| Startup | Names a standard verification command, state source, active feature, progress, and relevant documents. |
| Baseline | Records failed baseline checks and limits repair to authorized scope. |
| State | Defines allowed statuses and zero-or-one active feature. |
| Scope | Binds work to feature scope and acceptance criteria. |
| Dependencies | Requires dependencies to complete before activation. |
| Planning | Keeps small plans inline; routes large, multi-session, or multi-agent plans to `docs/plans/`. |
| Done | Requires acceptance, verification evidence, and session record. |
| Handoff | Requires status, blockers, and one next action at session end. |
| Escalation | Routes unclear requirements, ownership, architecture/product decisions, and repeated failures to documents or the user. |

Do not require commit, branch, review, release, or tool policy unless repository evidence or the user requires it. Keep repository-wide rules separate from feature state and durable architecture facts.

## Feature index and feature files

| Criterion | Pass condition |
|---|---|
| Index | Each feature has a unique ID, title, allowed status, and dependency list. |
| State integrity | At most one feature is active; active dependencies are done. |
| File mapping | Each indexed feature has a matching `features/feat-<id>.md` record. |
| Feature scope | Each record defines goal, scope, non-goals, and observable acceptance criteria. |
| Execution | Each record contains a small inline plan or links to an external plan when complex. |
| Evidence | Each record gives verification, evidence, blockers, and next action or handoff. |
| External plan | A complex plan defines phases, dependencies, agent ownership, file ownership, verification, and handoff. |

## Progress

| Criterion | Pass condition |
|---|---|
| Append-only | New session records do not rewrite prior history. |
| Continuity | Each relevant block records completed work, evidence, blockers, and next action. |
| Ownership | Progress does not duplicate feature scope or durable architecture decisions. |

## init.sh

| Criterion | Pass condition |
|---|---|
| Implementation | Uses Bash; does not invoke Node.js or generate helper scripts at runtime. |
| Evidence | Commands exist in manifests, CI, workspace configuration, tool configuration, or maintained project docs. |
| Node workspaces | Uses root scripts that orchestrate declared workspaces, or covers matching scripts in each declared workspace; ignores unrelated nested packages. |
| Order | Runs formatter and linter fixes before build and test. |
| Parallelism | Runs independent build/test tasks with bounded parallelism when more than one applies. |
| Outcomes | Prints skipped phases explicitly and exits nonzero for a configured task failure. |
| Safety | Does not install dependencies, guess commands at runtime, or modify source outside configured formatter/linter fixes. |
| Maintenance | Is executable and changes when commands, tools, or workspace modules change. |

## Cross-file quality

| Criterion | Pass condition |
|---|---|
| Consistency | IDs, statuses, dependencies, paths, commands, and evidence agree across artifacts. |
| Canonical ownership | Every fact has one owning file; other files link instead of duplicate it. |
| Concision | The harness contains routing and invariants, not generic software advice or unused scaffolding. |
| Uncertainty | Unknowns and blockers are explicit rather than invented. |
