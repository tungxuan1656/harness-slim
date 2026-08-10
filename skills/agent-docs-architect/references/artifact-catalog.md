# Artifact Catalog

Choose capabilities by failure mode. Reuse an existing equivalent when it owns
the same truth, even when its name differs.

| Capability | Canonical responsibility | Create when | Omit or reuse when |
|---|---|---|---|
| Agent instruction entry point | Repository-wide routes and operating invariants | Agents need a stable starting point | An existing tool-specific file already provides one canonical route |
| Architecture overview | Topology, entry points, boundaries, dependency direction, major flows | These facts are costly or unsafe to infer | The repository is trivial or an existing architecture source is sufficient |
| Documentation index | `Read when` routing across focused documents | Several documents require selection | The document set is small and obvious |
| Subsystem guide | One subsystem's implementation patterns, boundaries, and verification | A distinct stack or boundary causes mistakes | Architecture and code already make it clear |
| Design decision | Rationale and consequences of one durable technical decision | Future agents need to know why a choice exists | The decision is temporary or has no meaningful alternatives |
| Design principles | A small set of accepted beliefs that resolve recurring trade-offs | The same judgment recurs across decisions | The content is generic engineering advice |
| Product or domain spec | Durable behavior, states, rules, and edge cases | Behavior is unsafe to infer from implementation | Tests or an existing canonical product source are sufficient and accessible |
| Execution plan | Scope, sequence, decisions, progress, and recovery for complex work | Work spans sessions or has dependent stages | The task is small or an external tracker is canonical and agent-accessible |
| Completed plan archive | Historical execution evidence and superseded decisions | Past plans prevent repeated investigation | Completed plans add no durable value or live elsewhere canonically |
| Technical debt tracker | Known debt, impact, owner, and next review | Debt needs repository-local coordination | An accessible issue tracker is canonical |
| Generated reference | Machine-derived schema, API, config, or inventory | The source is large or expensive to inspect repeatedly | Generation is not reproducible or the source itself is easy to query |
| External reference snapshot | Version-pinned, agent-readable third-party knowledge | Network access is unreliable or exact versions matter | Stable official docs are accessible and discoverable |
| Cross-cutting guide | Accepted rules spanning several subsystems | A real non-local concern causes repeated inconsistency | Rules belong to one subsystem or are generic advice |
| Quality or health score | Measured documentation or architecture gaps over time | A recurring garden process consumes the score | No measurement loop or owner exists |
| Nested instructions | Scoped routes and rules for one subtree | Tooling or invariants genuinely differ by subtree | Root instructions and focused docs can route the work |

## Common cross-cutting guides

Create these by concern, not by filename:

- frontend or design system;
- security and privacy;
- reliability and incident behavior;
- data and schema evolution;
- observability;
- product principles.

Each guide must own accepted repository-specific truth. A guide that only
contains general best practices does not justify its maintenance cost.

## Lifecycle classes

| Class | Examples | Maintenance contract |
|---|---|---|
| Durable | Architecture, accepted decisions, product specs | Update when behavior, boundaries, or intent changes |
| Active | Execution plans, migrations, temporary exceptions | Update during work; close or archive at a defined terminal state |
| Historical | Completed plans, replaced decisions | Preserve rationale; mark status and replacement routes |
| Generated | Schemas, API inventories, dependency maps | Record generator, source inputs, and freshness check |
| External | Vendor references, standards snapshots | Record source, version or retrieval date, and refresh trigger |

