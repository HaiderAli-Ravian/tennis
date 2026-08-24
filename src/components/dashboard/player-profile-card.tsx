import Image from "next/image";

const assetRoot = "/assets/dashboard";

export function PlayerProfileCard() {
  return (
    <section
      data-slot="player-profile-card"
      aria-labelledby="player-profile-title"
      className="relative rounded-card"
    >
      <div className="absolute inset-0 z-0 overflow-hidden rounded-card bg-surface shadow-profile">
        <div className="absolute inset-x-0 top-0 h-[155px] bg-[linear-gradient(135deg,var(--color-profile-start),var(--color-profile-end))]" />
        <div className="absolute top-[120px] -left-[45px] h-[70px] w-[calc(100%+90px)] rounded-[50%] bg-[linear-gradient(135deg,var(--color-profile-start),var(--color-profile-end))]" />
      </div>

      <div className="absolute top-[42px] left-[30px] z-20">
        <h2
          id="player-profile-title"
          className="w-[185px] text-[30px]/[1.5] font-bold tracking-[0.5px] text-text-on-accent"
        >
          Anindita
          <br />
          Rahmawati
        </h2>
        <div className="mt-[12px] flex items-center gap-[10px] text-[15px]/[1] font-semibold tracking-[0.5px] text-text-on-accent">
          <Image
            src={`${assetRoot}/flags/indonesia.svg`}
            alt=""
            width={24}
            height={24}
            aria-hidden="true"
          />
          <span>Indonesia</span>
        </div>
      </div>

      <Image
        src={`${assetRoot}/players/anindita-tennis-player.svg`}
        alt="Anindita Rahmawati holding a tennis racket and ball"
        width={409}
        height={545}
        priority
        className="absolute -top-[48px] right-[-75px] z-10 h-[545px] w-[409px] max-w-none"
      />

      <div className="absolute top-[210px] left-[30px] z-20 w-[160px] text-text-primary">
        <h3 className="text-[15px]/[1] font-semibold tracking-[0.5px]">
          Biography
        </h3>
        <Image
          src={`${assetRoot}/players/avatar-anindita-biography.svg`}
          alt="Portrait of Anindita Rahmawati"
          width={50}
          height={60}
          className="mt-[10px] rounded-badge"
        />
        <dl className="mt-[12px] grid gap-[10px] text-[12px]/[1] font-semibold tracking-[0.5px]">
          <div className="flex gap-1">
            <dt>Age :</dt>
            <dd>27</dd>
          </div>
          <div className="flex gap-1 whitespace-nowrap">
            <dt>Birth :</dt>
            <dd>24 - 02 - 1993</dd>
          </div>
          <div className="flex gap-1">
            <dt>Sex :</dt>
            <dd>Women</dd>
          </div>
          <div className="flex gap-1">
            <dt>WTA :</dt>
            <dd>10.</dd>
          </div>
        </dl>

        <div className="mt-[28px]">
          <h3 className="text-[12px]/[1] font-semibold tracking-[0.5px]">
            Social Media
          </h3>
          <div className="mt-[10px] flex items-center gap-[8px]">
            <Image
              src={`${assetRoot}/icons/social/twitter.svg`}
              alt="Twitter"
              width={20}
              height={20}
            />
            <Image
              src={`${assetRoot}/icons/social/facebook.svg`}
              alt="Facebook"
              width={20}
              height={20}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
