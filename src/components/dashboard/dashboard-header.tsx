import Image from "next/image";

const assetRoot = "/assets/dashboard";

export function DashboardHeader() {
  return (
    <header
      data-slot="dashboard-header"
      className="col-span-2 flex h-[128px] items-center justify-between"
    >
      <div className="flex items-center gap-[15px]">
        <Image
          src={`${assetRoot}/icons/header/arrow-back.svg`}
          alt=""
          width={30}
          height={30}
          aria-hidden="true"
        />
        <h1 className="text-[30px]/[1] font-semibold tracking-[1px] text-text-page-title">
          Live Scores
        </h1>
      </div>

      <div
        aria-label="Dashboard utilities"
        className="flex items-center gap-[20px]"
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
    </header>
  );
}
