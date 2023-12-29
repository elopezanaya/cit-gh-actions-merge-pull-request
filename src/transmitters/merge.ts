import { Octokit } from "@octokit/rest";
import { MergePayload } from "src/vo/MergePayload";

export const merge = async (mergePayload: MergePayload) => {
  try {
    console.log("merge");

    const octokit = new Octokit({ auth: mergePayload.token });

    await octokit.pulls.createReview({
      owner: mergePayload.owner,
      repo: mergePayload.repo,
      pull_number: mergePayload.pull_number,
      event: "APPROVE",
    });

    const response = await octokit.pulls.merge({
      owner: mergePayload.owner,
      repo: mergePayload.repo,
      pull_number: mergePayload.pull_number,
      merge_method: "squash",
      commit_message: mergePayload.commit_message,
    });

    return response;
  } catch (error) {
    throw new Error(`Failed to merge pull request: ${error}`);
  }
};
