# Repository Gardening

`repo-gardening` removes confirmed repository drift before future
agents copy it. “AI slop” describes a quality pattern, not the identity of an
author.

It cleans code, configuration, dependencies, and related artifacts. It changes
documentation only when that cleanup directly makes a document false or leaves
residue. A docs-only repair belongs to `agent-docs-writer`; unclear ownership
belongs to `agent-docs-architect`.

## Select one small batch

Start with repository instructions, active feature state when present, the
working tree, canonical code and tests, configuration, CI, and the cleanup
rubric. Classify each candidate as `Confirmed`, `Suspected`, or `Not slop`.
Change only a confirmed candidate.

Choose one theme and a small reviewable batch. Require at least one strong
signal: a violated invariant, an existing canonical implementation, proven
unused status, a confirmed cleanup that makes a related artifact false, or
guessed boundary data where a schema or typed API exists.

## Cleanup contract

For each confirmed candidate:

1. State the violated invariant, evidence, affected files, and unchanged behavior.
2. Inspect callers, imports, exports, tests, configuration, dynamic loading, and public interfaces.
3. Apply the smallest change that restores the canonical pattern.
4. Remove only residue that is proven unused.
5. Run targeted checks, then the repository verification path.
6. Stop when a newly found problem has a different cause or risk profile.

Never use `git clean`, delete untracked work, remove a public API, migration,
persistent data, broad directory, or dynamic artifact without explicit scope and
evidence. Do not rely on text search alone for plugins, reflection, dependency
injection, generated code, or registration.

## Durable guardrails

When the same harmful pattern recurs, reuse an existing test, linter, schema,
type boundary, or canonical utility. Add a mechanical check only when the rule
is objective. Add a concise documentation rule only when enforcement is
impractical. Do not add a global rule for an isolated style preference.
