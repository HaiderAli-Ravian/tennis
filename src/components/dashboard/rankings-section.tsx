import Image from "next/image";

const rankings = [
  {
    label: "Singles",
    value: "18",
    direction: "up",
    colorClass: "bg-ranking-singles",
  },
  {
    label: "Doubles",
    value: "20",
    direction: "up",
    colorClass: "bg-ranking-doubles",
  },
  {
    label: "Mixed Doubles",
    value: "16",
    direction: "down",
    colorClass: "bg-ranking-mixed",
  },
] as const;

type RankingKind = (typeof rankings)[number]["label"];

function RankingDecoration({ kind }: { readonly kind: RankingKind }) {
  if (kind === "Singles") {
    return (
      <svg
        aria-hidden="true"
        viewBox="0 0 312 156"
        preserveAspectRatio="xMidYMid slice"
        className="pointer-events-none absolute inset-0 size-full"
      >
        <rect
          x="147"
          y="86"
          width="312"
          height="156"
          rx="78"
          transform="rotate(45 303 164)"
          fill="#FF7093"
        />
        <rect
          x="187"
          y="-33"
          width="312"
          height="156"
          rx="78"
          fill="white"
          fillOpacity="0.3"
        />
        <rect
          x="71"
          y="-126"
          width="312"
          height="156"
          rx="78"
          transform="rotate(107 227 -48)"
          fill="none"
          stroke="white"
          strokeOpacity="0.3"
          strokeWidth="1.5"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    );
  }

  if (kind === "Doubles") {
    return (
      <svg
        aria-hidden="true"
        viewBox="0 0 312 156"
        preserveAspectRatio="xMidYMid slice"
        className="pointer-events-none absolute inset-0 size-full"
      >
        <rect
          x="92"
          y="129"
          width="312"
          height="156"
          rx="78"
          transform="rotate(90 248 207)"
          fill="#FFBF87"
        />
        <rect
          x="193"
          y="-37"
          width="312"
          height="156"
          rx="78"
          fill="white"
          fillOpacity="0.3"
        />
        <rect
          x="48"
          y="-105"
          width="312"
          height="156"
          rx="78"
          transform="rotate(90 204 -27)"
          fill="none"
          stroke="white"
          strokeOpacity="0.3"
          strokeWidth="1.5"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    );
  }

  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 312 156"
      preserveAspectRatio="xMidYMid slice"
      className="pointer-events-none absolute inset-0 size-full"
    >
      <rect
        x="154"
        y="-120"
        width="312"
        height="156"
        rx="78"
        transform="rotate(-60 310 -42)"
        fill="#7F77C5"
      />
      <rect
        x="182"
        y="68"
        width="312"
        height="156"
        rx="78"
        fill="white"
        fillOpacity="0.3"
      />
      <rect
        x="13"
        y="-116"
        width="312"
        height="156"
        rx="78"
        transform="rotate(75 169 -38)"
        fill="none"
        stroke="white"
        strokeOpacity="0.3"
        strokeWidth="1.5"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}

export function RankingsSection() {
  return (
    <section
      aria-labelledby="rankings-title"
      className="grid grid-rows-[70px_100px] max-[1439px]:grid-rows-[70px_auto]"
    >
      <h2
        id="rankings-title"
        className="self-center text-[20px]/[1] font-bold tracking-[0.5px] text-text-heading"
      >
        Rankings
      </h2>
      <div className="grid grid-cols-[repeat(3,minmax(200px,1fr))] gap-x-[25px] max-[819px]:grid-cols-2 max-[819px]:gap-[16px] max-[519px]:grid-cols-1">
        {rankings.map((ranking, index) => (
          <article
            key={ranking.label}
            data-slot={
              index === 0
                ? "singles-ranking-card"
                : index === 1
                  ? "doubles-ranking-card"
                  : "mixed-ranking-card"
            }
            className={`relative overflow-hidden rounded-ranking-card ${ranking.colorClass} text-text-on-accent max-[1439px]:h-[120px] max-[519px]:h-[130px] ${index === 2 ? "max-[819px]:col-span-2 max-[819px]:w-[calc(50%-8px)] max-[819px]:justify-self-center max-[519px]:col-span-1 max-[519px]:w-full" : ""}`}
          >
            <RankingDecoration kind={ranking.label} />

            <h3 className="absolute top-[25px] left-[15px] text-[15px]/[1] font-medium tracking-[1px]">
              {ranking.label}
            </h3>
            <div className="absolute bottom-[20px] left-[15px] flex items-center gap-[6px]">
              <span className="text-[25px]/[1] font-medium tracking-[0.5px]">
                {ranking.value}
              </span>
              <span className="flex size-6 items-center justify-center">
                <Image
                  src={`/assets/dashboard/icons/ranking/rank-${ranking.direction}.svg`}
                  alt={`Rank trending ${ranking.direction}`}
                  width={ranking.direction === "up" ? 24 : 16}
                  height={ranking.direction === "up" ? 24 : 18}
                />
              </span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
