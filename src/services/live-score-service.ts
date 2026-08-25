import { apiClient } from "@/lib/api-client";
import type { LiveScoreResponse } from "@/types/live-score";

export async function getLiveScore(
  signal?: AbortSignal,
): Promise<LiveScoreResponse> {
  const { data } = await apiClient.get<LiveScoreResponse>("/live-score", {
    signal,
  });

  return data;
}
