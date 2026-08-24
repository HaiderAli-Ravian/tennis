import Image from "next/image";

export default function Home() {
  return (
    <>
      <a
        href="#dashboard-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-button focus:bg-surface focus:px-4 focus:py-3 focus:text-text-primary"
      >
        Skip to dashboard content
      </a>
      <main
        id="dashboard-content"
        tabIndex={-1}
        className="flex min-h-svh items-center justify-center bg-page-backdrop text-text-primary"
      >
        <div className="flex items-center gap-compact-gap" aria-label="Tennis">
          <Image
            src="/assets/dashboard/brand/tennis-mark.svg"
            alt=""
            width={30}
            height={30}
            priority
          />
          <h1 className="font-brand text-[25px]/[1] font-semibold text-text-brand">
            Tennis
          </h1>
        </div>
      </main>
    </>
  );
}
