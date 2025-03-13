"use client";

import { getBasePath } from "@/utils/path";
import Image from "next/image";
export default function BrainBlock() {
  return (
    <div className="flex flex-col items-center justify-center text-mint-800 gap-[60px] lg:gap-[80px]">
      <h2 className="w-[342px] text-center text-[32px] leading-[44px] font-bold tracking-[0%] lg:w-[508px] lg:text-[40px]">
        Your Procrastination plan will help you:
      </h2>
      <div className="flex flex-col lg:flex-row-reverse items-center justify-center gap-[40px] lg:gap-[93px]">
        <div className="flex flex-col gap-[40px] lg:gap-[80px] lg:grid lg:grid-cols-2">
          <div className="flex gap-[16px] items-start">
            <Image src="notes.svg" alt="notes" width={54} height={54} />
            <p className="w-[272px] lg:w-[146px] leading-[19px]">
              Keep your <span className="font-[800]">motivation up</span> by
              having daily reports of your progress and achievements
            </p>
          </div>
          <div className="flex gap-[16px] items-start">
            <Image src="hourglass.svg" alt="hourglass" width={54} height={54} />
            <p className="w-[272px] lg:w-[182px] leading-[19px]">
              Learn new techniques to improve your{" "}
              <span className="font-[800]">
                concentration, effectively handle time
              </span>
              , and establish{" "}
              <span className="font-[800]">positive daily routines.</span>
            </p>
          </div>
          <div className="flex gap-[16px] items-start">
            <Image src="guide.svg" alt="guide" width={54} height={54} />
            <p className="w-[272px] lg:w-[146px] leading-[19px]">
              Build <span className="font-[800]">new habits</span> with our
              prepared guides
            </p>
          </div>
          <div className="flex gap-[16px] items-start">
            <Image src="clipboard.svg" alt="clipboard" width={54} height={54} />
            <p className="w-[272px] lg:w-[182px] leading-[19px]">
              Have an action plan to{" "}
              <span className="font-[800]">
                break your procrastination cycle
              </span>{" "}
              and manage procrastination
            </p>
          </div>
        </div>
        <Image
          src={getBasePath("/brain.png")}
          alt="brain"
          width={100}
          height={100}
          className="w-[249px] lg:w-[311px]"
        />
      </div>
    </div>
  );
}
