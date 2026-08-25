import { ComingSoon } from "@/components/dashboard/coming-soon";
import { dashboardNavigationItems } from "@/lib/dashboard-navigation";

interface ComingSoonPageProps {
  readonly href: string;
}

export function ComingSoonPage({ href }: ComingSoonPageProps) {
  const item = dashboardNavigationItems.find(
    (navigationItem) => navigationItem.href === href,
  );

  if (!item) {
    throw new Error(`Unknown dashboard route: ${href}`);
  }

  return <ComingSoon title={item.pageTitle} icon={item.icon} />;
}
