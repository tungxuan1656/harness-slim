# Skill Boundaries

The current family contains five independent skills. Their contracts are
defined in the package `SKILL.md` files, not in a router or a generated
specialist hierarchy.

| Skill | Positive trigger | Do not use for |
|---|---|---|
| `harness-slim` | Create or simplify concise instructions, feature state, progress, and verification | A read-only assessment or generic documentation rewrite |
| `harness-slim-review` | Assess a compact harness before adoption, refactoring, or remediation | Editing or repairing files without a request |
| `repo-gardening` | Clean a bounded set of proven code, configuration, dependency, or related-artifact drift | Broad refactors, docs-only maintenance, speculative abstractions, or unproven deletion |
| `agent-docs-architect` | Choose documentation artifacts, ownership, hierarchy, routes, and lifecycle | Writing one document whose owner and purpose are already known |
| `agent-docs-writer` | Write, review, or rewrite a selected agent-facing document | Redesigning the documentation system or ordinary code changes |

## Collaboration rules

The architect passes an accepted artifact responsibility, evidence sources,
routes, lifecycle, and constraints to the writer. The writer does not choose a
new documentation architecture.

Harness Slim may link to durable documents that already exist. If their
structure is unclear, use the architect before asking the writer to create them.
Review findings are evidence for a later remediation task; review itself stays
read-only. Repository gardening updates feature and progress state only when
the existing harness requires it.

## Optional companion contract

Optional skills can support design, planning, execution, debugging, verification,
communication, or discovery. Before they create an artifact, they read the
repository entry point and reuse its canonical owner and path. With Harness Slim,
multi-step plans use `docs/plans/feat-<id>.md` and link from the feature record.
If the owner is unclear, they hand off to `agent-docs-architect` when it is
installed; if known, they use `agent-docs-writer` when it is installed.
Otherwise they surface the decision without inventing a path. Optional skills
must remain useful when another optional or core skill is not installed.

## Shared safeguards

- Inspect before asking or mutating.
- Preserve unrelated dirty work.
- Treat uncertain evidence as uncertain.
- Keep each change small enough to validate and review.
- Use repository-local instructions and verification conventions.
- Do not add compatibility layers for removed skills or scripts.
