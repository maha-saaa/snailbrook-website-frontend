import Image from "next/image";
import Card from "./card";
import MenuModal from "@/app/shared/components/menu-modal/menu-modal";
import cardBg from "@/public/card-bg.webp";
import cardMobileBg from "@/public/card-mobile-bg.webp";
import cloudsBg from "@/public/clouds-bg.webp";
import insideBg from "@/public/inside-bg.webp";

type Props = {
  searchParams: Record<string, string> | null | undefined;
};

export default function Page({ searchParams }: Props) {
  const showModal = searchParams?.modal;

  return (
    <section className="flex flex-col min-h-screen items-center justify-center overflow-hidden relative">
      <article className="flex flex-col w-[260px] h-[441px] sm:w-[537px] sm:h-[320px] xl:w-[937px] xl:h-[510px] items-center gap-4 xl:gap-[56px] overflow-y-auto z-30">
        <h2 className="text-sm font-medium text-white text-center">
          OUR ROADMAP
        </h2>
        <h1 className="text-3xl xl:text-[56px] font-bold text-white text-center">
          The Road of the Snail
        </h1>
        <p className="text-sm xl:text-base font-medium text-white  text-center">
          Our roadmap will remain shrouded in mystery until we deem the right
          time. However, all development steps we will take care to build and
          expand SnailBrook, fostering innovation and collaboration among meme
          coin enthusiasts.
        </p>
        <button className="flex border-box flex-row w-[149px] h-[46px] justify-center items-center px-9 py-2 xl:px-8 xl:py-3 mb-12 rounded-[48px] bg-gradient-to-r from-purple-light to-purple-medium">
          <span className="text-xs font-medium text-white">Stay updated</span>
        </button>

        <div className="flex flex-col xl:flex-row flex-wrap w-[80%] items-center justify-between text-white">
          <Card />
          <div className="xl:w-[202px] h-0.5 hidden xl:inline-block mb-20 bg-blue-medium" />
          <div className="h-10 w-0.5 inline-block xl:hidden m-0 bg-blue-medium" />
          <Card />
          <Card />
          <div className="xl:w-[202px] h-0.5 hidden xl:inline-block mb-20 bg-blue-medium" />
          <div className="h-10 w-0.5 inline-block xl:hidden m-0 bg-blue-medium" />
          <Card />
        </div>
      </article>
      {showModal && <MenuModal />}
      <Image
        src={cardBg}
        alt="card"
        className="hidden sm:flex w-[1170px] h-auto absolute z-20"
        placeholder="blur"
        priority
        quality={100}
        sizes="100vw"
      />
      <Image
        src={cardMobileBg}
        alt="card"
        className="flex sm:hidden w-[582px] h-[536px] absolute z-20"
        placeholder="blur"
        priority
        quality={100}
        sizes="100vw"
      />
      <Image
        src={insideBg}
        alt="insideBg"
        className="object-cover"
        placeholder="blur"
        priority
        quality={100}
        fill
        sizes="100vw"
      />
      <Image
        src={cloudsBg}
        alt="cloudsBg"
        className="object-cover -z-10"
        placeholder="blur"
        priority
        quality={100}
        fill
        sizes="100vw"
      />
    </section>
  );
}
