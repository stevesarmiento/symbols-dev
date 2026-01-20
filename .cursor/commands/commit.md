# Create a conventional commit

Stage all changes and create a single git commit following Conventional Commits, with optional Linear ticket linking.

Requirements:

- Operate from the repository root. If not in a Git repo, stop and report.
- Check that I’m on a branch other than `main` or `prod`. If not, bail and explain.
- Prepend `GIT_EDITOR=true` to all `git` commands (avoid interactive editors).
- Create **one** commit for the current work (no commit splitting unless asked).
- Extract a Linear ticket ID from the branch name matching `[A-Z]+-[0-9]+` (e.g. `PRO-123`, `ENG-456`) and add it as a `Refs: <TICKET-ID>` footer when present.
- Do NOT add a `Co-Authored-By` line.

## Step 1: Gather context

Run:

```bash
GIT_EDITOR=true git branch --show-current
GIT_EDITOR=true git status --porcelain
GIT_EDITOR=true git diff HEAD --stat
GIT_EDITOR=true git log --oneline -5
```

If there are no changes (working tree clean), stop and report.

## Step 2: Choose the commit message

### Format

```
<type>[optional scope][!]: <description>

[optional body]

[optional footer(s)]
```

### Types

- `feat` - New feature
- `fix` - Bug fix
- `docs` - Documentation only
- `style` - Formatting (no code change)
- `refactor` - Code change that neither fixes nor adds
- `perf` - Performance improvement
- `test` - Adding or correcting tests
- `build` - Build system or dependencies
- `ci` - CI configuration
- `chore` - Other changes

### Rules

- Description: lowercase, imperative mood, no period, ~50 chars
- Breaking changes: add `!` after type/scope (e.g. `feat!:` or `feat(api)!:`) and include a `BREAKING CHANGE:` footer
- Linear ticket: if found from branch name, add `Refs: <TICKET-ID>` footer (omit if no ticket found)

## Step 3: Stage and commit

Stage everything and commit with a single message:

```bash
GIT_EDITOR=true git add -A && GIT_EDITOR=true git commit -m "$(cat <<'EOF'
<type>[scope]: <description>

<body if needed>

Refs: <TICKET-ID>
EOF
)"
```

If no ticket was found, omit the `Refs: ...` line (and remove the extra blank line above it if needed).

## Step 4: Report results

After committing, print a brief confirmation:
`Committed: <commit message first line>`
