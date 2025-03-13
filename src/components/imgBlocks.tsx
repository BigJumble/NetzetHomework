"use client";

import { getBasePath } from "@/utils/path";
import Image from "next/image";

export default function ImgBlocks() {
  return (
    <div className="flex flex-col items-center justify-center gap-[24px] p-[60px_24px] lg:flex-row lg:gap-[35px] lg:p-[110px_0px_100px_0px]">
      <div className="relative flex h-[542px] w-[336px] flex-col rounded-3xl bg-gradient-to-r from-pink-500 via-blue-400 to-sky-500 lg:h-[594px] lg:w-[402px]">
        <div className="absolute z-[-1] h-full w-full rounded-3xl bg-gradient-to-r from-pink-500 via-blue-400 to-sky-500 blur-md" />
        <div className="h-full w-full rounded-3xl border-1 border-solid border-transparent bg-white bg-clip-padding">
          <Image
            src={getBasePath("/emo.webp")}
            width="600"
            height="290"
            alt="three arrows graphic"
            className="h-[290px] overflow-hidden rounded-t-3xl object-none object-[80%_0]"
          />
          <div className="flex flex-col gap-6 p-4 lg:p-6">
            <p className="text-[18px] leading-[29px] font-[700] text-pink-400 lg:w-min lg:text-2xl">
              PROCRASTINATION SYMPTOMS:
            </p>
            <ul className="flex flex-col gap-4 text-[14px] leading-5 font-[400] text-mint-500 lg:text-base">
              <li className="flex items-center gap-3 text-[16px] font-medium text-mint-800">
                <div className="h-2 w-2 rounded-full bg-pink-400"></div>
                Time management difficulties
              </li>
              <li className="flex items-center gap-3 text-[16px] leading-5 font-medium text-mint-800">
                <div className="h-2 w-2 rounded-full bg-pink-400"></div>
                Poor organizational skills
              </li>
              <li className="flex items-center gap-3 text-[16px] leading-5 font-medium text-mint-800">
                <div className="h-2 w-2 rounded-full bg-pink-400"></div>
                Difficulty focusing
              </li>
              <li className="flex items-center gap-3 text-[16px] leading-5 font-medium text-mint-800">
                <div className="h-2 w-2 rounded-full bg-pink-400"></div>
                Acting without thinking
              </li>
              <li className="flex items-center gap-3 text-[16px] leading-5 font-medium text-mint-800">
                <div className="h-2 w-2 rounded-full bg-pink-400"></div>
                Restlessness
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Image
        src="arrows-down.svg"
        width="56"
        height="49"
        alt="three arrows graphic"
        className="block lg:hidden"
      />
      <Image
        src="arrows-right.svg"
        width="76"
        height="82"
        alt="three arrows graphic"
        className="hidden lg:block"
      />
      <div className="relative flex h-[542px] w-[336px] flex-col rounded-3xl bg-gradient-to-r from-pink-400 via-blue-400 to-sky-500 lg:h-[594px] lg:w-[402px]">
        <div className="absolute z-[-1] h-full w-full rounded-3xl bg-gradient-to-r from-pink-400 via-blue-400 to-sky-500 blur-md" />
        <div className="h-full w-full rounded-3xl border-1 border-solid border-transparent bg-white bg-clip-padding">
          <Image
            src={getBasePath("/happy.webp")}
            width="500"
            height="290"
            alt="three arrows graphic"
            className="h-[290px] overflow-hidden rounded-t-3xl object-none object-[40%_40%]"
            quality={100}
          />
          <div className="flex flex-col gap-6 p-4 lg:p-6">
            <p className="text-[18px] leading-[29px] font-[700] text-blue-400 lg:text-2xl">
              YOUR GOAL:
            </p>
            <ul className="flex flex-col gap-4 text-[14px] leading-5 font-[400] text-mint-500 lg:text-base">
              <li className="flex items-center gap-3 text-[16px] font-medium text-mint-800">
                <div className="h-2 w-2 rounded-full bg-blue-400"></div>
                Able to focus, minimal distraction
              </li>
              <li className="flex items-center gap-3 text-[16px] leading-5 font-medium text-mint-800">
                <div className="h-2 w-2 rounded-full bg-blue-400"></div>
                Effective planning, punctuality
              </li>
              <li className="flex items-center gap-3 text-[16px] leading-5 font-medium text-mint-800">
                <div className="h-2 w-2 rounded-full bg-blue-400"></div>
                Tidy spaces, structured routines
              </li>
              <li className="flex items-center gap-3 text-[16px] leading-5 font-medium text-mint-800">
                <div className="h-2 w-2 rounded-full bg-blue-400"></div>
                Considerate actions, patience
              </li>
              <li className="flex items-center gap-3 text-[16px] leading-5 font-medium text-mint-800">
                <div className="h-2 w-2 rounded-full bg-blue-400"></div>
                Calmness
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
