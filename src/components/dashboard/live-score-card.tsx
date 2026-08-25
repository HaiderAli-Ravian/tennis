"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

import type { LiveScoreResponse } from "@/types/live-score";

const assetRoot = "/assets/dashboard";

function isLiveScoreResponse(value: unknown): value is LiveScoreResponse {
  if (!value || typeof value !== "object" || !("match" in value)) {
    return false;
  }

  const match = (value as { match?: unknown }).match;

  return Boolean(
    match &&
      typeof match === "object" &&
      "cardLabel" in match &&
      typeof match.cardLabel === "string" &&
      "statusLabel" in match &&
      typeof match.statusLabel === "string" &&
      "players" in match &&
      Array.isArray(match.players) &&
      match.players.length === 2,
  );
}

function MatchLoadingState() {
  return (
    <div aria-hidden="true">
      <div className="absolute top-[24px] right-[25px] flex items-center gap-[10px] max-[639px]:top-[56px] max-[639px]:right-[16px]">
        <span className="h-[10px] w-[94px] rounded-full bg-text-muted/35" />
        <span className="size-[15px] rounded-[4px] bg-text-muted/25" />
      </div>
      <div className="absolute top-[70px] right-[50px] left-[50px] grid grid-cols-[minmax(150px,1fr)_85px_40px_85px_minmax(150px,1fr)] items-center gap-[10px] max-[639px]:hidden">
        <div className="flex flex-col items-start gap-[10px]">
          <span className="h-[20px] w-[105px] rounded-full bg-text-primary/10" />
          <span className="h-[8px] w-[38px] rounded-full bg-text-muted/25" />
        </div>
        <span className="h-[100px] w-[85px] rounded-[15px_5px_15px_5px] bg-avatar-naomi-bg/55" />
        <span className="text-center text-[35px]/[0.65] font-semibold tracking-[1px] text-primary">
          :
        </span>
        <span className="h-[100px] w-[85px] rounded-[15px_5px_15px_5px] bg-avatar-anindita-bg/70" />
        <div className="flex flex-col items-start gap-[10px] pl-[5px]">
          <span className="h-[20px] w-[115px] rounded-full bg-text-primary/10" />
          <span className="h-[8px] w-[45px] rounded-full bg-text-muted/25" />
        </div>
      </div>
      <div className="absolute top-[92px] right-[20px] left-[20px] hidden grid-cols-[1fr_24px_1fr] items-start gap-[10px] max-[639px]:grid">
        {["naomi", "anindita"].map((player, index) => (
          <div
            key={player}
            className={`flex flex-col items-center gap-[9px] ${index === 0 ? "col-start-1" : "col-start-3"}`}
          >
            <span
              className={`h-[92px] w-[78px] rounded-[14px_5px_14px_5px] ${index === 0 ? "bg-avatar-naomi-bg/55" : "bg-avatar-anindita-bg/70"}`}
            />
            <span className="h-[15px] w-[88px] rounded-full bg-text-primary/10" />
            <span className="h-[7px] w-[42px] rounded-full bg-text-muted/25" />
          </div>
        ))}
        <span className="col-start-2 row-start-1 mt-[34px] text-center text-[28px]/[1] font-semibold text-primary">
          :
        </span>
      </div>
    </div>
  );
}

