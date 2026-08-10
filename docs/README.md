# Harness Design Notes

These notes explain the current five-skill family. The relevant `SKILL.md` is
the executable source of truth; these documents describe shared rationale,
contracts, and release expectations for contributors.

## Skill family

| Skill | Responsibility |
|---|---|
| `harness-slim` | Create or simplify the compact feature-driven repository harness |
| `harness-slim-review` | Audit that harness without mutating it |
| `harness-slim-gardenring` | Remove one evidence-backed batch of recurring repository drift |
| `agent-docs-architect` | Select documentation artifacts, owners, routes, and lifecycle |
| `agent-docs-writer` | Write or revise the selected agent-facing documents |

The skills are independent. Do not add a router, generated fallback references,
or a phase hierarchy. Select the narrowest skill that solves the observed
problem.

## Design notes

1. [Scope and principles](01-SCOPE_AND_PRINCIPLES.md)
2. [Compact harness contract](02-TARGET_HARNESS.md)
3. [Knowledge and ownership](03-KNOWLEDGE_AND_OWNERSHIP.md)
4. [Feature and session state](04-WORK_AND_FEATURE_MODEL.md)
5. [Verification](05-VERIFICATION.md)
6. [Gardenring](06-GARDENING.md)
7. [Skill boundaries](07-HARNESS_SKILL_SPEC.md)
8. [Common workflows](08-WORKFLOWS.md)
9. [Quality and release](09-EVALS_AND_MIGRATION.md)
10. [Design decisions](10-DESIGN_DECISIONS.md)

For reusable output shapes, use the templates and references owned by the
active skill. `harness-slim/templates/` owns its harness artifacts;
`agent-docs-writer/references/` owns document-level patterns; and
`agent-docs-architect/references/` owns documentation blueprints.

## Shared rules

- Inspect repository evidence before writing, reviewing, or deleting.
- Preserve unrelated working-tree changes and existing canonical sources.
- Label disagreement as `Observed`, `Intended`, `Proposed`, or `Uncertain`.
- Keep durable knowledge, active work state, and historical records separate.
- Add an artifact or rule only when it prevents a concrete failure.
- Validate the smallest coherent change with repository-native commands.

## References

- OpenAI, [Harness Engineering](https://openai.com/index/harness-engineering/)
- Anthropic, [Effective harnesses for long-running agents](https://www.anthropic.com/engineering/effective-harnesses-for-long-running-agents)
- Anthropic, [Harness design for long-running application development](https://www.anthropic.com/engineering/harness-design-long-running-apps)
