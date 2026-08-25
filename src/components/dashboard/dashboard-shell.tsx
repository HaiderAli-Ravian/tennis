import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { DashboardSidebar } from "@/components/dashboard/dashboard-sidebar";
import { LatestScoresCard } from "@/components/dashboard/latest-scores-card";
import { LiveScoreCard } from "@/components/dashboard/live-score-card";
import { PlayerProfileCard } from "@/components/dashboard/player-profile-card";
import { RankingsSection } from "@/components/dashboard/rankings-section";
import { StatisticsSection } from "@/components/dashboard/statistics-section";

interface DashboardShellProps {
  readonly children: React.ReactNode;
}

function LeftDashboardColumn() {
  return (
    <div
      data-slot="dashboard-left-column"
      className="col-start-1 row-start-2 mt-px grid h-[771px] grid-rows-[200px_376px_170px_25px] max-[1439px]:mt-0 max-[1439px]:h-auto max-[1439px]:grid-rows-[200px_auto_auto] max-[1439px]:gap-y-[20px] max-[639px]:grid-rows-[265px_auto_auto]"
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
      className="col-start-2 row-start-2 grid h-[772px] min-w-0 grid-cols-[minmax(400px,1fr)] grid-rows-[505px_22px_220px_25px] max-[1439px]:mt-[20px] max-[1439px]:h-auto max-[1439px]:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] max-[1439px]:grid-rows-[505px] max-[1439px]:gap-x-[20px] max-[899px]:grid-cols-1 max-[899px]:grid-rows-[505px_220px] max-[899px]:gap-y-[20px] max-[639px]:grid-rows-[505px_240px]"
    >
      <PlayerProfileCard />
      <div className="row-start-3 max-[1439px]:col-start-2 max-[1439px]:row-start-1 max-[899px]:col-start-1 max-[899px]:row-start-2">
        <LatestScoresCard />
      </div>
    </div>
  );
}

export function ScoreDashboardContent() {
  return (
    <>
      <LeftDashboardColumn />
      <RightDashboardColumn />
    </>
  );
}

export function DashboardShell({ children }: DashboardShellProps) {
  return (
    <div
      data-slot="dashboard-viewport"
      className="relative min-h-svh w-full overflow-x-clip bg-page-backdrop pr-[.3rem]"
    >
      <div
        data-slot="dashboard-frame"
        className="relative isolate grid h-svh min-h-[900px] w-full min-w-[1440px] grid-cols-[300px_minmax(1140px,1fr)] overflow-x-clip bg-frame-tint backdrop-blur-dashboard-frame max-[1439px]:block max-[1439px]:h-auto max-[1439px]:min-h-svh max-[1439px]:min-w-0"
      >
        <div className="h-full max-[1439px]:hidden">
          <DashboardSidebar />
        </div>
        <main
          id="dashboard-content"
          data-slot="dashboard-content"
          tabIndex={-1}
          className="grid h-full w-full grid-cols-[minmax(650px,13fr)_minmax(400px,8fr)] grid-rows-[128px_772px] gap-x-[20px] pr-[40px] pl-[30px] max-[1439px]:mx-auto max-[1439px]:block max-[1439px]:h-auto max-[1439px]:max-w-[1000px] max-[1439px]:px-[24px] max-[1439px]:pb-[40px] max-[639px]:px-[16px] max-[639px]:pb-[24px]"
        >
          <DashboardHeader />
          {children}
        </main>
      </div>
    </div>
  );
}
