"use client";

import Image from "next/image";
import { type KeyboardEvent, useState } from "react";

import {
  latestScoresData,
  scoreCategories,
  type ScoreCategory,
} from "@/lib/latest-scores-data";

const assetRoot = "/assets/dashboard";

export function LatestScoresCard() {
  const [selectedCategory, setSelectedCategory] =
    useState<ScoreCategory>("singles");
  const selectedMatch = latestScoresData[selectedCategory];

  function selectAdjacentTab(event: KeyboardEvent<HTMLButtonElement>) {
    const currentIndex = scoreCategories.indexOf(selectedCategory);
    let nextIndex = currentIndex;

    if (event.key === "ArrowRight") {
      nextIndex = (currentIndex + 1) % scoreCategories.length;
    } else if (event.key === "ArrowLeft") {
      nextIndex =
        (currentIndex - 1 + scoreCategories.length) % scoreCategories.length;
    } else if (event.key === "Home") {
      nextIndex = 0;
    } else if (event.key === "End") {
      nextIndex = scoreCategories.length - 1;
    } else {
      return;
    }

    event.preventDefault();
    const nextCategory = scoreCategories[nextIndex];
    setSelectedCategory(nextCategory);
    requestAnimationFrame(() => {
      document.getElementById(`score-tab-${nextCategory}`)?.focus();
    });
  }

  return (
    <section
      data-slot="latest-scores-card"
      aria-labelledby="latest-scores-title"
      className="relative ml-px h-[220px] w-[calc(100%-1px)] overflow-hidden rounded-card bg-surface shadow-card max-[639px]:h-[240px]"
    >
      <div className="absolute top-[25px] right-[20px] left-[20px] flex items-center justify-between">
        <h2
          id="latest-scores-title"
          className="text-[20px]/[1] font-medium tracking-[0.5px] text-text-primary max-[639px]:text-[18px]"
        >
          Latest Scores
        </h2>
        <span className="text-[15px]/[1] font-semibold tracking-[0.5px] text-link">
          View All
        </span>
      </div>

      <div
        role="tablist"
        aria-label="Latest score category"
        className="absolute top-[60px] left-[20px] flex items-center gap-[15px] max-[639px]:right-[16px] max-[639px]:left-[16px] max-[639px]:justify-between max-[639px]:gap-[8px]"
      >
        {scoreCategories.map((category) => {
          const match = latestScoresData[category];
          const isSelected = category === selectedCategory;

          return (
            <button
              key={category}
              id={`score-tab-${category}`}
              type="button"
              role="tab"
              aria-selected={isSelected}
              aria-controls="latest-score-panel"
              tabIndex={isSelected ? 0 : -1}
              onClick={() => setSelectedCategory(category)}
              onKeyDown={selectAdjacentTab}
              className={`score-category-tab cursor-pointer rounded-badge tracking-[0.5px] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${
                isSelected
                  ? "bg-tab-active-bg font-medium text-tab-active-text"
                  : "font-normal text-text-muted hover:text-tab-active-text"
              }`}
            >
              {match.label}
            </button>
          );
        })}
      </div>

      <div
        key={selectedCategory}
        id="latest-score-panel"
        role="tabpanel"
        aria-labelledby={`score-tab-${selectedCategory}`}
        className="score-tab-content-reveal"
      >
        <div className="absolute top-[100px] right-[20px] left-[20px] flex items-center max-[639px]:right-[16px] max-[639px]:left-[16px]">
          <Image
            src={`${assetRoot}/icons/scores/player-outline.svg`}
            alt=""
            width={20}
            height={20}
            aria-hidden="true"
          />
          <span className="ml-[10px] min-w-0 truncate text-[15px]/[1] font-normal tracking-[0.5px] text-text-strong max-[639px]:text-[12px]">
            {selectedMatch.tournament}
          </span>
          <Image
            src={`${assetRoot}/icons/scores/star-outline.svg`}
            alt="Favorite"
            width={20}
            height={20}
            className="ml-auto shrink-0"
          />
        </div>

        <div className="absolute top-[142px] right-[15px] left-[25px] grid grid-cols-[minmax(0,1fr)_35px_35px_35px_50px] items-center gap-y-[14px] text-[15px]/[1] tracking-[0.5px] text-text-strong max-[639px]:top-[150px] max-[639px]:right-[16px] max-[639px]:left-[16px] max-[639px]:grid-cols-[minmax(0,1fr)_28px_28px_28px_44px] max-[639px]:text-[12px]">
          {selectedMatch.competitors.map((competitor) => (
            <div key={competitor.name} className="contents">
              <span
                className={`truncate pr-[5px] ${competitor.winner ? "font-semibold" : "font-normal"}`}
                title={competitor.name}
              >
                {competitor.name}
              </span>
              {competitor.scores.map((score, index) => (
                <span
                  key={`${competitor.name}-${index}`}
                  className={`text-center ${index === 0 ? "font-semibold" : "font-normal"}`}
                >
                  {score}
                </span>
              ))}
              {competitor.winner ? (
                <span className="flex h-[25px] items-center justify-center rounded-badge bg-win-bg font-semibold text-win-text">
                  WIN
                </span>
              ) : (
                <span />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
