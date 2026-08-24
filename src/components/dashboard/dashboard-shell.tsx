const cardPlaceholderClass =
  "relative overflow-hidden bg-surface shadow-card";

const placeholderLabelClass =
  "absolute top-5 left-5 text-[12px]/[1] font-medium tracking-[0.5px] text-text-muted";

function HeaderPlaceholder() {
  return (
    <header
      data-slot="dashboard-header"
      className="col-span-2 flex items-center justify-between"
    >
      <h1 className="sr-only">Live Scores</h1>
      <div
        aria-hidden="true"
        className="flex items-center gap-5 text-[12px]/[1] text-text-muted"
      >
        <span className="size-[30px] rounded-full border border-text-muted/40" />
        <span className="h-[20px] w-[130px] rounded-badge bg-text-muted/25" />
      </div>
      <div aria-hidden="true" className="flex items-center gap-5">
        <span className="size-6 rounded-full border border-text-muted/40" />
        <span className="size-6 rounded-full border border-text-muted/40" />
        <span className="size-6 rounded-full border border-text-muted/40" />
        <span className="size-[30px] rounded-full bg-text-muted/25" />
      </div>
    </header>
  );
}

function SidebarPlaceholder() {
  return (
    <aside
      data-slot="dashboard-sidebar"
      aria-label="Dashboard sidebar"
      className="relative z-10 h-full w-full bg-sidebar-surface backdrop-blur-dashboard-sidebar"
    >
      <div
        data-slot="brand-placeholder"
        aria-hidden="true"
        className="absolute top-[40px] left-[40px] flex h-[30px] items-center gap-[15px]"
      >
        <span className="size-[30px] rounded-full bg-brand-green/25" />
        <span className="h-[20px] w-[100px] rounded-badge bg-text-brand/10" />
      </div>

      <nav
        aria-label="Dashboard navigation"
        className="absolute top-[120px] left-[40px] w-[205px]"
      >
        <ul aria-hidden="true" className="grid list-none gap-[30px] p-0">
          {Array.from({ length: 6 }, (_, index) => (
            <li key={index} className="flex h-[20px] items-center gap-[15px]">
              <span className="size-[20px] rounded-badge bg-text-disabled/25" />
              <span className="h-[12px] w-[120px] rounded-badge bg-text-disabled/20" />
            </li>
          ))}
        </ul>
      </nav>

      <section
        data-slot="upgrade-card"
        aria-labelledby="upgrade-placeholder-title"
        className="absolute top-[582px] left-[25px] h-[293px] w-[250px] overflow-hidden rounded-card bg-promo-surface"
      >
        <h2 id="upgrade-placeholder-title" className={placeholderLabelClass}>
          Upgrade card
        </h2>
      </section>
    </aside>
  );
}

function LeftDashboardColumn() {
  return (
    <div
      data-slot="dashboard-left-column"
      className="col-start-1 row-start-2 mt-px grid h-[771px] grid-rows-[200px_376px_170px_25px]"
    >
      <section
        data-slot="next-match-card"
        aria-labelledby="next-match-placeholder-title"
        className={`${cardPlaceholderClass} rounded-card`}
      >
        <h2
          id="next-match-placeholder-title"
          className={placeholderLabelClass}
        >
          Next Match
        </h2>
      </section>

      <section
        aria-labelledby="statistics-placeholder-title"
        className="grid grid-rows-[76px_300px]"
      >
        <h2
          id="statistics-placeholder-title"
          className="self-center text-[20px]/[1] font-bold tracking-[0.5px] text-text-heading"
        >
          Statistic
        </h2>
        <div className="grid grid-cols-[300px_330px] gap-x-[20px]">
          <article
            data-slot="year-statistic-card"
            aria-labelledby="year-statistic-placeholder-title"
            className={`${cardPlaceholderClass} rounded-card`}
          >
            <h3
              id="year-statistic-placeholder-title"
              className={placeholderLabelClass}
            >
              Year statistic
            </h3>
          </article>
          <article
            data-slot="global-statistic-card"
            aria-labelledby="global-statistic-placeholder-title"
            className={`${cardPlaceholderClass} rounded-card`}
          >
            <h3
              id="global-statistic-placeholder-title"
              className={placeholderLabelClass}
            >
              Global statistic
            </h3>
          </article>
        </div>
      </section>

      <section
        aria-labelledby="rankings-placeholder-title"
        className="grid grid-rows-[70px_100px]"
      >
        <h2
          id="rankings-placeholder-title"
          className="self-center text-[20px]/[1] font-bold tracking-[0.5px] text-text-heading"
        >
          Rankings
        </h2>
        <div className="grid grid-cols-[repeat(3,200px)] gap-x-[25px]">
          <article
            data-slot="singles-ranking-card"
            aria-labelledby="singles-ranking-placeholder-title"
            className={`${cardPlaceholderClass} rounded-ranking-card`}
          >
            <h3
              id="singles-ranking-placeholder-title"
              className={placeholderLabelClass}
            >
              Singles ranking
            </h3>
          </article>
          <article
            data-slot="doubles-ranking-card"
            aria-labelledby="doubles-ranking-placeholder-title"
            className={`${cardPlaceholderClass} rounded-ranking-card`}
          >
            <h3
              id="doubles-ranking-placeholder-title"
              className={placeholderLabelClass}
            >
              Doubles ranking
            </h3>
          </article>
          <article
            data-slot="mixed-ranking-card"
            aria-labelledby="mixed-ranking-placeholder-title"
            className={`${cardPlaceholderClass} rounded-ranking-card`}
          >
            <h3
              id="mixed-ranking-placeholder-title"
              className={placeholderLabelClass}
            >
              Mixed Doubles ranking
            </h3>
          </article>
        </div>
      </section>
    </div>
  );
}

function RightDashboardColumn() {
  return (
    <div
      data-slot="dashboard-right-column"
      className="col-start-2 row-start-2 grid h-[772px] w-[400px] min-w-0 grid-cols-[400px] grid-rows-[505px_22px_220px_25px]"
    >
      <section
        data-slot="player-profile-card"
        aria-labelledby="profile-placeholder-title"
        className={`${cardPlaceholderClass} rounded-card shadow-profile`}
      >
        <h2 id="profile-placeholder-title" className={placeholderLabelClass}>
          Player profile
        </h2>
      </section>
      <section
        data-slot="latest-scores-card"
        aria-labelledby="latest-scores-placeholder-title"
        className={`${cardPlaceholderClass} row-start-3 ml-px w-[400px] rounded-card`}
      >
        <h2
          id="latest-scores-placeholder-title"
          className={placeholderLabelClass}
        >
          Latest Scores
        </h2>
      </section>
    </div>
  );
}

export function DashboardShell() {
  return (
    <div
      data-slot="dashboard-frame"
      className="relative isolate grid h-svh min-h-[900px] w-full min-w-[1440px] grid-cols-[300px_minmax(1140px,1fr)] bg-frame-tint backdrop-blur-dashboard-frame"
    >
      <SidebarPlaceholder />
      <main
        id="dashboard-content"
        data-slot="dashboard-content"
        tabIndex={-1}
        className="grid h-full w-full grid-cols-[650px_400px] grid-rows-[128px_772px] gap-x-[20px] pr-[40px] pl-[30px]"
      >
        <HeaderPlaceholder />
        <LeftDashboardColumn />
        <RightDashboardColumn />
      </main>
    </div>
  );
}
