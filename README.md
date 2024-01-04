
# GitHub Action: CIT : Merge a specific PR

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


### Sample


name: 🪅🪅🪅 Launch PR Merger 🪅🪅🪅
on:
  workflow_dispatch:
    inputs:
        pr_number:
            type: number
            description: 'The PR number'
        commit_message:
            type: string
            description: 'The commit message'

permissions: write-all

jobs:
  send-pull-request:
    runs-on: ubuntu-latest

    steps:
         
      - name: Get funky
        uses: actions/checkout@v4
      - name: Merge
        uses: ./
        id: mergePR
        with:
          owner: 'elopezanaya'
          repo: 'cit-gh-actions-merge-pull-request'
          token: ${{ secrets.GITHUB_TOKEN }}
          author: ${{ github.actor }} <${{ github.actor }}@users.noreply.github.com>
          pull_number: ${{ github.event.inputs.pr_number }}
          commit_message : ${{ github.event.inputs.commit_message }}
      - name : PrintOutput
        run: | 
          echo "SHA ${{ steps.mergePR.outputs.sha }}"
          echo "status :  ${{ steps.mergePR.outputs.merged }}"
          
