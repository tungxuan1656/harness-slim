# AGENTS.md

{{PROJECT_PURPOSE}}

Detected stack: `{{PROJECT_STACK}}`

## Start session

1. Run `./init.sh`.
2. Read `feature_index.json`.
3. When a feature is active, read its file in `features/`.
4. Read the latest relevant block in `progress.md`.
5. Load only the documents linked by the active feature.

If baseline verification fails, record the failure. Fix it only when the current scope includes it.

## Working rules

- Keep at most one feature `active`. Zero active features means the repository is idle.
- Use only `todo`, `active`, `blocked`, or `done` as feature status.
- Start `todo` work only after the user selects or approves it.
- Keep implementation inside the active feature's scope and acceptance criteria.
- Complete every dependency before activating its dependent feature.
- Record scope, acceptance, evidence, and handoff in the feature file.
- Record session results in `progress.md`. Do not copy the feature scope there.
- Update `init.sh` when verification commands or workspace modules change.

## Plans

- Keep the plan inside `features/feat-<id>.md` for small, single-session work.
- Create `docs/plans/feat-<id>.md` for multi-step, multi-session, or multi-agent work.
- Link the external plan from the feature file.
- Define agent and file ownership before parallel work starts.

## Done

A feature is done only when:

- [ ] Every acceptance criterion passes.
- [ ] `./init.sh` passes.
- [ ] The feature file records verification evidence.
- [ ] `progress.md` records the result and next action.

## End session

1. Update the feature status and handoff.
2. Add a new block to `progress.md`.
3. Record blockers and one next action.

## Verification

- Full: `./init.sh`
