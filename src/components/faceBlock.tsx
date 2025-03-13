"use client";

import { getBasePath } from "@/utils/path";
import Image from "next/image";

function TextBlock() {
  return (
    <div className="flex flex-col items-center px-[24px] text-center xl:items-start xl:px-0 xl:text-left">
      <p className="mt-[40px] mb-[20px] w-min bg-gradient-to-r from-pink-400 via-blue-400 to-sky-500 bg-clip-text text-[60px] leading-[48px] font-extrabold tracking-[0%] text-transparent">
        87%
      </p>
      <p className="mb-[40px] max-w-[400px] text-[18px] leading-[22px] font-[500] tracking-[0%] text-white">
        of our users reported experiencing long-term improvements in managing
        their procrastination symptoms
      </p>
      <p className="mb-[20px] w-min bg-gradient-to-r from-pink-400 via-blue-400 to-sky-500 bg-clip-text text-[60px] leading-[48px] font-extrabold tracking-[0%] text-transparent">
        94%
      </p>
      <p className="mb-[40px] max-w-[400px] text-[18px] leading-[22px] font-[500] tracking-[0%] text-white">
        of users reported a more balanced and{" "}
        <span className="font-bold">positive mental state</span>
      </p>
      <p className="mb-[20px] w-min bg-gradient-to-r from-pink-400 via-blue-400 to-sky-500 bg-clip-text text-[60px] leading-[48px] font-extrabold tracking-[0%] text-transparent">
        89%
      </p>
      <p className="mb-[40px] max-w-[400px] text-[18px] leading-[22px] font-[500] tracking-[0%] text-white">
        of users successfully aligned their behaviors and attitudes more closely
        with the{" "}
        <span className="font-bold">qualities they admire in others</span>
      </p>
    </div>
  );
}

// there are some problems with figma design on this block, would ask designer to modify it, but it's homework so oh well
export default function FaceBlock() {
  return (
    <div className="flex h-[1160px] justify-center overflow-hidden xl:h-[950px]">
      <div className="relative w-[390px] xl:w-[1440px]">
        <Image
          src={getBasePath("/face-mobile.png")}
          alt="face block"
          width={390}
          height={0}
          className="absolute top-0 left-0 z-1 block xl:hidden"
        />
        <Image
          src={getBasePath("/face.png")}
          alt="face block"
          width={720}
          height={1066}
          className="absolute top-[26px] left-0 z-1 hidden xl:block"
        />
        <Image
          src="wave.svg"
          alt="wave"
          width={0}
          height={0}
          className="absolute top-0 left-0 z-2 hidden h-[160px] min-w-[1440px] xl:block"
        />
        <Image
          src="green-wave.svg"
          alt="wave"
          width={0}
          height={0}
          className="absolute top-0 left-0 z-[-1] hidden h-[160px] min-w-[1440px] scale-x-[-1] rotate-180 xl:block"
        />
        <div className="absolute top-[200px] left-0 z-0 flex h-[850px] w-full flex-col bg-mint-500 pt-[260px] xl:top-[160px] xl:h-[560px] xl:pt-0 xl:pl-[800px]">
          <TextBlock />
        </div>
        <Image
          src="green-wave.svg"
          alt="wave"
          width={0}
          height={0}
          className="absolute top-[1030px] left-0 h-[80px] w-full xl:top-[720px] xl:left-[640px] xl:h-[120px] xl:w-[800px]"
        />
      </div>
    </div>
  );
}
