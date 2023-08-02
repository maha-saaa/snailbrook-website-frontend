"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import elevatorBg from "@/public/elevator-bg.webp";

export default function MenuModal() {
  const router = useRouter();
  return (
    <div
      className="flex items-center fixed z-50 inset-0 overflow-y-auto"
      id="menu-modal"
      aria-labelledby="menu-modal"
      role="dialog"
      aria-modal="true"
    >
      <div
        className="fixed inset-0 bg-gray-light bg-opacity-75 transition-opacity"
        aria-hidden="true"
      />
      <Image
        src={elevatorBg}
        alt="elevator"
        className="hidden sm:flex min-w-[1440px] h-[900px] absolute"
        placeholder="blur"
        priority
        quality={100}
        sizes="100vw"
        useMap="#image-map"
      />
      <Image
        src={elevatorBg}
        alt="elevator"
        className="flex sm:hidden min-w-[374px] h-[275px] absolute"
        placeholder="blur"
        priority
        quality={100}
        sizes="100vw"
        useMap="#image-map-mobile"
      />
      <map name="image-map" className="hidden sm:flex">
        {/* <area
          target=""
          alt="governor"
          title="governor"
          href="/governor"
          coords="322,282,83"
          shape="circle"
        /> */}
        <area
          target=""
          alt="faq"
          title="faq"
          href="/faq"
          coords="533,307,67"
          shape="circle"
        />
        <area
          target=""
          alt="about"
          title="about"
          href="/about"
          coords="719,312,66"
          shape="circle"
        />
        <area
          target=""
          alt="roadmap"
          title="roadmap"
          href="/roadmap"
          coords="903,304,71"
          shape="circle"
        />
        <area
          target=""
          alt="tokenomics"
          title="tokenomics"
          href="/tokenomics"
          coords="1114,284,83"
          shape="circle"
        />
        {/* <area
          target=""
          alt="news"
          title="news"
          href="/news"
          coords="327,619,83"
          shape="circle"
        /> */}
        <area
          target=""
          alt="youtube"
          title="youtube"
          href="/youtube"
          coords="532,599,76"
          shape="circle"
        />
        <area
          target=""
          alt="join"
          title="join"
          href="/join"
          coords="718,593,69"
          shape="circle"
        />
        {/* <area
          target=""
          alt="platform"
          title="platform"
          href="/platform"
          coords="905,595,69"
          shape="circle"
        /> */}
        {/* <area
          target=""
          alt="cityview"
          title="cityview"
          href="/cityview"
          coords="1109,620,84"
          shape="circle"
        /> */}
      </map>

      <map name="image-map-mobile" className="flex sm:hidden">
        {/* <area
          target=""
          alt="governor"
          title="governor"
          href="/governor"
          coords="117,63,57"
          shape="circle"
        /> */}
        <area
          target=""
          alt="faq"
          title="faq"
          href="/faq"
          coords="151,63,46"
          shape="circle"
        />
        <area
          target=""
          alt="about"
          title="about"
          href="/about"
          coords="220,63,46"
          shape="circle"
        />
        <area
          target=""
          alt="roadmap"
          title="roadmap"
          href="/roadmap"
          coords="280,63,46"
          shape="circle"
        />
        <area
          target=""
          alt="tokenomics"
          title="tokenomics"
          href="/tokenomics"
          coords="350,63,57"
          shape="circle"
        />
        {/* <area
          target=""
          alt="news"
          title="news"
          href="/news"
          coords="117,163,57"
          shape="circle"
        /> */}
        <area
          target=""
          alt="youtube"
          title="youtube"
          href="/youtube"
          coords="151,163,47"
          shape="circle"
        />
        <area
          target=""
          alt="join"
          title="join"
          href="/join"
          coords="220,163,47"
          shape="circle"
        />
        {/* <area
          target=""
          alt="platform"
          title="platform"
          href="/platform"
          coords="280,163,47"
          shape="circle"
        /> */}
        {/* <area
          target=""
          alt="cityview"
          title="cityview"
          href="/cityview"
          coords="350,163,57"
          shape="circle"
        /> */}
      </map>
    </div>
  );
}