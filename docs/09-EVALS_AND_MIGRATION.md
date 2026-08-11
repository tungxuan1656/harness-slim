# Quality and Release

## Source of truth

Each active package owns its own instructions and local references:

```text
skills/
├── harness-slim/
├── harness-slim-review/
├── repo-gardening/
├── agent-docs-architect/
└── agent-docs-writer/
```

Do not retain compatibility documentation, generated fallback references, or
validation logic for removed router and phase-specialist packages.

## Deterministic checks

Run after changing the skill family:

```bash
node scripts/validate-skill-family.mjs
bash -n skills/harness-slim/templates/init.sh
```

The first command validates package names, frontmatter, required local files,
agent metadata where provided, and the architect evaluation corpus. The Bash
syntax check protects the shared `init.sh` template. These checks validate
packaging, not model judgment.

## Behavior evaluation

Exercise changed skills against representative repositories and prompts:

- `harness-slim`: existing harness, absent commands, declared workspaces,
  active/dependent features, and dirty worktrees.
- `harness-slim-review`: safe read-only audit, evidence classification, and
  no-op verdicts when an omission is justified.
- `repo-gardening`: duplicate helpers, dynamic references, cleanup residue in
  related documents, uncertain candidates, and unrelated baseline failures.
- `agent-docs-architect`: compact and federated repositories, existing native
  documents, external canonical systems, and an apply handoff.
- `agent-docs-writer`: each document type, conflicting evidence, rewrite
  preservation, concision, routes, and canonical ownership.

Review reruns for focused diffs, preservation of human-authored truth, and no
unrelated working-tree changes. Report uncertain cases rather than forcing a
mutation.

## Release gate

Before release, confirm that every public install command, prompt, file path,
and CI command names an existing skill or resource. Update the root README,
these notes, GitHub templates, and workflow together when the family layout
changes.
