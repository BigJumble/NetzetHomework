"use client";
import SummaryBox, { SummaryBoxType } from "./summaryBox";
import Image from "next/image";

export default function Summary() {
  return (
    <div className="grid gap-[40px] p-[40px_24px_60px_24px]">
      <h1 className="w-[342px] justify-self-center text-center text-[32px] leading-[38.73px] font-[700] text-mint-800 sm:w-[560px] sm:text-[40px] sm:leading-[44px]">
        Your Personal Procrastination Summary
      </h1>
      <div className="flex flex-col items-center gap-[16px] lg:gap-[22.85px]">
        <div className="grid grid-cols-1 content-center gap-[16px] lg:grid-cols-2">
          <SummaryBox
            type={SummaryBoxType.HIGH}
            title="Physical symptoms:"
            description="Can show up as feeling anxious, sad, or having big mood changes."
          />
          <SummaryBox
            type={SummaryBoxType.MODERATE}
            title="Psychological symptoms:"
            description="Like having trouble sleeping, feeling tired all the time, or pain without a clear reason."
          />
          <SummaryBox
            type={SummaryBoxType.MODERATE}
            title="Behavioral symptoms:"
            description="Might involve remembering bad things that happened, having bad dreams, or can't stop thinking about something bad."
          />
          <SummaryBox
            type={SummaryBoxType.MODERATE}
            title="Impact on your life:"
            description="Having trouble trusting others, worrying they'll leave you, or finding it hard to get close to people and set limits."
          />
        </div>
        <Image
          src="diagram-mobile.svg"
          alt="Progression diagram"
          width="342"
          height="352"
          className="block lg:hidden"
        />
        <Image
          src="diagram-desktop.svg"
          alt="Progression diagram"
          width="560"
          height="560"
          className="hidden lg:block"
        />
      </div>
    </div>
  );
}
