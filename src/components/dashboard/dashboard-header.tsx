"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";

import { MobileNavigation } from "@/components/dashboard/mobile-navigation";
import { getDashboardNavigationItem } from "@/lib/dashboard-navigation";

const assetRoot = "/assets/dashboard";

export function DashboardHeader() {
  const pathname = usePathname();
  const activeItem = getDashboardNavigationItem(pathname);

  return (
    <header
      data-slot="dashboard-header"
      className="relative col-span-2 flex h-[128px] items-center justify-between max-[1439px]:h-[96px] max-[639px]:h-[128px] max-[639px]:flex-col max-[639px]:items-stretch max-[639px]:justify-center max-[639px]:gap-[16px]"
    >
      <div className="flex items-center gap-[15px] max-[639px]:gap-[10px]">
        <Image
          src={`${assetRoot}/icons/header/arrow-back.svg`}
          alt=""
          width={30}
          height={30}
          aria-hidden="true"
        />
        <h1 className="text-[30px]/[1] font-semibold tracking-[1px] text-text-page-title max-[639px]:text-[24px]">
          {activeItem.pageTitle}
        </h1>
      </div>

      <div
        role="group"
        aria-label="Dashboard utilities"
        className="flex items-center gap-[20px] max-[1439px]:mr-[56px] max-[639px]:mr-0 max-[639px]:justify-end max-[639px]:gap-[16px]"
      >
        {[
          ["search.svg", "Search"],
          ["settings.svg", "Settings"],
          ["notification.svg", "Notifications"],
        ].map(([icon, label]) => (
          <span key={icon} role="img" aria-label={label} className="size-6">
            <Image
              src={`${assetRoot}/icons/header/${icon}`}
              alt=""
              width={24}
              height={24}
              aria-hidden="true"
            />
          </span>
        ))}
        <Image
          src={`${assetRoot}/players/avatar-account.svg`}
          alt="Account avatar"
          width={30}
          height={30}
          className="rounded-badge"
        />
      </div>
      <MobileNavigation className="absolute top-[28px] right-0 max-[639px]:top-[20px]" />
    </header>
  );
}
