export interface MergePayload {
  owner: string;
  pull_number: number;
  repo: string;
  token: string;
  commit_message: string;
}
