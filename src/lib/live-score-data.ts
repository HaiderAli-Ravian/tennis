import type { LiveScoreResponse } from "@/types/live-score";

export const liveScoreData = {
  match: {
    id: "naomi-o-vs-anindita-r",
    cardLabel: "Your Next Match",
    status: "scheduled",
    statusLabel: "18 January 2020",
    players: [
      {
        id: "naomi-o",
        displayName: "Naomi O.",
        countryCode: "JPN",
        countryName: "Japan",
        avatarSrc: "/assets/dashboard/players/avatar-naomi-osaka.svg",
        side: "left",
        score: null,
      },
      {
        id: "anindita-r",
        displayName: "Anindita R.",
        countryCode: "IDN",
        countryName: "Indonesia",
        avatarSrc:
          "/assets/dashboard/players/avatar-anindita-rahmawati.svg",
        side: "right",
        score: null,
      },
    ],
  },
} as const satisfies LiveScoreResponse;
