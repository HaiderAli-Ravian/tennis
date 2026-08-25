export interface DashboardNavigationItem {
  readonly label: string;
  readonly pageTitle: string;
  readonly href: string;
  readonly icon: string;
  readonly live?: boolean;
}

export const dashboardNavigationItems: readonly DashboardNavigationItem[] = [
  {
    label: "All games",
    pageTitle: "All Games",
    href: "/all-games",
    icon: "all-games.svg",
  },
  {
    label: "Live Games",
    pageTitle: "Live Games",
    href: "/live-games",
    icon: "live-games.svg",
    live: true,
  },
  {
    label: "Score",
    pageTitle: "Live Scores",
    href: "/score",
    icon: "score.svg",
  },
  {
    label: "Categories",
    pageTitle: "Categories",
    href: "/categories",
    icon: "categories.svg",
  },
  {
    label: "Video",
    pageTitle: "Video",
    href: "/video",
    icon: "video.svg",
  },
  {
    label: "Statistic",
    pageTitle: "Statistic",
    href: "/statistic",
    icon: "statistic.svg",
  },
] as const;

export function getDashboardNavigationItem(pathname: string) {
  return (
    dashboardNavigationItems.find(
      (item) => pathname === item.href || pathname.startsWith(`${item.href}/`),
    ) ?? dashboardNavigationItems[2]
  );
}
