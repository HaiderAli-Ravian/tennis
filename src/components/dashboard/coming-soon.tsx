import Image from "next/image";

interface ComingSoonProps {
  readonly title: string;
  readonly icon: string;
}

export function ComingSoon({ title, icon }: ComingSoonProps) {
  return (
    <section
      data-slot="coming-soon"
      aria-labelledby="coming-soon-title"
      className="col-span-2 row-start-2 flex min-h-[772px] items-center justify-center max-[1439px]:min-h-[calc(100svh-136px)] max-[639px]:min-h-[calc(100svh-168px)]"
    >
      <div className="flex w-full max-w-[560px] flex-col items-center rounded-card bg-surface px-[40px] py-[64px] text-center shadow-card max-[639px]:px-[24px] max-[639px]:py-[48px]">
        <span className="flex size-[72px] items-center justify-center rounded-full bg-promo-surface">
          <Image
            src={`/assets/dashboard/icons/navigation/${icon}`}
            alt=""
            width={30}
            height={30}
            aria-hidden="true"
          />
        </span>
        <p className="mt-[24px] text-[14px]/[1] font-semibold tracking-[2px] text-primary uppercase">
          Coming Soon
        </p>
        <h2
          id="coming-soon-title"
          className="mt-[14px] text-[32px]/[1.2] font-semibold text-text-page-title max-[639px]:text-[28px]"
        >
          {title}
        </h2>
        <p className="mt-[16px] max-w-[390px] text-[16px]/[1.6] text-text-disabled">
          This dashboard section is being prepared and will be available soon.
        </p>
      </div>
    </section>
  );
}
