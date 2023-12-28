import { buildMergePayload } from "./builders/buildMergePayload";
import { merge } from "./transmitters/merge";
import * as core from "@actions/core";

export async function run(): Promise<void> {
  try {
    const mergePayload = await buildMergePayload(core);
    const response = await merge(mergePayload);

    if (response.status !== 200) {
      throw new Error(`Failed to merge pull request: ${response.status}`);
    }

    core.setOutput("sha", response.data.sha);
    core.setOutput("merged", response.data.merged);
    core.info(`Merge successful: ${response.data.merged}`);

    core.ExitCode.Success;
  } catch (error) {
    core.error("Error in action received");
    core.setFailed((error as Error).message);
  }
}
