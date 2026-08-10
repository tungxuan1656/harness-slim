# Scale Profiles

Use these profiles as starting points, not quotas. Lines of code are weak hints.
Topology, domain complexity, risk, and concurrent agent work can justify a
higher profile in a small repository.

## Pressure signals

| Dimension | Lower pressure | Higher pressure |
|---|---|---|
| Topology | One runtime and one data store | Monorepo, several deployables, queues, or external systems |
| Domain | One obvious workflow | Several business domains or state machines |
| Coordination | One maintainer or agent at a time | Concurrent teams, agents, worktrees, or ownership boundaries |
| Risk | Internal and reversible | Security, privacy, money, compliance, or availability impact |
| Work horizon | Small tasks finish in one session | Multi-session plans, migrations, or long-running programs |
| Change rate | Stable structure and dependencies | Frequent topology, contract, or dependency changes |
| Generated surface | Few inspectable interfaces | Large schemas, APIs, configuration, or generated clients |

Select the nearest profile, then add only capabilities tied to specific pressure
signals.

## Profile A: compact

Typical shape: one application, one main domain, one maintainer, low risk, and an
obvious code layout. Often below 10k lines, but size does not decide the profile.

Default capabilities:

- one concise agent instruction entry point;
- routes to the existing README, code, tests, and verification commands;
- an architecture overview only when topology or boundaries are not obvious.

Usually omit a docs index, category directories, plan archive, quality score,
and cross-cutting guides.

## Profile B: growing

Typical shape: several components or workflows, recurring feature work, and a
small team. Often 10k-50k lines.

Default capabilities:

- concise agent instructions;
- an architecture overview;
- a docs index when several focused documents exist;
- focused subsystem or product documents for facts unsafe to infer;
- execution plans only for multi-session work.

Add design decisions, generated references, or cross-cutting guides only when
the repository has that knowledge class.

## Profile C: established

Typical shape: multiple deployables or domains, concurrent work, non-trivial
operational risk, and long-lived change programs. Often 50k-200k lines.

Default capabilities:

- root routing and architecture overview;
- a documentation index with `Read when` routes;
- indexed design decisions and product or domain specifications;
- active and completed execution plans when repository-local planning is
  canonical;
- focused subsystem and cross-cutting guides for shared invariants;
- generated technical references for large machine-derived surfaces;
- explicit freshness checks for volatile artifacts.

Do not create every category when an external system remains canonical.

## Profile D: federated

Typical shape: a monorepo, many domains or teams, several deployment planes,
concurrent agents, and strong reliability or compliance requirements. Often
above 200k lines.

Default capabilities:

- a thin root router and root architecture map;
- domain-local indexes or scoped instructions where rules differ;
- explicit ownership for design, product, operations, security, and reliability
  truth;
- durable plan history and debt routing when work spans teams or quarters;
- generated references with reproducible generation and freshness checks;
- documentation health signals and automated gardening.

Keep local reading routes shallow. Federation is not permission to duplicate
root rules in every subtree.

## Promotion rules

Promote a capability when at least one concrete failure exists:

- agents repeatedly choose the wrong code area;
- intended behavior cannot be recovered from code and tests;
- active work cannot resume safely across sessions;
- cross-cutting constraints are applied inconsistently;
- volatile reference material becomes stale without automation;
- several documents exist but agents cannot choose the next one;
- concurrent ownership causes conflicting edits or duplicated truth.

Demote or omit a capability when its information is obvious, already canonical
elsewhere, or cannot be maintained.

