import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { DashboardSidebar } from "@/components/dashboard/dashboard-sidebar";
import { LatestScoresCard } from "@/components/dashboard/latest-scores-card";
import { LiveScoreCard } from "@/components/dashboard/live-score-card";
import { PlayerProfileCard } from "@/components/dashboard/player-profile-card";
import { RankingsSection } from "@/components/dashboard/rankings-section";
import { StatisticsSection } from "@/components/dashboard/statistics-section";

function LeftDashboardColumn() {
  return (
    <div
      data-slot="dashboard-left-column"
      className="col-start-1 row-start-2 mt-px grid h-[771px] grid-rows-[200px_376px_170px_25px]"
    >
      <LiveScoreCard />
      <StatisticsSection />
      <RankingsSection />
    </div>
  );
}

function RightDashboardColumn() {
  return (
    <div
      data-slot="dashboard-right-column"
      className="col-start-2 row-start-2 grid h-[772px] min-w-0 grid-cols-[minmax(400px,1fr)] grid-rows-[505px_22px_220px_25px]"
    >
      <PlayerProfileCard />
      <div className="row-start-3">
        <LatestScoresCard />
      </div>
    </div>
  );
}

export function DashboardShell() {
  return (
    <div
      data-slot="dashboard-frame"
      className="relative isolate grid h-svh min-h-[900px] w-full min-w-[1440px] grid-cols-[300px_minmax(1140px,1fr)] overflow-x-clip bg-frame-tint backdrop-blur-dashboard-frame"
    >
      <DashboardSidebar />
      <main
        id="dashboard-content"
        data-slot="dashboard-content"
        tabIndex={-1}
        className="grid h-full w-full grid-cols-[minmax(650px,13fr)_minmax(400px,8fr)] grid-rows-[128px_772px] gap-x-[20px] pr-[40px] pl-[30px]"
      >
        <DashboardHeader />
        <LeftDashboardColumn />
        <RightDashboardColumn />
      </main>
    </div>
  );
}
