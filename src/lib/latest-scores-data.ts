export const scoreCategories = ["singles", "doubles", "mixed-doubles"] as const;

export type ScoreCategory = (typeof scoreCategories)[number];

export interface LatestScoreCompetitor {
  readonly name: string;
  readonly scores: readonly [number, number, number];
  readonly winner: boolean;
}

export interface LatestScoreMatch {
  readonly category: ScoreCategory;
  readonly label: string;
  readonly tournament: string;
  readonly competitors: readonly [
    LatestScoreCompetitor,
    LatestScoreCompetitor,
  ];
}

export const latestScoresData: Record<ScoreCategory, LatestScoreMatch> = {
  singles: {
    category: "singles",
    label: "Singles",
    tournament: "WTA - SINGLES: Australia Open, hard",
    competitors: [
      { name: "Anindita R. (IDN)", scores: [2, 6, 6], winner: true },
      { name: "Naomi O. (JPN)", scores: [0, 3, 1], winner: false },
    ],
  },
  doubles: {
    category: "doubles",
    label: "Doubles",
    tournament: "ATP - DOUBLES: Wimbledon, grass",
    competitors: [
      { name: "Ram R. / Salisbury J.", scores: [2, 7, 6], winner: true },
      { name: "Granollers M. / Zeballos H.", scores: [0, 5, 4], winner: false },
    ],
  },
  "mixed-doubles": {
    category: "mixed-doubles",
    label: "Mixed Doubles",
    tournament: "MIXED DOUBLES: US Open, hard",
    competitors: [
      { name: "Gauff C. / Sock J.", scores: [1, 6, 4], winner: false },
      { name: "Pegula J. / Krajicek A.", scores: [2, 7, 6], winner: true },
    ],
  },
};
