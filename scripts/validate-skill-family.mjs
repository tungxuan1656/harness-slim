#!/usr/bin/env node

import { access, readFile } from "node:fs/promises";
import { constants } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const repositoryRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");

const skills = [
  {
    name: "harness-slim",
    files: [
      "PROVENANCE.md",
      "metadata.json",
      "agents/openai.yaml",
      "templates/agents.md",
      "templates/feature_index.json",
      "templates/feat-template.md",
      "templates/progress.md",
      "templates/init.sh",
    ],
    agent: true,
    metadata: true,
  },
  {
    name: "harness-slim-review",
    files: ["agents/openai.yaml", "references/review-rubric.md"],
    agent: true,
  },
  {
    name: "harness-slim-gardenring",
    files: ["agents/openai.yaml", "references/cleanup-rubric.md"],
    agent: true,
  },
  {
    name: "agent-docs-writer",
    files: [
      "references/decision-document.md",
      "references/entry-documents.md",
      "references/information-patterns.md",
      "references/review-checklist.md",
      "references/system-documents.md",
      "references/work-documents.md",
    ],
  },
  {
    name: "agent-docs-architect",
    files: [
      "agents/openai.yaml",
      "evals/evals.json",
      "references/artifact-catalog.md",
      "references/blueprint-format.md",
      "references/scale-profiles.md",
    ],
    agent: true,
    evals: true,
  },
];

const removedSkills = [
  "harness-router",
  "harness-map",
  "harness-specs",
  "harness-features",
  "harness-verify",
  "harness-garden",
  "harness-docs-guide",
];

function assert(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}

async function exists(path) {
  try {
    await access(path, constants.F_OK);
    return true;
  } catch (error) {
    if (error.code === "ENOENT") {
      return false;
    }
    throw error;
  }
}

async function readRequired(path) {
  assert(await exists(path), `Missing required file: ${path}`);
  return readFile(path, "utf8");
}

function validateFrontmatter(source, path, expectedName) {
  const match = source.match(/^---\n([\s\S]*?)\n---\n/);
  assert(match, `${path}: missing YAML frontmatter`);

  const fields = [...match[1].matchAll(/^([A-Za-z][A-Za-z0-9_-]*):/gm)].map(
    ([, field]) => field,
  );
  assert(
    fields.length === 2 && fields.includes("name") && fields.includes("description"),
    `${path}: frontmatter must contain only name and description`,
  );
  assert(
    new RegExp(`^name:[ \\t]*${expectedName}[ \\t]*$`, "m").test(match[1]),
    `${path}: frontmatter name must be ${expectedName}`,
  );
  assert(
    /^description:[ \t]*(?:[>|][+-]?[ \t]*|[^ \t\r\n].*)$/m.test(match[1]),
    `${path}: description must not be empty`,
  );
}

function validateAgent(source, path) {
  for (const field of ["display_name", "short_description", "default_prompt"]) {
    assert(
      new RegExp(`^[ \\t]{2}${field}:[ \\t]*.+$`, "m").test(source),
      `${path}: missing ${field}`,
    );
  }
}

function validateEvals(source, path, expectedName) {
  const corpus = JSON.parse(source);
  assert(corpus.skill_name === expectedName, `${path}: skill_name mismatch`);
  assert(Array.isArray(corpus.evals) && corpus.evals.length > 0, `${path}: no evals`);

  const ids = new Set();
  for (const evaluation of corpus.evals) {
    assert(Number.isInteger(evaluation.id), `${path}: eval id must be an integer`);
    assert(!ids.has(evaluation.id), `${path}: duplicate eval id ${evaluation.id}`);
    ids.add(evaluation.id);
    for (const field of ["name", "prompt", "expected_output"]) {
      assert(
        typeof evaluation[field] === "string" && evaluation[field].trim(),
        `${path}: eval ${evaluation.id} missing ${field}`,
      );
    }
    for (const field of ["files", "expectations", "tags"]) {
      assert(Array.isArray(evaluation[field]), `${path}: eval ${evaluation.id} ${field} must be an array`);
      assert(
        evaluation[field].every((value) => typeof value === "string" && value.trim()),
        `${path}: eval ${evaluation.id} ${field} must contain non-empty strings`,
      );
    }
    assert(evaluation.expectations.length > 0, `${path}: eval ${evaluation.id} has no expectations`);
  }
}

async function validateHarnessSlimContract(directory) {
  const skillPath = resolve(directory, "SKILL.md");
  const skill = await readRequired(skillPath);
  assert(
    skill.includes("| `features/feat-template.md` | Reusable feature document template |"),
    `${skillPath}: feature template must be created in features/`,
  );
  assert(
    skill.includes("Do not reference `.agents/README.md` from `AGENTS.md`."),
    `${skillPath}: AGENTS.md must not reference .agents/README.md`,
  );

  const featureTemplatePath = resolve(directory, "templates/feat-template.md");
  const featureTemplate = await readRequired(featureTemplatePath);
  assert(
    featureTemplate.includes(
      "<!-- Keep small, single-session steps here. For complex, multi-session, or multi-agent work, use `docs/plans/{{FEATURE_ID}}.md`. -->",
    ),
    `${featureTemplatePath}: plan guidance is incorrect`,
  );

  const progressTemplatePath = resolve(directory, "templates/progress.md");
  const progressTemplate = await readRequired(progressTemplatePath);
  const expectedProgressTemplate = `# Progress

<!-- Log template -->

## YYYY-MM-DD — feat-001

**State**: todo
**Done**: —
**Evidence**: —
**Blockers**: none
**Next**: Define the feature scope and acceptance criteria.

<!-- Add each new block below this note. Do not edit older blocks. -->
`;
  assert(
    progressTemplate === expectedProgressTemplate,
    `${progressTemplatePath}: must preserve the append-only log template`,
  );

  const agentsTemplatePath = resolve(directory, "templates/agents.md");
  const agentsTemplate = await readRequired(agentsTemplatePath);
  assert(
    !agentsTemplate.includes(".agents/README.md"),
    `${agentsTemplatePath}: AGENTS.md must not reference .agents/README.md`,
  );
}

async function validateSkill(skill) {
  const directory = resolve(repositoryRoot, "skills", skill.name);
  const skillPath = resolve(directory, "SKILL.md");
  const source = await readRequired(skillPath);
  validateFrontmatter(source, skillPath, skill.name);

  for (const file of skill.files) {
    await readRequired(resolve(directory, file));
  }

  if (skill.agent) {
    const agentPath = resolve(directory, "agents/openai.yaml");
    validateAgent(await readRequired(agentPath), agentPath);
  }

  if (skill.metadata) {
    const metadataPath = resolve(directory, "metadata.json");
    const metadata = JSON.parse(await readRequired(metadataPath));
    assert(metadata.name === skill.name, `${metadataPath}: name mismatch`);
  }

  if (skill.name === "harness-slim") {
    await validateHarnessSlimContract(directory);
  }

  if (skill.evals) {
    const evalPath = resolve(directory, "evals/evals.json");
    validateEvals(await readRequired(evalPath), evalPath, skill.name);
  }

  process.stdout.write(`PASS ${skill.name}\n`);
}

async function main() {
  for (const skill of skills) {
    await validateSkill(skill);
  }

  for (const skillName of removedSkills) {
    const path = resolve(repositoryRoot, "skills", skillName);
    assert(!(await exists(path)), `Removed skill remains packaged: ${path}`);
  }

  process.stdout.write("PASS skill family layout\n");
}

main().catch((error) => {
  process.stderr.write(`${error.message}\n`);
  process.exitCode = 1;
});
