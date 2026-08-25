import Image from "next/image";

const assetRoot = "/assets/dashboard";

export function PlayerProfileCard() {
  return (
    <section
      data-slot="player-profile-card"
      aria-labelledby="player-profile-title"
      className="profile-shadow-overlap relative rounded-card"
    >
      <div className="absolute inset-0 z-0 overflow-hidden rounded-card bg-surface shadow-profile">
        <Image
          src={`${assetRoot}/illustrations/biography-rectangle.svg`}
          alt=""
          width={400}
          height={192}
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-[192px] w-full"
        />
      </div>

      <div className="absolute top-[42px] left-[30px] z-20 max-[639px]:top-[35px] max-[639px]:left-[20px]">
        <h2
          id="player-profile-title"
          className="w-[185px] text-[30px]/[1.5] font-bold tracking-[0.5px] text-text-on-accent max-[639px]:w-[150px] max-[639px]:text-[24px]/[1.35]"
        >
          Anindita
          <br />
          Rahmawati
        </h2>
        <div className="mt-[12px] flex items-center gap-[10px] text-[15px]/[1] font-semibold tracking-[0.5px] text-text-on-accent max-[639px]:text-[13px]">
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
        className="absolute -top-[48px] right-[-75px] z-10 h-[545px] w-[409px] max-w-none max-[1439px]:-top-[20px] max-[639px]:top-0 max-[639px]:right-[-62px] max-[639px]:h-[440px] max-[639px]:w-[330px]"
      />

      <div className="absolute top-[210px] left-[30px] z-20 w-[160px] text-text-primary max-[639px]:left-[20px] max-[639px]:w-[150px]">
        <h3 className="text-[15px]/[1] font-semibold tracking-[0.5px] mt-2">
          Biography
        </h3>
        <div className="mt-[10px] h-[60px] w-[50px] overflow-hidden rounded-[20px_10px_20px_10px] bg-avatar-biography-bg">
          <Image
            src={`${assetRoot}/players/avatar-anindita-biography.svg`}
            alt="Portrait of Anindita Rahmawati"
            width={50}
            height={60}
          />
        </div>
        <dl className="mt-[16px] grid gap-[10px] text-[12px]/[1] font-semibold tracking-[0.5px]">
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

        <div className="mt-[32px]">
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