function MatchContent({ data }: { readonly data: LiveScoreResponse }) {
  const [leftPlayer, rightPlayer] = data.match.players;

  return (
    <>
      <div className="absolute top-[24px] right-[25px] flex items-center gap-[10px] text-[12px]/[1] font-normal tracking-[0.5px] text-text-muted max-[639px]:top-[56px] max-[639px]:right-[16px]">
        <span>{data.match.statusLabel}</span>
        <Image
          src={`${assetRoot}/icons/header/calendar.svg`}
          alt=""
          width={15}
          height={15}
          aria-hidden="true"
        />
      </div>

      <div className="absolute top-[70px] right-[50px] left-[50px] grid grid-cols-[minmax(150px,1fr)_85px_40px_85px_minmax(150px,1fr)] items-center gap-[10px] max-[639px]:hidden">
        <div className="flex flex-col items-start gap-[10px]">
          <span className="text-[25px]/[1] font-bold tracking-[0.5px] text-text-primary">
            {leftPlayer.displayName}
          </span>
          <span className="text-[10px]/[1] font-light tracking-[0.5px] text-text-muted">
            {leftPlayer.countryName}
          </span>
        </div>
        <div className="h-[100px] w-[85px] overflow-hidden rounded-[15px_5px_15px_5px] bg-avatar-naomi-bg">
          <Image
            src={leftPlayer.avatarSrc}
            alt={`${leftPlayer.displayName}, ${leftPlayer.countryName}`}
            width={85}
            height={100}
          />
        </div>
        <span
          aria-hidden="true"
          className="text-center text-[35px]/[0.65] font-semibold tracking-[1px] text-primary"
        >
          :
        </span>
        <div className="h-[100px] w-[85px] overflow-hidden rounded-[15px_5px_15px_5px] bg-avatar-anindita-bg">
          <Image
            src={rightPlayer.avatarSrc}
            alt={`${rightPlayer.displayName}, ${rightPlayer.countryName}`}
            width={85}
            height={100}
          />
        </div>
        <div className="flex flex-col items-start gap-[10px] pl-[5px]">
          <span className="whitespace-nowrap text-[25px]/[1] font-bold tracking-[0.5px] text-text-primary">
            {rightPlayer.displayName}
          </span>
          <span className="text-[10px]/[1] font-light tracking-[0.5px] text-text-muted">
            {rightPlayer.countryName}
          </span>
        </div>
      </div>

      <div className="absolute top-[90px] right-[18px] left-[18px] hidden grid-cols-[1fr_24px_1fr] items-start gap-[8px] max-[639px]:grid">
        <div className="flex flex-col items-center text-center">
          <div className="h-[92px] w-[78px] overflow-hidden rounded-[14px_5px_14px_5px] bg-avatar-naomi-bg">
            <Image
              src={leftPlayer.avatarSrc}
              alt={`${leftPlayer.displayName}, ${leftPlayer.countryName}`}
              width={78}
              height={92}
              className="h-[92px] w-[78px]"
            />
          </div>
          <span className="mt-[10px] text-[17px]/[1] font-bold tracking-[0.25px] text-text-primary">
            {leftPlayer.displayName}
          </span>
          <span className="mt-[7px] text-[10px]/[1] font-light tracking-[0.5px] text-text-muted">
            {leftPlayer.countryName}
          </span>
        </div>
        <span
          aria-hidden="true"
          className="mt-[34px] text-center text-[28px]/[1] font-semibold text-primary"
        >
          :
        </span>
        <div className="flex flex-col items-center text-center">
          <div className="h-[92px] w-[78px] overflow-hidden rounded-[14px_5px_14px_5px] bg-avatar-anindita-bg">
            <Image
              src={rightPlayer.avatarSrc}
              alt={`${rightPlayer.displayName}, ${rightPlayer.countryName}`}
              width={78}
              height={92}
              className="h-[92px] w-[78px]"
            />
          </div>
          <span className="mt-[10px] whitespace-nowrap text-[17px]/[1] font-bold tracking-[0.25px] text-text-primary">
            {rightPlayer.displayName}
          </span>
          <span className="mt-[7px] text-[10px]/[1] font-light tracking-[0.5px] text-text-muted">
            {rightPlayer.countryName}
          </span>
        </div>
      </div>
    </>
  );
}

export function LiveScoreCard() {
  const [data, setData] = useState<LiveScoreResponse | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [requestKey, setRequestKey] = useState(0);

  const retry = useCallback(() => {
    setData(null);
    setError(null);
    setRequestKey((value) => value + 1);
  }, []);

  useEffect(() => {
    const controller = new AbortController();

    async function loadScore() {
      try {
        const response = await fetch("/api/live-score", {
          cache: "no-store",
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error(`Live score request failed with ${response.status}`);
        }

        const payload: unknown = await response.json();

        if (!isLiveScoreResponse(payload)) {
          throw new Error("Live score response is invalid");
        }

        setData(payload);
      } catch (requestError) {
        if (controller.signal.aborted) {
          return;
        }

        setError(
          requestError instanceof Error
            ? requestError.message
            : "Unable to load the live score",
        );
      }
    }

    void loadScore();

    return () => controller.abort();
  }, [requestKey]);

  return (
    <section
      data-slot="next-match-card"
      aria-labelledby="next-match-title"
      aria-busy={!data && !error}
      className="relative overflow-hidden rounded-card bg-surface shadow-card"
    >
      <span role="status" aria-atomic="true" className="sr-only">
        {error
          ? ""
          : data
            ? `Live score loaded for ${data.match.players[0].displayName} and ${data.match.players[1].displayName}`
            : "Loading live score."}
      </span>
      <h2
        id="next-match-title"
        className="absolute top-[25px] left-[20px] text-[20px]/[1] font-bold tracking-[0.5px] text-text-heading max-[639px]:top-[20px] max-[639px]:text-[18px]"
      >
        {data?.match.cardLabel ?? "Your Next Match"}
      </h2>

      {error ? (
        <div
          role="alert"
          className="absolute inset-x-[50px] top-[78px] flex h-[90px] flex-col items-center justify-center gap-[12px] text-center max-[639px]:top-[100px]"
        >
          <p className="text-[12px]/[1.4] text-text-primary">
            Live score is temporarily unavailable.
          </p>
          <button
            type="button"
            onClick={retry}
            className="rounded-badge bg-primary px-[14px] py-[8px] text-[12px]/[1] font-semibold text-text-on-accent"
          >
            Retry
          </button>
        </div>
      ) : data ? (
        <MatchContent data={data} />
      ) : (
        <MatchLoadingState />
      )}
    </section>
  );
}
