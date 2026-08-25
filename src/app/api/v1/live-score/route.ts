import { liveScoreData } from "@/lib/live-score-data";

export async function GET() {
  return Response.json(liveScoreData);
}
