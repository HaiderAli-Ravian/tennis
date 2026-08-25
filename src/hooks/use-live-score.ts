"use client";

import { useQuery } from "@tanstack/react-query";

import { getLiveScore } from "@/services/live-score-service";

export const liveScoreQueryKey = ["live-score"] as const;

export function useLiveScore() {
  return useQuery({
    queryKey: liveScoreQueryKey,
    queryFn: ({ signal }) => getLiveScore(signal),
    staleTime: 30_000,
  });
}
