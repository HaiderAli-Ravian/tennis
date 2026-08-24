export type MatchStatus = "scheduled" | "live" | "finished";

export type PlayerSide = "left" | "right";

export interface TennisScore {
  readonly sets: readonly number[];
  readonly currentGame: string | null;
}

export interface LiveScorePlayer {
  readonly id: string;
  readonly displayName: string;
  readonly countryCode: string;
  readonly countryName: string;
  readonly avatarSrc: string;
  readonly side: PlayerSide;
  readonly score: TennisScore | null;
}

export interface LiveScoreMatch {
  readonly id: string;
  readonly cardLabel: string;
  readonly status: MatchStatus;
  readonly statusLabel: string;
  readonly players: readonly [LiveScorePlayer, LiveScorePlayer];
}

export interface LiveScoreResponse {
  readonly match: LiveScoreMatch;
}
