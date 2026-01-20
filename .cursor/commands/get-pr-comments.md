# Get PR Comments

Fetch and display comments from the active PR for the current branch.

Steps:

1. Check if the `gh` CLI is available
2. Run `gh pr view --json number,url,title` to check if a PR exists for the current branch
    - If no PR exists, inform the user that there is no open PR for this branch
    - If a PR exists, continue
3. Fetch all PR comments using:
    - `gh pr view --json comments,reviews`
4. Display the comments in a readable format:
    - Show review comments with author, date, and body
    - Show general PR comments with author, date, and body
    - Group by review thread if applicable
5. Summarize the feedback and any action items requested by reviewers
