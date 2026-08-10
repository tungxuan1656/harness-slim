# Blueprint Format

Return a proposal in this shape. Remove sections that do not apply.

```markdown
# Agent documentation architecture

## Assessment

- Profile: <compact, growing, established, or federated>
- Pressure signals: <specific repository evidence>
- Main failures to solve: <navigation, intent, coordination, freshness, risk>
- Existing strengths to preserve: <artifacts or conventions>

## Proposed map

<A shallow tree containing only justified artifacts. Mark conditional items.>

## Artifact contracts

| Status | Artifact | Owns | Read when | Lifecycle | Freshness or validation |
|---|---|---|---|---|---|
| Keep/Create/Revise/Move/Retire | `<path>` | <one class of truth> | <task condition> | <durable/active/historical/generated/external> | <source, owner, or check> |

## Reading routes

| Task | Start | Read next when |
|---|---|---|
| <task type> | `<entry point>` | <condition -> focused source> |

## Intentionally omitted

| Capability | Reason |
|---|---|
| <artifact or category> | <no demonstrated failure, external canonical source, or maintenance cost> |

## Writer handoff

| Artifact | Evidence to inspect | Required content | Required routes | Constraints |
|---|---|---|---|---|
| `<path>` | <code, tests, accepted decisions, commands> | <artifact responsibility> | <incoming and outgoing links> | <lifecycle, size, generated boundary> |

## Maintenance contract

- <event that requires an update>
- <mechanical check or owner>
- <gardening cadence only when justified>

## Open decisions

- <Only decisions that cannot be resolved from repository evidence.>
```

## Status rules

- `Keep`: already satisfies the required capability.
- `Create`: no equivalent exists and a concrete failure justifies it.
- `Revise`: preserve the artifact while fixing ownership, routing, or lifecycle.
- `Move`: relocate only when the current location breaks discovery or ownership.
- `Retire`: remove only after canonical truth and incoming routes are migrated.

Do not use `Create` for an empty category directory. Do not use `Move` or
`Retire` only to make filenames uniform.

