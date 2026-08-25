import type { CSSProperties } from "react";

import { globalStatisticsData } from "@/lib/dashboard-statistics-data";

import { StatisticYearCard } from "./statistic-year-card";

const donutPalette = {
  purple: {
    fill: "url(#donut-purple)",
    legend:
      "linear-gradient(142.62deg,var(--color-donut-purple-start) -43.31%,var(--color-donut-purple-end) 129.93%)",
  },
  pink: {
    fill: "url(#donut-pink)",
    legend:
      "linear-gradient(135deg,var(--color-donut-pink-start) 0%,var(--color-donut-pink-end) 100%)",
  },
  orange: {
    fill: "url(#donut-orange)",
    legend:
      "linear-gradient(135deg,var(--color-donut-orange-start) -50%,var(--color-donut-orange-end) 150%)",
  },
} as const;

const donutGeometry = {
  center: 110,
  outerRadius: 100,
  innerRadius: 55,
  endCornerRadius: 10,
  startAngle: -90,
} as const;

function pointOnCircle(radius: number, angleInDegrees: number) {
  const radians = (angleInDegrees * Math.PI) / 180;

  return {
    x: donutGeometry.center + radius * Math.cos(radians),
    y: donutGeometry.center + radius * Math.sin(radians),
  };
}

function getAnnularSectorPath(
  startAngle: number,
  sweepAngle: number,
  roundStart = false,
  roundEnd = false,
) {
  const endAngle = startAngle + sweepAngle;
  const cornerRadius = donutGeometry.endCornerRadius;
  const angleForRadius = (radius: number) =>
    (cornerRadius / radius) * (180 / Math.PI);
  const point = (radius: number, angle: number) => {
    const { x, y } = pointOnCircle(radius, angle);

    return `${x} ${y}`;
  };
  const outerStartAngle =
    startAngle + (roundStart ? angleForRadius(donutGeometry.outerRadius) : 0);
  const outerEndAngle =
    endAngle - (roundEnd ? angleForRadius(donutGeometry.outerRadius) : 0);
  const innerEndAngle =
    endAngle - (roundEnd ? angleForRadius(donutGeometry.innerRadius) : 0);
  const innerStartAngle =
    startAngle + (roundStart ? angleForRadius(donutGeometry.innerRadius) : 0);
  const largeArcFlag = sweepAngle > 180 ? 1 : 0;

  return [
    `M ${point(donutGeometry.outerRadius - (roundStart ? cornerRadius : 0), startAngle)}`,
    roundStart &&
      `Q ${point(donutGeometry.outerRadius, startAngle)} ${point(donutGeometry.outerRadius, outerStartAngle)}`,
    `A ${donutGeometry.outerRadius} ${donutGeometry.outerRadius} 0 ${largeArcFlag} 1 ${point(donutGeometry.outerRadius, outerEndAngle)}`,
    roundEnd &&
      `Q ${point(donutGeometry.outerRadius, endAngle)} ${point(donutGeometry.outerRadius - cornerRadius, endAngle)}`,
    `L ${point(donutGeometry.innerRadius + (roundEnd ? cornerRadius : 0), endAngle)}`,
    roundEnd &&
      `Q ${point(donutGeometry.innerRadius, endAngle)} ${point(donutGeometry.innerRadius, innerEndAngle)}`,
    `A ${donutGeometry.innerRadius} ${donutGeometry.innerRadius} 0 ${largeArcFlag} 0 ${point(donutGeometry.innerRadius, innerStartAngle)}`,
    roundStart &&
      `Q ${point(donutGeometry.innerRadius, startAngle)} ${point(donutGeometry.innerRadius + cornerRadius, startAngle)}`,
    "Z",
  ]
    .filter(Boolean)
    .join(" ");
}

