"use client";

import { getBasePath } from "@/utils/path";
import Image from "next/image";

function Profile({
  url,
  name,
  adress,
}: {
  url: string;
  name: string;
  adress: string;
}) {
  return (
    <div className="flex items-center gap-[25px]">
      <Image src={url} alt="profile" width={86} height={86} />
      <div className="flex flex-col gap-[4px]">
        <p className="text-[16px] leading-[17px] font-[800]">{name}</p>
        <p className="text-[12px] leading-[15px] font-[400]">{adress}</p>
        <Image src={"stars-5.svg"} alt="star" width={86} height={14} />
      </div>
    </div>
  );
}

export default function Reviews() {
  return (
    <div className="mx-6 mt-[100px] mb-[40px] flex flex-col items-center justify-center gap-[40px] text-mint-800 lg:mt-[120px] lg:mb-[80px] lg:gap-[80px]">
      <h2 className="text-[32px] leading-[44px] font-bold lg:text-[40px]">
        People love our plan
      </h2>
      <div className="flex flex-col gap-[20px] lg:flex-row">
        <div className="relative max-w-[472px] rounded-3xl bg-gradient-to-r from-pink-500 via-blue-400 to-sky-500">
          <div className="absolute z-[-1] h-full w-full rounded-3xl bg-gradient-to-r from-pink-500 via-blue-400 to-sky-500 blur-md" />
          <div className="flex h-full w-full flex-col gap-[25px] rounded-3xl border-1 border-solid border-transparent bg-white bg-clip-padding p-[24px]">
            <Profile
              url={getBasePath("/samantha.png")}
              name="Samantha C., 38"
              adress="Kansas City, Missouri"
            />
            <p className="text-[14px] leading-[19px]">
              “Years of procrastination left my life in shambles. I knew that
              something needed to change.
              <br />
              <br />
              ShiftMind helped me realize that all my life I’d been suffering
              from overwhelm anxiety and task aversion and helped me embrace my
              unique productivity style - Energy-Driven Achiever!”
            </p>
          </div>
        </div>
        <div className="relative max-w-[472px] rounded-3xl bg-gradient-to-r from-pink-500 via-blue-400 to-sky-500">
          <div className="absolute z-[-1] h-full w-full rounded-3xl bg-gradient-to-r from-pink-500 via-blue-400 to-sky-500 blur-md" />
          <div className="flex h-full w-full flex-col gap-[25px] rounded-3xl border-1 border-solid border-transparent bg-white bg-clip-padding p-[24px]">
            <Profile
              url={getBasePath("/julia.png")}
              name="Julia W., 33"
              adress="Albuquerque, New Mexico"
            />
            <p className="text-[14px] leading-[19px]">
              “When I found ShiftMind, I was instantly hooked by its CBT-based
              daily lessons that helped me reframe my thoughts and overcome
              negative self-talk (my #1 procrastination trigger).
              <br />
              <br />
              Plus, since the program made me realize that I&apos;m a
              Deadline-Driven Performer, I&apos;ve revamped my diet, started
              exercising regularly, and my body has transformed!”
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
