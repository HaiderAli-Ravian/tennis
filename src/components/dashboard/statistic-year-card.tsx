"use client";

import Image from "next/image";
import { useState } from "react";

import {
  type YearStatisticsDataset,
  yearStatisticsDatasets,
} from "@/lib/dashboard-statistics-data";

const initialYearIndex = yearStatisticsDatasets.findIndex(
  (dataset) => dataset.year === 2019,
);

function clamp(value: number, minimum: number, maximum: number) {
  return Math.min(Math.max(value, minimum), maximum);
}

function getMonthlyBarGeometry(
  dataset: YearStatisticsDataset,
  upperValue: number,
  lowerValue: number,
  segmentGap: number,
) {
  const scale = dataset.maxSegmentHeight / dataset.maxValue;
  const upperHeight = Math.round(
    clamp(upperValue, 0, dataset.maxValue) * scale,
  );
  const lowerHeight = Math.round(
    clamp(lowerValue, 0, dataset.maxValue) * scale,
  );
  const lowerY = dataset.baselineY - lowerHeight;
  const upperY = Math.max(0, lowerY - segmentGap - upperHeight);

  return { upperHeight, lowerHeight, upperY, lowerY };
}

function YearStatisticsChart({ dataset }: { dataset: YearStatisticsDataset }) {
  return (
    <svg
      key={dataset.year}
      viewBox="0 0 230 180"
      role="img"
      aria-labelledby="year-chart-title year-chart-description"
      className="absolute top-[100px] left-1/2 h-[180px] w-[230px] -translate-x-1/2"
    >
      <title id="year-chart-title">{dataset.year} monthly performance</title>
      <desc id="year-chart-description">
        Twelve monthly bars comparing two performance measures.
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
      {dataset.months.map((bar, index) => {
        const x = 8 + index * 19;
        const geometry = getMonthlyBarGeometry(
          dataset,
          bar.upperValue,
          bar.lowerValue,
          bar.segmentGap,
        );

        return (
          <g key={bar.month}>
            <rect
              x={x + 1}
              y="0"
              width="3"
              height={dataset.baselineY}
              rx="1.5"
              fill="var(--color-chart-track)"
            />
            <rect
              x={x}
              y={geometry.upperY}
              width="5"
              height={geometry.upperHeight}
              rx="2.5"
              fill="url(#year-purple)"
              className="chart-bar-reveal"
              style={{ animationDelay: `${140 + index * 45}ms` }}
            />
            <rect
              x={x}
              y={geometry.lowerY}
              width="5"
              height={geometry.lowerHeight}
              rx="2.5"
              fill="url(#year-pink)"
              className="chart-bar-reveal"
              style={{ animationDelay: `${index * 45}ms` }}
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

export function StatisticYearCard() {
  const [selectedYearIndex, setSelectedYearIndex] = useState(
    Math.max(initialYearIndex, 0),
  );
  const dataset = yearStatisticsDatasets[selectedYearIndex];
  const hasPreviousYear = selectedYearIndex > 0;
  const hasNextYear = selectedYearIndex < yearStatisticsDatasets.length - 1;

  return (
    <article
      data-slot="year-statistic-card"
      aria-labelledby="year-statistic-title"
      className="relative h-[300px] overflow-hidden rounded-card bg-surface shadow-card"
    >
      <div className="absolute top-[39px] right-[34px] left-[34px] flex items-center justify-between text-[20px]/[1] font-normal text-text-primary">
        <button
          type="button"
          aria-label="Show previous year statistics"
          disabled={!hasPreviousYear}
          onClick={() => setSelectedYearIndex((index) => index - 1)}
          className="flex size-[42px] cursor-pointer items-center justify-center rounded-full transition-colors hover:bg-page/70 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent disabled:cursor-not-allowed disabled:opacity-30"
        >
          <Image
            src="/assets/dashboard/icons/statistic/arrow-left.svg"
            alt=""
            width={20}
            height={20}
            aria-hidden="true"
          />
        </button>
        <h3
          key={dataset.year}
          id="year-statistic-title"
          aria-live="polite"
          className="chart-value-reveal text-[20px]/[1] font-medium tracking-[0.5px]"
        >
          {dataset.year}
        </h3>
        <button
          type="button"
          aria-label="Show next year statistics"
          disabled={!hasNextYear}
          onClick={() => setSelectedYearIndex((index) => index + 1)}
          className="flex size-[42px] cursor-pointer items-center justify-center rounded-full transition-colors hover:bg-page/70 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent disabled:cursor-not-allowed disabled:opacity-30"
        >
          <Image
            src="/assets/dashboard/icons/statistic/arrow-right.svg"
            alt=""
            width={16}
            height={7}
            aria-hidden="true"
          />
        </button>
      </div>
      <YearStatisticsChart dataset={dataset} />
    </article>
  );
}
