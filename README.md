# Harness

A compact core skill family for making coding agents useful in real
repositories. It keeps agent context focused: establish a small working
harness, assess it without changing it, remove proven drift, and keep
repository knowledge easy to find and maintain.

Optional companion skills add design, planning, execution, quality, and
communication workflows. They remain independently installable; choose a
profile that fits the work instead of installing every skill.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

> The best harness is small enough that an agent can follow it consistently.

## Core skills

| Skill | Use when | Primary result |
|---|---|---|
| `harness-slim` | A repository needs a compact, feature-driven operating harness | `AGENTS.md`, feature state, progress, and evidence-backed `init.sh` |
| `harness-task` | Incoming work in a Harness Slim repository needs the lightest safe artifact level | No feature, an inline feature plan, or a separate linked plan |
| `harness-slim-review` | You need an evidence-based assessment before changing a harness | Read-only verdict and prioritized fixes |
| `repo-gardening` | Proven code, configuration, dependency, or related-artifact drift needs a safe cleanup | One small, verified cleanup batch and a guardrail when justified |
| `agent-docs-architect` | The documentation structure, ownership, or routes are unclear | A minimal documentation blueprint and writer handoff |
| `agent-docs-writer` | A selected agent-facing document needs to be written or revised | Concise, routed, evidence-based documentation |

Use the narrowest matching skill. `harness-task` is an intake policy that
chooses feature and plan artifacts; it does not orchestrate other skills. There
is no router skill or generated fallback phase system.

## Optional companion profiles

Install optional skills only when their workflow is useful. They do not replace
the core contracts or create their own documentation tree.

| Profile | Skills | Use for |
|---|---|---|
| Product and design | `brainstorming`, `codebase-design` | Clarify a substantial change and design module seams |
| Planning and execution | `writing-plans`, `executing-plans`, `subagent-driven-development` | Plan and execute a multi-step change |
| Quality | `systematic-debugging`, `verification-before-completion` | Investigate failures and make evidence-backed completion claims |
| Communication | `simple-english`, `handoff`, `git-commit` | Improve technical prose, transfer context, or create a commit when requested |
| Discovery | `find-skills` | Find an additional capability outside this family |

When these skills create or update an artifact, they must first reuse the
repository's documented owner and path. With Harness Slim, substantial work
that needs durable phases, coordination, recovery, or risk control uses
`docs/plans/feat-<id>.md` linked from its feature record. Do not create
`docs/superpowers/` as a fallback. If an artifact's owner or path is unclear,
use `agent-docs-architect`; if it is known, use `agent-docs-writer`.

## Typical flow

```text
Need a working agent harness        -> harness-slim
Need to size feature/plan artifacts -> harness-task
Need to assess that harness         -> harness-slim-review
Need to remove proven drift         -> repo-gardening
Need to choose the docs system      -> agent-docs-architect
Need to write one chosen document -> agent-docs-writer
```

`agent-docs-architect` selects document ownership and reading routes.
`agent-docs-writer` creates or revises the selected documents. `harness-slim`
uses the repository's existing canonical documents instead of replacing them
with a universal documentation tree.

For documentation maintenance, route a bounded repair of known documents to
`agent-docs-writer`. Route unclear ownership or hierarchy to
`agent-docs-architect`. `repo-gardening` changes documentation only when it is
direct residue of a confirmed code, configuration, dependency, or artifact
cleanup.

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

`AGENTS.md` requires an assessment of project scale, task complexity, and
impact before feature, plan, or progress artifacts are created. The index uses
`todo`, `active`, `blocked`, and `done`; keep zero or one feature active.
`progress.md` is append-only feature state: add a record below its final
template note only when a material result, blocker, handoff, or next action
changes. `init.sh` is an editable Bash workflow based only on observed
repository commands.

Lightweight work needs no feature. Keep bounded tracked work in its feature
record. For substantial work that needs a durable plan, link
`docs/plans/feat-<id>.md` from that record. Existing repository-native
documents, commands, and trackers remain canonical when they already serve the
needed purpose.

## Install

Install only the skills you need:

```bash
npx skills add tungxuan1656/harness-slim
npx skills add tungxuan1656/harness-slim --skill harness-slim
npx skills add tungxuan1656/harness-slim --skill harness-task
npx skills add tungxuan1656/harness-slim --skill harness-slim-review
npx skills add tungxuan1656/harness-slim --skill repo-gardening
npx skills add tungxuan1656/harness-slim --skill agent-docs-architect
npx skills add tungxuan1656/harness-slim --skill agent-docs-writer
```

Example prompts:

```text
Use $harness-slim to create a concise evidence-based harness for this repository.
Use $harness-task to choose the lightest safe feature and plan artifacts for this request.
Use $harness-slim-review to audit the current harness without modifying files.
Use $repo-gardening to remove one verified batch of duplicated helpers.
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

The layout check verifies the six active skill packages, their required local
resources, agent metadata where supplied, and the task and architect evaluation
corpora. It does not claim that model behavior has passed; validate meaningful
changes against representative repositories.

The contributor-oriented design notes live in [docs/README.md](docs/README.md).

## References

- [Anthropic: Effective harnesses for long-running agents](https://www.anthropic.com/engineering/effective-harnesses-for-long-running-agents)
- [Anthropic: Harness design for long-running application development](https://www.anthropic.com/engineering/harness-design-long-running-apps)
- [OpenAI: Harness Engineering](https://openai.com/index/harness-engineering/)

Inspired in part by [walkinglabs/learn-harness-engineering](https://github.com/walkinglabs/learn-harness-engineering).

## License

[MIT](LICENSE)
