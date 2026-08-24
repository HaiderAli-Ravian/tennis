import Image from "next/image";

const assetRoot = "/assets/dashboard";

export function LatestScoresCard() {
  return (
    <section
      data-slot="latest-scores-card"
      aria-labelledby="latest-scores-title"
      className="relative ml-px h-[220px] w-[calc(100%-1px)] overflow-hidden rounded-card bg-surface shadow-card"
    >
      <div className="absolute top-[25px] right-[20px] left-[20px] flex items-center justify-between">
        <h2
          id="latest-scores-title"
          className="text-[20px]/[1] font-medium tracking-[0.5px] text-text-primary"
        >
          Latest Scores
        </h2>
        <span className="text-[15px]/[1] font-semibold tracking-[0.5px] text-link">
          View All
        </span>
      </div>

      <div aria-label="Score category" className="absolute top-[60px] left-[20px] flex items-center gap-[15px]">
        <span className="rounded-badge bg-tab-active-bg px-[8px] py-[5px] text-[15px]/[1] font-medium tracking-[0.5px] text-tab-active-text">
          Singles
        </span>
        <span className="text-[15px]/[1] font-normal tracking-[0.5px] text-text-muted">
          Doubles
        </span>
        <span className="text-[15px]/[1] font-normal tracking-[0.5px] text-text-muted">
          Mixed Doubles
        </span>
      </div>

      <div className="absolute top-[100px] right-[20px] left-[20px] flex items-center">
        <Image
          src={`${assetRoot}/icons/scores/player-outline.svg`}
          alt=""
          width={20}
          height={20}
          aria-hidden="true"
        />
        <span className="ml-[10px] text-[15px]/[1] font-normal tracking-[0.5px] text-text-strong">
          WTA - SINGLES: Australia Open, hard
        </span>
        <Image
          src={`${assetRoot}/icons/scores/star-outline.svg`}
          alt="Favorite"
          width={20}
          height={20}
          className="ml-auto"
        />
      </div>

      <div className="absolute top-[142px] right-[25px] left-[25px] grid grid-cols-[1fr_35px_35px_35px_50px] items-center gap-y-[14px] text-[15px]/[1] tracking-[0.5px] text-text-strong">
        <span className="font-semibold">Anindita R. (IDN)</span>
        <span className="text-center font-semibold">2</span>
        <span className="text-center font-normal">6</span>
        <span className="text-center font-normal">6</span>
        <span className="flex h-[25px] items-center justify-center rounded-badge bg-win-bg font-semibold text-win-text">
          WIN
        </span>

        <span className="font-normal">Naomi O. (JPN)</span>
        <span className="text-center font-semibold">0</span>
        <span className="text-center font-normal">3</span>
        <span className="text-center font-normal">1</span>
        <span />
      </div>
    </section>
  );
}
