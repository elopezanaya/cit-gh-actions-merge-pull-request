
## GitHub Action: CIT : Merge a specific PR

This GitHub Action merges a specific pull request (PR) into a repository.

### Inputs

- `owner` (required): Owner of the repository.
- `repo` (required): Name of the repository.
- `token` (default: `${{ github.token }}`): GitHub token.
- `author` (required): Author of the changes.
- `pull_number` (required): ID of the PR to be merged.
- `commit_message` (default: "Automatically merge via github-actions"): Message to be included as part of the merge.

### Outputs

- `sha`: SHA of the merge.
- `merged`: State of the result of the merge.
