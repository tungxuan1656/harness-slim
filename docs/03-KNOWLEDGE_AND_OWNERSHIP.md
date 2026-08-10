# Knowledge and Ownership

Every fact needs one canonical owner and a lifecycle. An agent can navigate
quickly when routers link to the owner instead of repeating its content.

## Truth classes

| Class | Examples | Keep separate from |
|---|---|---|
| Durable | Architecture, domain rules, accepted decisions | Session state and temporary plans |
| Active | Feature records, active plans, current blockers | Durable architecture and historical records |
| Historical | Completed plans and prior progress entries | Current scope and active instructions |
| Generated | Schemas, API inventories, configuration output | Human-maintained interpretation |
| External | Accessible issue trackers and vendor documentation | Local copies without a freshness contract |

When sources disagree, label evidence `Observed`, `Intended`, `Proposed`, or
`Uncertain`. Do not silently convert observed implementation into intended
policy.

## Skill ownership

| Skill | Owns | Mutation boundary |
|---|---|---|
| `harness-slim` | Compact harness artifacts and their consistency | Update the smallest harness source supported by evidence |
| `harness-slim-review` | Evidence and findings only | Never mutate unless remediation is explicitly requested later |
| `harness-slim-gardenring` | One scoped cleanup batch and a narrow guardrail | Change only confirmed drift; preserve public behavior unless scope says otherwise |
| `agent-docs-architect` | Artifact map, canonical ownership, routes, lifecycle, and writer handoff | Propose by default; apply only after the user asks |
| `agent-docs-writer` | Evidence gathering, structure, prose, diagrams, and document-level quality | Write only the selected document responsibility |

`agent-docs-architect` chooses where knowledge belongs. `agent-docs-writer`
turns that accepted map into concise documents. Neither skill invents product,
architecture, security, or release policy without evidence or user direction.

## Safe changes

Before changing an artifact, identify its current owner, incoming routes,
freshness source, relevant working-tree changes, and the smallest validation.
When a fact needs to move, first add the new canonical source and route readers
to it; retire the old copy only after references are correct.
