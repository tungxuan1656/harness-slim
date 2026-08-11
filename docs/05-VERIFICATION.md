# Verification

`harness-slim` keeps verification in a single editable Bash `init.sh`. The file
adapts existing repository evidence; it does not discover commands at runtime,
install dependencies, generate child scripts, or become a second build system.

## Build from evidence

Inspect manifests, lockfiles, workspace declarations, CI, tool configuration,
tests, and maintained project documents. Add only commands that exist or that
the repository supports. For Node.js workspaces, prefer root scripts that cover
declared workspaces; otherwise invoke matching scripts in each declared
workspace. Ignore nested packages outside declared workspaces.

For non-Node repositories, use an equivalent Bash command only when the
required tool and configuration exist.

## Execution contract

```text
format command, when configured
  -> lint command, when configured
  -> build and test tasks in bounded parallelism
```

Formatters and linters run before build and test because they can edit files.
Independent build and test tasks run with bounded concurrency. Every absent
phase prints an explicit skip. A configured task failure produces a nonzero exit
status. `HARNESS_JOBS` is a positive integer that limits parallel work.

Update `init.sh` when commands, tools, or declared workspace modules change.
After writing it, make it executable and run the relevant repository commands.

## Read-only review and gardening

`harness-slim-review` inspects `init.sh` before running it. Do not run an
`init.sh` that applies format or lint fixes unless the user authorizes those
working-tree changes. Syntax checks and read-only inspection remain safe.

`repo-gardening` runs targeted checks after each coherent cleanup,
then the repository verification route. It reports unrelated baseline failures
without absorbing them into the cleanup scope.
