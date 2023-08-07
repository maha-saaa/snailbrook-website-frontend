import Image from "next/image";
import Link from "next/link";
import islandBg from "@/public/island-bg.webp";
import cloudsBg from "@/public/clouds-bg.webp";
import nightBg from "@/public/night-bg.webp";
import sunsetBg from "@/public/sunset-bg.svg";
import enterTowerBt from "@/public/enter-tower-bt.svg";
import utilityTowerBt from "@/public/utility-tower-bt.svg";
import twitterIcon from "@/public/twitter-icon.svg";
import telegramIcon from "@/public/telegram-icon.svg";
import mediumIcon from "@/public/medium-icon.svg";
import tiktokIcon from "@/public/tiktok-icon.svg";
import redditIcon from "@/public/reddit-icon.svg";
import discordIcon from "@/public/discord-icon.svg";
import youtubeIcon from "@/public/youtube-icon.svg";
import gitbookIcon from "@/public/gitbook-icon.svg";
import downloadIcon from "@/public/download-icon.svg";
import glow from "@/public/glow.svg";

export default function Hero() {
  return (
    <section className="w-full min-h-screen overflow-hidden relative">
      <div className="flex flex-col w-full max-h-[90%] items-center justify-between fixed bottom-0 overflow-hidden">
        <div className="flex flex-col h-[25vh] justify-end pr-[100px] md:pr-[308px] z-10">
          <button className="hidden md:flex">
            <Image src={enterTowerBt} alt="enterTowerBt" quality={100} />
          </button>
        </div>
        <div className="flex flex-col h-[25vh] justify-center items-end md:pl-[480px] z-10">
          <button className="hidden md:flex">
            <Image src={utilityTowerBt} alt="utilityTowerBt" quality={100} />
          </button>
        </div>
        <div className="flex flex-col items-center h-[20vh] justify-end z-10">
          <Link
            href="https://app.uniswap.org/#/swap?inputCurrency=ETH&outputCurrency=0x6bc40d4099f9057b23af309c08d935b890d7adc0&chain=mainnet"
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center items-center w-[222px] h-[66px] px-6 sm:px-8 py-4 rounded-3xl backdrop-blur-sm gradinetBorderWithTransparentBg gradinetBorderBlueToPink bg-gradient-to-r from-purple-gradiant-light to-purple-gradiant-medium"
          >
            <p className="text-[27px] font-bold text-white">Buy $SNAIL</p>
          </Link>
          <Image src={glow} alt="glow" quality={100} />
        </div>
        <div className="flex flex-row w-full h-[20vh] justify-center lg:justify-between px-5 sm:px-16 z-10">
          <div className="hidden lg:flex flex-col h-[110px] gap-2 p-4 relative rounded-3xl backdrop-blur bg-gray-gradient-dark border-2 border-blue-medium">
            <div className="flex items-center justify-center p-0.5 absolute top-[-12px] rounded-[14px] bg-gradient-to-r from-blue-light to-pink-light">
              <div className="rounded-[14px] px-2 py-1 bg-gray-light dark:bg-gray-dark">
                <h1 className="text-white text-[8px]">NEW</h1>
              </div>
            </div>
            <h1 className="text-sm font-normal text-white">
              The Snailbrook Litepaper is out.
            </h1>
            <Link
              href="https://uploads-ssl.webflow.com/646759c55a25df70a3bdeb83/64a3121f5aae2322e980d86e_Snailbrook%20Litepaper%20v0.1.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row gap-3 justify-center items-center px-12 py-3 rounded-[14px] bg-gradient-to-r from-purple-light to-purple-medium"
            >
              <Image src={downloadIcon} alt="download" />
              <span className="text-xs font-medium text-white">
                Download now
              </span>
            </Link>
          </div>
          <div className="flex flex-row gap-x-4 sm:gap-x-6 items-center">
            <Link
              href="https://twitter.com/SnailBrookAI"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-8 h-8 sm:w-11 sm:h-11 rounded-[48px] backdrop-blur bg-gray-gradient-dark"
            >
              <Image src={twitterIcon} alt="twitterIcon" />
            </Link>
            <Link
              href="https://t.me/SnailBrook_Ann"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-8 h-8 sm:w-11 sm:h-11 rounded-[48px] backdrop-blur bg-gray-gradient-dark"
            >
              <Image src={telegramIcon} alt="telegramIcon" />
            </Link>
            <Link
              href="https://medium.com/@SnailBrook"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-8 h-8 sm:w-11 sm:h-11 rounded-[48px] backdrop-blur bg-gray-gradient-dark"
            >
              <Image src={mediumIcon} alt="mediumIcon" />
            </Link>
            <Link
              href="https://www.tiktok.com/@snailbrookai"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-8 h-8 sm:w-11 sm:h-11 rounded-[48px] backdrop-blur bg-gray-gradient-dark"
            >
              <Image src={tiktokIcon} alt="tiktokIcon" />
            </Link>
            <Link
              href="https://www.reddit.com/r/SNaiLBROOKAI"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-8 h-8 sm:w-11 sm:h-11 rounded-[48px] backdrop-blur bg-gray-gradient-dark"
            >
              <Image src={redditIcon} alt="redditIcon" />
            </Link>
            <Link
              href="https://discord.io/SnailBrook"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-8 h-8 sm:w-11 sm:h-11 rounded-[48px] backdrop-blur bg-gray-gradient-dark"
            >
              <Image src={discordIcon} alt="discordIcon" />
            </Link>
            <Link
              href="https://www.youtube.com/@SNAILBROOK"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-8 h-8 sm:w-11 sm:h-11 rounded-[48px] backdrop-blur bg-gray-gradient-dark"
            >
              <Image src={youtubeIcon} alt="youtubeIcon" />
            </Link>
            <Link
              href="https://snailbrook.gitbook.io/snailbrook"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-8 h-8 sm:w-11 sm:h-11 rounded-[48px] backdrop-blur bg-gray-gradient-dark"
            >
              <Image src={gitbookIcon} alt="gitbookIcon" />
            </Link>
          </div>
        </div>
        <Image
          src={islandBg}
          alt="islandBg"
          className="object-cover"
          placeholder="blur"
          priority
          quality={100}
          fill
          sizes="100vw"
        />
      </div>
      <Image
        src={sunsetBg}
        alt="sunsetBg"
        className="dark:hidden object-cover -z-10"
        quality={100}
        fill
        sizes="100vw"
      />
      <picture>
        <source srcSet={nightBg.src} media="(prefers-color-scheme: dark)" />
        <Image
          src={cloudsBg}
          alt="cloudsBg"
          className="object-cover -z-10 "
          placeholder="blur"
          priority
          quality={100}
          fill
          sizes="100vw"
        />
      </picture>
    </section>
  );
}
