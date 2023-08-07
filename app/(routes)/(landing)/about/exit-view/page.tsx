import Image from "next/image";
import Link from "next/link";
import cardBg from "@/public/card-bg.webp";
import cardMobileBg from "@/public/card-mobile-bg.webp";
import telegramIcon from "@/public/telegram-icon.svg";
import { SNAILTEAM } from "@/app/shared/constants";

export default function Page() {
  return (
    <section
      className="flex flex-col min-h-screen items-center justify-center overflow-hidden relative"
      style={{
        backgroundImage:
          "radial-gradient(70.71% 70.71% at 50% 50%, #4E65FD 0%, rgba(57, 72, 175, 0.00) 55.00%)",
      }}
    >
      <article className="flex flex-col w-[260px] h-[390px] sm:w-[537px] sm:h-[320px] lg:w-[850px] lg:h-[480px] items-center justify-center gap-8 lg:gap-[56px] text-white z-20">
        <h1 className="text-3xl lg:text-[54px] font-bold lg:leading-[68px]">
          Utopia For All
        </h1>
        <span>
          <p className="text-base lg:text-xl mb-4 xl:mb-7 text-center">
            SnailBrook marks the beginning of a new age of community-owned,
            community-driven, and community-ocused crypto.
          </p>
          <p className="text-base lg:text-xl text-center">
            Join the decentralized meme coin project that aims to create the
            ultimate cult community by uniting all meme coins for a common
            cause.
          </p>
        </span>
        <Link
          href={SNAILTEAM}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-row w-[258px] h-[54px] xl:w-[279px] xl:h-[72px] gap-2 justify-center items-center px-9 py-2 xl:px-11 xl:py-4 rounded-[48px] bg-gradient-to-r from-purple-light to-purple-medium"
        >
          <Image src={telegramIcon} alt="download" />
          <span className="text-xl font-medium text-white">Join the memes</span>
        </Link>
      </article>

      <Image
        src={cardBg}
        alt="card"
        className="hidden sm:flex w-[1080px] h-auto absolute z-10"
        placeholder="blur"
        priority
        quality={100}
        sizes="100vw"
      />
      <Image
        src={cardMobileBg}
        alt="card"
        className="flex sm:hidden w-[582px] h-[536px] absolute z-10"
        placeholder="blur"
        priority
        quality={100}
        sizes="100vw"
      />
    </section>
  );
}
