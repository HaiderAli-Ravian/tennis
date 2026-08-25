"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { dashboardNavigationItems } from "@/lib/dashboard-navigation";

const assetRoot = "/assets/dashboard";

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
        className="absolute top-[170px] left-[25px] z-20 w-[200px] text-center text-[15px]/[1.25] font-normal tracking-[0.5px] text-text-brand"
      >
        Upgrade to <strong className="font-bold text-primary">PRO</strong> for
        <br /> more features.
      </p>
      <button className="absolute bottom-[15px] left-[10px] z-20 flex h-[54px] w-[230px] items-center justify-center rounded-button bg-primary text-[15px]/[1] font-medium tracking-[0.5px] text-text-on-accent">
        Upgrade
      </button>
    </section>
  );
}

interface DashboardSidebarProps {
  readonly onNavigate?: () => void;
}

export function DashboardSidebar({ onNavigate }: DashboardSidebarProps) {
  const pathname = usePathname();

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
          {dashboardNavigationItems.map((item) => {
            const isActive =
              pathname === item.href || pathname.startsWith(`${item.href}/`);

            return (
              <li key={item.href} className="relative h-[20px]">
                <Link
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  onClick={onNavigate}
                  className={`flex h-[20px] w-full items-center gap-[15px] text-[15px]/[1] font-normal tracking-[1px] transition-colors duration-150 motion-reduce:transition-none ${
                    isActive
                      ? "text-primary"
                      : "text-text-disabled hover:text-text-page-title"
                  }`}
                >
                  <span
                    className={`flex size-[20px] items-center justify-center transition-opacity duration-150 motion-reduce:transition-none ${
                      isActive ? "opacity-100" : "opacity-70"
                    }`}
                  >
                    {!isActive && item.href === "/score" ? (
                      <span
                        aria-hidden="true"
                        className="size-[20px] bg-text-disabled"
                        style={{
                          WebkitMaskImage: `url(${assetRoot}/icons/navigation/${item.icon})`,
                          WebkitMaskPosition: "center",
                          WebkitMaskRepeat: "no-repeat",
                          WebkitMaskSize: "contain",
                          maskImage: `url(${assetRoot}/icons/navigation/${item.icon})`,
                          maskPosition: "center",
                          maskRepeat: "no-repeat",
                          maskSize: "contain",
                        }}
                      />
                    ) : (
                      <Image
                        src={`${assetRoot}/icons/navigation/${item.icon}`}
                        alt=""
                        width={20}
                        height={20}
                        aria-hidden="true"
                      />
                    )}
                  </span>
                  <span>{item.label}</span>
                  {item.live ? (
                    <Image
                      src={`${assetRoot}/icons/navigation/live-badge.svg`}
                      alt=""
                      width={30}
                      height={15}
                      aria-hidden="true"
                      className="ml-[-5px]"
                    />
                  ) : null}
                </Link>
                {isActive ? (
                  <span
                    aria-hidden="true"
                    className="absolute top-[-5px] right-0 h-[30px] w-[5px] rounded-l-[5px] bg-primary shadow-active-indicator"
                  />
                ) : null}
              </li>
            );
          })}
        </ul>
      </nav>

      <UpgradeCard />
    </aside>
  );
}
