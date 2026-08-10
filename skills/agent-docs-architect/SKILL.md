---
name: agent-docs-architect
description: >-
  Design or audit agent-facing repository documentation architectures based on
  project scale, topology, domain complexity, risk, change rate, and coordination
  needs. Use when deciding which navigation, architecture, design, product,
  execution-plan, generated-reference, or cross-cutting documents a repository
  needs; how those artifacts route to one another; where each class of truth
  belongs; or how an existing docs tree should grow without becoming an
  encyclopedia. Pair with agent-docs-writer to create or rewrite document
  content. Do not use for writing one already-selected document or for ordinary
  code changes with no documentation-architecture problem.
---

# Agent Docs Architect

Design the smallest repository knowledge system that lets an agent find and use
the right truth without loading the whole repository into context.

## Divide responsibility

| Skill | Owns |
|---|---|
| `agent-docs-architect` | Artifact selection, information ownership, routes, hierarchy, lifecycle, and maintenance contracts |
| `agent-docs-writer` | Evidence gathering, document structure, wording, diagrams, concision, and document-level quality |

Use this skill first when the document set is unknown. Use `agent-docs-writer`
directly when the requested document and its responsibility are already clear.

## Apply the core rules

- Treat any example tree as a catalog of possibilities, not a required scaffold.
- Create a document only for a demonstrated navigation, knowledge, coordination,
  or risk problem.
- Give each durable fact one canonical owner. Link to that owner elsewhere.
- Keep `AGENTS.md` as a short router and repository-wide rule surface.
- Separate durable knowledge from active work state and historical records.
- Separate generated truth from human-maintained interpretation.
- Reuse repository-native names and artifacts when they already satisfy the
  required capability.
- Prefer progressive disclosure: router -> one focused document -> code and
  tests.
- Do not create empty directories, placeholder documents, or speculative rules.

## Run the workflow

### 1. Ground the assessment

Inspect before recommending a structure:

1. Read git status and preserve unrelated work.
2. Inspect the root tree, manifests, workspaces, entry points, tests, CI, and
   deployment shape.
3. Find agent instructions, READMEs, architecture material, specifications,
   plans, decision records, generated references, and external knowledge links.
4. Identify concrete failures: agents cannot locate code, infer boundaries,
   recover product intent, resume work, or verify whether guidance is current.
5. Classify relevant evidence as `Observed`, `Intended`, `Proposed`, or
   `Uncertain` when code and documentation disagree.

Do not infer project scale from lines of code alone.

### 2. Select a scale profile

Read [scale profiles](references/scale-profiles.md). Assess topology, domain
count, coordination, risk, work duration, change rate, and generated surfaces.

Choose the nearest profile as a starting point. Promote only the capabilities
justified by stronger pressure signals. Remove any artifact that lacks a clear
failure mode.

### 3. Assign canonical ownership

Inventory existing artifacts before proposing new ones. For each class of truth:

1. Name its current source.
2. Decide whether the source is canonical, duplicated, stale, missing, or
   external-only.
3. Preserve a useful existing source even when its filename differs from the
   catalog.
4. Propose migration or retirement only when duplicate ownership creates a
   concrete conflict.

Read the [artifact catalog](references/artifact-catalog.md) to choose capabilities
and their default ownership boundaries.

### 4. Design the reading routes

Start with the ordinary route:

```text
agent instruction entry point
  -> one focused document when needed
  -> relevant code and tests
  -> proportional verification
```

Add a documentation index only when several focused documents need routing. Add
nested instruction files only when a subtree has genuinely different rules or
tooling. Keep global cross-cutting rules at the shallowest canonical level.

For each common task type, name the first document to read and the condition for
reading deeper material.

### 5. Produce a blueprint

Use [blueprint format](references/blueprint-format.md). Include:

- the selected scale profile and pressure signals;
- capabilities to keep, create, revise, move, retire, or omit;
- a proposed tree containing only justified artifacts;
- one canonical responsibility and `Read when` route per artifact;
- lifecycle, freshness source, and mechanical validation where applicable;
- a document-by-document handoff for `agent-docs-writer`.

Default to a proposal. Do not mutate repository documentation unless the user
asks to apply the blueprint.

### 6. Apply through the writer

When the user asks to apply the blueprint:

1. Lock the accepted artifact map and ownership table.
2. Use `agent-docs-writer` for each new or revised document.
3. Give the writer the artifact responsibility, evidence sources, required
   routes, lifecycle, and size constraints.
4. Create documents in dependency order: canonical truth, focused guides,
   indexes, then the root router.
5. Re-audit the final graph for duplicate truth, broken routes, empty artifacts,
   and mixed durable or temporary state.

If `agent-docs-writer` is unavailable, return the blueprint and handoff package.
Do not invent a competing document-writing standard inside this skill.

## Keep scope narrow

This skill does not decide product behavior, software architecture, security
policy, feature priority, or engineering standards. It determines where accepted
truth belongs and how agents discover it.

Do not:

- copy external chat or documents into the repository without identifying the
  durable facts and their owner;
- create `DESIGN.md`, `SECURITY.md`, `RELIABILITY.md`, or similar guides only
  because they appear in an example tree;
- replace an issue tracker, schema generator, or existing documentation system
  without an explicit migration decision;
- turn a documentation architecture request into a broad codebase rewrite;
- prescribe document prose, sentence style, or templates owned by
  `agent-docs-writer`.

## Validate the architecture

Before delivery, verify that:

- the proposed size follows repository pressure, not a copied folder tree;
- every artifact prevents a named failure and owns one class of truth;
- existing useful artifacts are reused;
- ordinary tasks require at most one focused document after the entry point;
- durable knowledge, active plans, history, generated truth, and external
  references have distinct ownership;
- each volatile artifact has a freshness source or maintenance owner;
- indexes route instead of summarizing or duplicating their children;
- the writer handoff is complete enough to draft without choosing the
  documentation architecture again.

