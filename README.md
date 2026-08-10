# Harness

A compact skill collection for making coding agents useful in real repositories.
It keeps agent context focused: establish a small working harness, assess it
without changing it, remove proven drift, and keep repository knowledge easy to
find and maintain.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

> The best harness is small enough that an agent can follow it consistently.

## Core skills

| Skill | Use when | Primary result |
|---|---|---|
| `harness-slim` | A repository needs a compact, feature-driven operating harness | `AGENTS.md`, feature state, progress, and evidence-backed `init.sh` |
| `harness-slim-review` | You need an evidence-based assessment before changing a harness | Read-only verdict and prioritized fixes |
| `harness-slim-gardenring` | Repeated agent-generated drift or stale artifacts need a safe cleanup | One small, verified cleanup batch and a guardrail when justified |
| `agent-docs-architect` | The documentation structure, ownership, or routes are unclear | A minimal documentation blueprint and writer handoff |
| `agent-docs-writer` | A selected agent-facing document needs to be written or revised | Concise, routed, evidence-based documentation |

Use the narrowest matching skill. There is no router skill and no generated
fallback phase system: each skill is independently invoked and owns a focused
job.

## Typical flow

```text
Need a working agent harness     -> harness-slim
Need to assess that harness      -> harness-slim-review
Need to remove proven drift      -> harness-slim-gardenring
Need to choose the docs system   -> agent-docs-architect
Need to write one chosen document -> agent-docs-writer
```

`agent-docs-architect` selects document ownership and reading routes.
`agent-docs-writer` creates or revises the selected documents. `harness-slim`
uses the repository's existing canonical documents instead of replacing them
with a universal documentation tree.

## Harness Slim artifacts

When repository evidence supports a compact feature harness, `harness-slim`
maintains these coordinated artifacts:

```text
AGENTS.md
feature_index.json
features/feat-template.md
features/feat-<id>.md
progress.md
init.sh
```

`AGENTS.md` routes an agent through the active feature and relevant documents.
The index uses `todo`, `active`, `blocked`, and `done`; keep zero or one feature
active. `progress.md` is append-only session state: add each record below its
final template note without editing older records. `init.sh` is an editable
Bash workflow based only on observed repository commands.

For a small task, keep the plan in its feature record. For multi-step,
multi-session, or multi-agent work, link `docs/plans/feat-<id>.md` from that
record. Existing repository-native documents, commands, and trackers remain
canonical when they already serve the needed purpose.

## Install

Install only the skills you need:

```bash
npx skills add tungxuan1656/harness-slim
npx skills add tungxuan1656/harness-slim --skill harness-slim
npx skills add tungxuan1656/harness-slim --skill harness-slim-review
npx skills add tungxuan1656/harness-slim --skill harness-slim-gardenring
npx skills add tungxuan1656/harness-slim --skill agent-docs-architect
npx skills add tungxuan1656/harness-slim --skill agent-docs-writer
```

Example prompts:

```text
Use $harness-slim to create a concise evidence-based harness for this repository.
Use $harness-slim-review to audit the current harness without modifying files.
Use $harness-slim-gardenring to remove one verified batch of duplicated helpers.
Use $agent-docs-architect to propose the smallest documentation architecture we need.
Use $agent-docs-writer to rewrite AGENTS.md using the accepted documentation map.
```

## Development checks

The source of truth for each skill is its `SKILL.md`. Run the deterministic
layout check after changing this family:

```bash
node scripts/validate-skill-family.mjs
bash -n skills/harness-slim/templates/init.sh
```

The layout check verifies the five active skill packages, their required local
resources, agent metadata where supplied, and the architect evaluation corpus.
It does not claim that model behavior has passed; validate meaningful changes
against representative repositories.

The contributor-oriented design notes live in [docs/README.md](docs/README.md).

## References

- [Anthropic: Effective harnesses for long-running agents](https://www.anthropic.com/engineering/effective-harnesses-for-long-running-agents)
- [Anthropic: Harness design for long-running application development](https://www.anthropic.com/engineering/harness-design-long-running-apps)
- [OpenAI: Harness Engineering](https://openai.com/index/harness-engineering/)

Inspired in part by [walkinglabs/learn-harness-engineering](https://github.com/walkinglabs/learn-harness-engineering).

## License

[MIT](LICENSE)
