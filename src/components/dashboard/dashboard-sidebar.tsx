import Image from "next/image";

const assetRoot = "/assets/dashboard";

interface NavigationItem {
  readonly label: string;
  readonly icon: string;
  readonly live?: boolean;
  readonly active?: boolean;
}

const navigationItems: readonly NavigationItem[] = [
  { label: "All games", icon: "all-games.svg" },
  { label: "Live Games", icon: "live-games.svg", live: true },
  { label: "Score", icon: "score.svg", active: true },
  { label: "Categories", icon: "categories.svg" },
  { label: "Video", icon: "video.svg" },
  { label: "Statistic", icon: "statistic.svg" },
] as const;

function UpgradeCard() {
  return (
    <section
      data-slot="upgrade-card"
      aria-labelledby="upgrade-card-title"
      className="absolute top-[582px] left-[25px] h-[293px] w-[250px] rounded-card"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 overflow-hidden rounded-card bg-promo-surface"
      />
      <Image
        src={`${assetRoot}/illustrations/upgrade-pro.svg`}
        alt=""
        width={215}
        height={215}
        loading="eager"
        aria-hidden="true"
        className="absolute -top-[50px] left-[18px] z-10"
      />
      <p
        id="upgrade-card-title"
        className="absolute top-[186px] left-[25px] z-20 w-[200px] text-center text-[15px]/[1.25] font-normal tracking-[0.5px] text-text-brand"
      >
        Upgrade to <strong className="font-bold text-primary">PRO</strong> for
        <br /> more features.
      </p>
      <span className="absolute bottom-[15px] left-[10px] z-20 flex h-[54px] w-[230px] items-center justify-center rounded-button bg-primary text-[15px]/[1] font-medium tracking-[0.5px] text-text-on-accent">
        Upgrade
      </span>
    </section>
  );
}

export function DashboardSidebar() {
  return (
    <aside
      data-slot="dashboard-sidebar"
      aria-label="Dashboard sidebar"
      className="relative z-10 h-full w-full bg-sidebar-surface backdrop-blur-dashboard-sidebar"
    >
      <div className="absolute top-[40px] left-[40px] flex h-[30px] items-center gap-[15px]">
        <Image
          src={`${assetRoot}/brand/tennis-mark.svg`}
          alt=""
          width={30}
          height={30}
          aria-hidden="true"
        />
        <span className="font-brand text-[25px]/[1] font-semibold text-text-brand">
          Tennis
        </span>
      </div>

      <nav
        aria-label="Dashboard navigation"
        className="absolute top-[138px] left-[40px] w-[260px]"
      >
        <ul className="grid list-none gap-[46px] p-0">
          {navigationItems.map((item) => (
            <li
              key={item.label}
              className={`relative flex h-[20px] items-center gap-[15px] text-[15px]/[1] font-normal tracking-[1px] ${
                item.active ? "text-primary" : "text-text-disabled"
              }`}
            >
              <span className="flex size-[20px] items-center justify-center">
                <Image
                  src={`${assetRoot}/icons/navigation/${item.icon}`}
                  alt=""
                  width={20}
                  height={20}
                  aria-hidden="true"
                />
              </span>
              <span aria-current={item.active ? "page" : undefined}>
                {item.label}
              </span>
              {item.live ? (
                <span className="ml-[-5px] flex h-[15px] w-[30px] items-center justify-center rounded-badge bg-live text-[8px]/[1] font-semibold tracking-[0.5px] text-text-on-accent">
                  LIVE
                </span>
              ) : null}
              {item.active ? (
                <span
                  aria-hidden="true"
                  className="absolute top-[-5px] right-0 h-[30px] w-[5px] rounded-l-[5px] bg-primary shadow-active-indicator"
                />
              ) : null}
            </li>
          ))}
        </ul>
      </nav>

      <UpgradeCard />
    </aside>
  );
}
