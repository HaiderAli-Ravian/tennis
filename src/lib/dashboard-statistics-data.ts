export interface MonthlyStatistic {
  readonly month: string;
  readonly upperValue: number;
  readonly lowerValue: number;
  readonly segmentGap: number;
}

export interface YearStatisticsDataset {
  readonly year: number;
  readonly maxValue: number;
  readonly maxSegmentHeight: number;
  readonly baselineY: number;
  readonly months: readonly MonthlyStatistic[];
}

export interface GlobalStatisticSegment {
  readonly key: "purple" | "pink" | "orange";
  readonly percentage: number;
}

export const yearStatisticsData: YearStatisticsDataset = {
  year: 2019,
  maxValue: 100,
  maxSegmentHeight: 83,
  baselineY: 161,
  months: [
    { month: "01", upperValue: 28, lowerValue: 84, segmentGap: 6 },
    { month: "02", upperValue: 100, lowerValue: 61, segmentGap: 7 },
    { month: "03", upperValue: 70, lowerValue: 83, segmentGap: 6 },
    { month: "04", upperValue: 20, lowerValue: 89, segmentGap: 6 },
    { month: "05", upperValue: 76, lowerValue: 95, segmentGap: 7 },
    { month: "06", upperValue: 39, lowerValue: 75, segmentGap: 6 },
    { month: "07", upperValue: 66, lowerValue: 96, segmentGap: 6 },
    { month: "08", upperValue: 40, lowerValue: 83, segmentGap: 6 },
    { month: "09", upperValue: 92, lowerValue: 40, segmentGap: 7 },
    { month: "10", upperValue: 75, lowerValue: 75, segmentGap: 6 },
    { month: "11", upperValue: 66, lowerValue: 60, segmentGap: 7 },
    { month: "12", upperValue: 92, lowerValue: 88, segmentGap: 7 },
  ],
};

export const yearStatisticsDatasets: readonly YearStatisticsDataset[] = [
  {
    year: 2017,
    maxValue: 100,
    maxSegmentHeight: 83,
    baselineY: 161,
    months: [
      { month: "01", upperValue: 12, lowerValue: 24, segmentGap: 6 },
      { month: "02", upperValue: 18, lowerValue: 28, segmentGap: 7 },
      { month: "03", upperValue: 16, lowerValue: 34, segmentGap: 6 },
      { month: "04", upperValue: 24, lowerValue: 37, segmentGap: 6 },
      { month: "05", upperValue: 28, lowerValue: 42, segmentGap: 7 },
      { month: "06", upperValue: 34, lowerValue: 45, segmentGap: 6 },
      { month: "07", upperValue: 39, lowerValue: 49, segmentGap: 6 },
      { month: "08", upperValue: 43, lowerValue: 53, segmentGap: 6 },
      { month: "09", upperValue: 48, lowerValue: 56, segmentGap: 7 },
      { month: "10", upperValue: 54, lowerValue: 60, segmentGap: 6 },
      { month: "11", upperValue: 58, lowerValue: 64, segmentGap: 7 },
      { month: "12", upperValue: 64, lowerValue: 68, segmentGap: 7 },
    ],
  },
  {
    year: 2018,
    maxValue: 100,
    maxSegmentHeight: 83,
    baselineY: 161,
    months: [
      { month: "01", upperValue: 88, lowerValue: 38, segmentGap: 6 },
      { month: "02", upperValue: 20, lowerValue: 72, segmentGap: 7 },
      { month: "03", upperValue: 82, lowerValue: 32, segmentGap: 6 },
      { month: "04", upperValue: 26, lowerValue: 78, segmentGap: 6 },
      { month: "05", upperValue: 94, lowerValue: 42, segmentGap: 7 },
      { month: "06", upperValue: 18, lowerValue: 68, segmentGap: 6 },
      { month: "07", upperValue: 76, lowerValue: 35, segmentGap: 6 },
      { month: "08", upperValue: 30, lowerValue: 82, segmentGap: 6 },
      { month: "09", upperValue: 90, lowerValue: 40, segmentGap: 7 },
      { month: "10", upperValue: 22, lowerValue: 74, segmentGap: 6 },
      { month: "11", upperValue: 84, lowerValue: 36, segmentGap: 7 },
      { month: "12", upperValue: 28, lowerValue: 88, segmentGap: 7 },
    ],
  },
  yearStatisticsData,
  {
    year: 2020,
    maxValue: 100,
    maxSegmentHeight: 83,
    baselineY: 161,
    months: [
      { month: "01", upperValue: 96, lowerValue: 90, segmentGap: 6 },
      { month: "02", upperValue: 90, lowerValue: 86, segmentGap: 7 },
      { month: "03", upperValue: 84, lowerValue: 81, segmentGap: 6 },
      { month: "04", upperValue: 76, lowerValue: 74, segmentGap: 6 },
      { month: "05", upperValue: 69, lowerValue: 68, segmentGap: 7 },
      { month: "06", upperValue: 61, lowerValue: 62, segmentGap: 6 },
      { month: "07", upperValue: 54, lowerValue: 56, segmentGap: 6 },
      { month: "08", upperValue: 47, lowerValue: 50, segmentGap: 6 },
      { month: "09", upperValue: 39, lowerValue: 45, segmentGap: 7 },
      { month: "10", upperValue: 32, lowerValue: 39, segmentGap: 6 },
      { month: "11", upperValue: 25, lowerValue: 34, segmentGap: 7 },
      { month: "12", upperValue: 18, lowerValue: 28, segmentGap: 7 },
    ],
  },
  {
    year: 2021,
    maxValue: 100,
    maxSegmentHeight: 83,
    baselineY: 161,
    months: [
      { month: "01", upperValue: 28, lowerValue: 35, segmentGap: 6 },
      { month: "02", upperValue: 38, lowerValue: 46, segmentGap: 7 },
      { month: "03", upperValue: 52, lowerValue: 58, segmentGap: 6 },
      { month: "04", upperValue: 70, lowerValue: 72, segmentGap: 6 },
      { month: "05", upperValue: 88, lowerValue: 84, segmentGap: 7 },
      { month: "06", upperValue: 72, lowerValue: 66, segmentGap: 6 },
      { month: "07", upperValue: 48, lowerValue: 44, segmentGap: 6 },
      { month: "08", upperValue: 24, lowerValue: 30, segmentGap: 6 },
      { month: "09", upperValue: 36, lowerValue: 42, segmentGap: 7 },
      { month: "10", upperValue: 58, lowerValue: 62, segmentGap: 6 },
      { month: "11", upperValue: 78, lowerValue: 76, segmentGap: 7 },
      { month: "12", upperValue: 94, lowerValue: 90, segmentGap: 7 },
    ],
  },
];

export const globalStatisticsData = {
  wins: 23,
  segments: [
    { key: "purple", percentage: 31 },
    { key: "pink", percentage: 19 },
    { key: "orange", percentage: 25 },
  ] satisfies readonly GlobalStatisticSegment[],
} as const;
