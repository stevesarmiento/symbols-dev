# Open a PR

Requirements:

- Check that I’m on a branch other than `main` or `prod`. If not, bail and explain.
- Prepend `GIT_EDITOR=true` to all `git` commands (avoid interactive editors).
- Prefer `gh` (GitHub CLI) when available. If `gh` isn’t available, print the final PR title + body for me to paste into the GitHub UI.

## Step 1: Gather context

Figure out the base branch:

- If an explicit base branch is provided, use it.
- Otherwise use the repo default branch (from `origin/HEAD`).

Run:

```bash
GIT_EDITOR=true git branch --show-current
GIT_EDITOR=true git remote show origin | grep 'HEAD branch' | cut -d' ' -f5
GIT_EDITOR=true git status --porcelain
GIT_EDITOR=true git log --oneline <base>..HEAD
GIT_EDITOR=true git diff --name-only <base>..HEAD
```

## Step 2: Ensure changes are committed and pushed

- If there’s staged or unstaged work, commit all relevant changes first.
- If the branch isn’t pushed yet, push it:

```bash
GIT_EDITOR=true git push -u origin $(git branch --show-current)
```

## Step 3: Extract Linear ticket (if present)

From the current branch name, extract a Linear ticket ID matching `[A-Z]+-[0-9]+` (e.g. `PRO-123`, `ENG-456`).

## Step 4: Create the PR title (Conventional Commits)

Format:
`<type>[optional scope][!]: <description>`

Examples:

- `feat(auth): add OAuth2 login support`
- `fix(api): resolve race condition in request handler`
- `refactor!: migrate from REST to GraphQL`

Keep the title **80 characters or less**.

## Step 5: Create the PR body

Use this template:

```markdown
## Summary

- <2-4 bullets describing the main changes>

## Test Plan (if applicable)

- <how to verify>

## Breaking Changes (if applicable)

- <what breaks + migration steps>

Closes <TICKET-ID>
```

If no Linear ticket was found, omit the `Closes ...` line. Use `Closes` (not `Refs`) so Linear can auto-update the ticket on merge.

## Step 6: Create the PR

Use `gh` when available:

```bash
gh pr create --base "<base>" --title "<title>" --body "$(cat <<'EOF'
<body content>
EOF
)"
```

If needed, use `gh pr view --json url` to fetch the URL after creation.

## Step 7: Report results

After creating the PR:

1. Always paste the PR URL so I can click it easily
2. Confirm whether a Linear ticket was included
3. Note that Linear will auto-update when the PR is merged