function GlobalStatisticDonut() {
  const sectors = globalStatisticsData.segments.map((segment, index, items) => {
    const previousPercentage = items
      .slice(0, index)
      .reduce((total, item) => total + item.percentage, 0);
    const startAngle =
      donutGeometry.startAngle + (previousPercentage / 100) * 360;
    const sweepAngle = (segment.percentage / 100) * 360;

    return {
      ...segment,
      path: getAnnularSectorPath(
        startAngle,
        sweepAngle,
        index === 0,
        index === items.length - 1,
      ),
    };
  });
  const displayedPercentage = globalStatisticsData.segments.reduce(
    (total, segment) => total + segment.percentage,
    0,
  );
  const winRate = Math.round(displayedPercentage);
  const revealStyle = {
    "--donut-reveal-progress": displayedPercentage / 100,
  } as CSSProperties;

  return (
    <div className="absolute top-[63px] left-1/2 h-[220px] w-[220px] -translate-x-1/2">
      <svg
        viewBox="0 0 220 220"
        role="img"
        aria-labelledby="donut-title donut-description"
        className="size-full"
      >
        <title id="donut-title">Global win statistics</title>
        <desc id="donut-description">
          {globalStatisticsData.wins} wins, representing {winRate} percent.
        </desc>
        <defs>
          <linearGradient
            id="donut-purple"
            x1="-46.836"
            y1="-95.282"
            x2="244.347"
            y2="285.846"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="var(--color-donut-purple-start)" />
            <stop offset="1" stopColor="var(--color-donut-purple-end)" />
          </linearGradient>
          <linearGradient
            id="donut-pink"
            x1="0"
            y1="0"
            x2="220"
            y2="220"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="var(--color-donut-pink-start)" />
            <stop offset="1" stopColor="var(--color-donut-pink-end)" />
          </linearGradient>
          <linearGradient
            id="donut-orange"
            x1="-110"
            y1="-110"
            x2="330"
            y2="330"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="var(--color-donut-orange-start)" />
            <stop offset="1" stopColor="var(--color-donut-orange-end)" />
          </linearGradient>
          <mask
            id="donut-reveal-mask"
            x="0"
            y="0"
            width="220"
            height="220"
            maskUnits="userSpaceOnUse"
          >
            <circle
              cx="110"
              cy="110"
              r="77.5"
              pathLength="1"
              fill="none"
              stroke="white"
              strokeWidth="47"
              strokeLinecap="round"
              transform="rotate(-90 110 110)"
              className="donut-chart-reveal"
              style={revealStyle}
            />
          </mask>
        </defs>
        <circle
          cx="110"
          cy="110"
          r="77.5"
          fill="none"
          stroke="var(--color-chart-track)"
          strokeWidth="30"
        />
        <g mask="url(#donut-reveal-mask)">
          {sectors.map((sector) => (
            <path
              key={sector.key}
              d={sector.path}
              fill={donutPalette[sector.key].fill}
            />
          ))}
        </g>
      </svg>
      <div className="chart-value-reveal absolute inset-0 flex flex-col items-center justify-center pt-[4px]">
        <span className="text-[20px]/[1] font-bold tracking-[0.5px] text-text-primary">
          {globalStatisticsData.wins} Wins
        </span>
        <span className="mt-[10px] text-[15px]/[1] font-normal tracking-[0.5px] text-text-muted">
          ({winRate}%)
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
      className="relative h-[300px] overflow-hidden rounded-card bg-surface shadow-card"
    >
      <h3
        id="global-statistic-title"
        className="absolute top-[30px] left-0 w-full text-center text-[20px]/[1] font-medium tracking-[0.5px] text-text-primary"
      >
        Global Statistic
      </h3>
      <GlobalStatisticDonut />
      <div aria-hidden="true" className="chart-legend-reveal absolute bottom-[12px] left-0 flex w-full justify-center gap-[35px]">
        {globalStatisticsData.segments.map((segment) => (
          <span
            key={segment.key}
            className="size-[10px]"
            style={{ background: donutPalette[segment.key].legend }}
          />
        ))}
      </div>
    </article>
  );
}

export function StatisticsSection() {
  return (
    <section
      aria-labelledby="statistics-title"
      className="grid grid-rows-[76px_300px] max-[639px]:grid-rows-[60px_auto]"
    >
      <h2
        id="statistics-title"
        className="self-center text-[20px]/[1] font-bold tracking-[0.5px] text-text-heading"
      >
        Statistic
      </h2>
      <div className="grid grid-cols-[minmax(300px,10fr)_minmax(330px,11fr)] gap-x-[20px] max-[639px]:grid-cols-1 max-[639px]:gap-y-[16px]">
        <StatisticYearCard />
        <GlobalStatisticCard />
      </div>
    </section>
  );
}
