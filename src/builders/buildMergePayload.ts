import * as core from "@actions/core";
import { MergePayload } from "src/vo/MergePayload";

type CoreType = typeof core;
export const buildMergePayload = async (inputs: CoreType) => {
  const mergePayload: MergePayload = {
    token: inputs.getInput("token"),
    owner: inputs.getInput("owner"),
    repo: inputs.getInput("repo"),
    pull_number: parseInt(inputs.getInput("pull_number")),
    commit_message: inputs.getInput("commit_message"),
  };

  return mergePayload;
};
