const monthlyBars = [
  { month: "01", purpleY: 62, purpleH: 23, pinkY: 91, pinkH: 70 },
  { month: "02", purpleY: 20, purpleH: 83, pinkY: 110, pinkH: 51 },
  { month: "03", purpleY: 28, purpleH: 58, pinkY: 92, pinkH: 69 },
  { month: "04", purpleY: 64, purpleH: 17, pinkY: 87, pinkH: 74 },
  { month: "05", purpleY: 12, purpleH: 63, pinkY: 82, pinkH: 79 },
  { month: "06", purpleY: 61, purpleH: 32, pinkY: 99, pinkH: 62 },
  { month: "07", purpleY: 20, purpleH: 55, pinkY: 81, pinkH: 80 },
  { month: "08", purpleY: 53, purpleH: 33, pinkY: 92, pinkH: 69 },
  { month: "09", purpleY: 45, purpleH: 76, pinkY: 128, pinkH: 33 },
  { month: "10", purpleY: 31, purpleH: 62, pinkY: 99, pinkH: 62 },
  { month: "11", purpleY: 49, purpleH: 55, pinkY: 111, pinkH: 50 },
  { month: "12", purpleY: 5, purpleH: 76, pinkY: 88, pinkH: 73 },
] as const;

function YearStatisticsChart() {
  return (
    <svg
      viewBox="0 0 230 180"
      role="img"
      aria-labelledby="year-chart-title year-chart-description"
      className="absolute top-[100px] left-1/2 h-[180px] w-[230px] -translate-x-1/2"
    >
      <title id="year-chart-title">2019 monthly performance</title>
      <desc id="year-chart-description">
        Twelve static monthly bars comparing two performance measures.
      </desc>
      <defs>
        <linearGradient id="year-purple" x1="0" y1="0" x2="0" y2="1">
          <stop stopColor="var(--color-year-purple-start)" />
          <stop offset="1" stopColor="var(--color-year-purple-end)" />
        </linearGradient>
        <linearGradient id="year-pink" x1="0" y1="0" x2="0" y2="1">
          <stop stopColor="var(--color-year-pink-start)" />
          <stop offset="1" stopColor="var(--color-year-pink-end)" />
        </linearGradient>
      </defs>
      {monthlyBars.map((bar, index) => {
        const x = 8 + index * 19;

        return (
          <g key={bar.month}>
            <rect
              x={x + 1}
              y="0"
              width="3"
              height="161"
              rx="1.5"
              fill="var(--color-chart-track)"
            />
            <rect
              x={x}
              y={bar.purpleY}
              width="5"
              height={bar.purpleH}
              rx="2.5"
              fill="url(#year-purple)"
            />
            <rect
              x={x}
              y={bar.pinkY}
              width="5"
              height={bar.pinkH}
              rx="2.5"
              fill="url(#year-pink)"
            />
            <text
              x={x + 2.5}
              y="178"
              textAnchor="middle"
              fontSize="10"
              letterSpacing="0.5"
              fill="var(--color-text-muted)"
            >
              {bar.month}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

function StatisticYearCard() {
  return (
    <article
      data-slot="year-statistic-card"
      aria-labelledby="year-statistic-title"
      className="relative overflow-hidden rounded-card bg-surface shadow-card"
    >
      <div className="absolute top-[50px] right-[45px] left-[45px] flex items-center justify-between text-[20px]/[1] font-normal text-text-primary">
        <span aria-hidden="true">←</span>
        <h3 id="year-statistic-title" className="text-[20px]/[1] font-medium tracking-[0.5px]">
          2019
        </h3>
        <span aria-hidden="true">→</span>
      </div>
      <YearStatisticsChart />
    </article>
  );
}

function GlobalStatisticDonut() {
  return (
    <div className="absolute top-[63px] left-1/2 h-[220px] w-[220px] -translate-x-1/2">
      <svg
        viewBox="0 0 220 220"
        role="img"
        aria-labelledby="donut-title donut-description"
        className="size-full"
      >
        <title id="donut-title">Global win statistics</title>
        <desc id="donut-description">23 wins, representing 75 percent.</desc>
        <defs>
          <linearGradient
            id="donut-purple"
            x1="110"
            y1="10"
            x2="190"
            y2="180"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="var(--color-donut-purple-start)" />
            <stop offset="1" stopColor="var(--color-donut-purple-end)" />
          </linearGradient>
          <linearGradient
            id="donut-pink"
            x1="200"
            y1="125"
            x2="105"
            y2="210"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="var(--color-donut-pink-start)" />
            <stop offset="0.14" stopColor="var(--color-donut-pink-end)" />
            <stop offset="1" stopColor="var(--color-donut-pink-end)" />
          </linearGradient>
          <linearGradient
            id="donut-orange"
            x1="105"
            y1="205"
            x2="15"
            y2="110"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="var(--color-donut-orange-start)" />
            <stop offset="1" stopColor="var(--color-donut-orange-end)" />
          </linearGradient>
        </defs>
        <circle
          cx="110"
          cy="110"
          r="77.5"
          fill="none"
          stroke="var(--color-chart-track)"
          strokeWidth="45"
        />
        <path
          d="M110 10 A100 100 0 0 1 203.969 144.202 L161.683 128.811 A55 55 0 0 0 110 55 Z"
          fill="url(#donut-purple)"
        />
        <path
          d="M203.969 144.202 A100 100 0 0 1 110 210 L110 165 A55 55 0 0 0 161.683 128.811 Z"
          fill="url(#donut-pink)"
        />
        <path
          d="M110 210 A100 100 0 0 1 10 110 L55 110 A55 55 0 0 0 110 165 Z"
          fill="url(#donut-orange)"
        />
        <circle cx="110" cy="32.5" r="22.5" fill="url(#donut-purple)" />
        <circle cx="32.5" cy="110" r="22.5" fill="url(#donut-orange)" />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center pt-[4px]">
        <span className="text-[20px]/[1] font-bold tracking-[0.5px] text-text-primary">
          23 Wins
        </span>
        <span className="mt-[10px] text-[15px]/[1] font-normal tracking-[0.5px] text-text-muted">
          (75%)
        </span>
      </div>
    </div>
  );
}

function GlobalStatisticCard() {
  return (
    <article
      data-slot="global-statistic-card"
      aria-labelledby="global-statistic-title"
      className="relative overflow-hidden rounded-card bg-surface shadow-card"
    >
      <h3
        id="global-statistic-title"
        className="absolute top-[30px] left-0 w-full text-center text-[20px]/[1] font-medium tracking-[0.5px] text-text-primary"
      >
        Global Statistic
      </h3>
      <GlobalStatisticDonut />
      <div aria-hidden="true" className="absolute bottom-[12px] left-0 flex w-full justify-center gap-[35px]">
        <span className="size-[10px] bg-[linear-gradient(135deg,var(--color-donut-purple-start),var(--color-donut-purple-end))]" />
        <span className="size-[10px] bg-[linear-gradient(135deg,var(--color-donut-pink-start),var(--color-donut-pink-end))]" />
        <span className="size-[10px] bg-[linear-gradient(135deg,var(--color-donut-orange-start),var(--color-donut-orange-end))]" />
      </div>
    </article>
  );
}

export function StatisticsSection() {
  return (
    <section aria-labelledby="statistics-title" className="grid grid-rows-[76px_300px]">
      <h2
        id="statistics-title"
        className="self-center text-[20px]/[1] font-bold tracking-[0.5px] text-text-heading"
      >
        Statistic
      </h2>
      <div className="grid grid-cols-[minmax(300px,10fr)_minmax(330px,11fr)] gap-x-[20px]">
        <StatisticYearCard />
        <GlobalStatisticCard />
      </div>
    </section>
  );
}
