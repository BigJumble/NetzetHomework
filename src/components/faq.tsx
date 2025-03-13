"use client";
import Image from "next/image";
import { useState } from "react";

function FAQItem({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      onClick={() => setIsOpen(!isOpen)}
      className={`relative w-full max-w-[964px] rounded-3xl bg-gradient-to-r from-pink-500 via-blue-400 to-sky-500 transition-all cursor-pointer`}>
      <div
        className={`absolute z-[-1] h-full w-full rounded-3xl bg-gradient-to-r from-pink-500 via-blue-400 to-sky-500 transition-all ${isOpen ? "blur-md" : ""} ${!isOpen ? "blur-none" : ""}`}
      />
      <div
        className={`flex h-full w-full flex-col rounded-3xl border-1 border-solid transition-all ${!isOpen ? "border-white" : "border-transparent"} bg-white bg-clip-padding p-[24px]`}>
        <div className="flex items-center justify-between">
          <p className={`text-[16px] ${isOpen?"font-[600]":"font-[500]"} text-mint-800`}>{title}</p>
          <Image
            src={isOpen ? "arrow-up.svg" : "arrow-down.svg"}
            alt="toggle icon"
            width={24}
            height={25}
            className="ml-6"
          />
        </div>
        <div
          className={`overflow-hidden text-[14px] leading-[20px] font-[500] text-mint-800 ${isOpen ? "max-h-auto" : "max-h-[0px]"}`}>
          <div className="mt-[24px]" />
          {children}
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  return (
    <div className="mt-[60px] lg:mt-[80px]">
      <Image
        src="green-wave.svg"
        alt="wave"
        width={0}
        height={0}
        className="hidden h-[160px] w-full scale-x-[-1] rotate-180 xl:block"
      />
      <Image
        src="bottom-wave.svg"
        alt="wave"
        width={0}
        height={0}
        className="block h-[83px] w-full xl:hidden translate-y-[2px]"
      />
      <div className="relative flex flex-col items-center justify-center">
        <div className="absolute top-0 left-0 z-[-1] h-full w-full bg-mint-500" />
        <h2 className="mt-[40px] mb-[24px] text-center text-[40px] leading-[44px] font-[700] text-white xl:mt-0">
          People often ask
        </h2>
        <div className="mb-[40px] flex flex-col items-center justify-center gap-[8px] px-[24px]">
          <FAQItem title="What is ShiftMind?">
            <p>
              ShiftMind is the solution for anyone struggling with productivity
              due to procrastination. Discover how to not only stop delaying
              tasks but also prevent you from getting stuck in the
              procrastination cycle over and over again. This structured program
              will enhance your self-control and guide you to becoming your most
              efficient, disciplined, and fulfilled self.
            </p>
          </FAQItem>
          <FAQItem title="What can I expect to receive?">
            <p>
              The ShiftMind is a productivity and self-development program
              accessible through both web and mobile. It offers various tools to
              assist you in conquering procrastination, such as a Progressive
              Web app, mental exercise worksheets, daily task lists, and an
              exclusive support group to ensure your journey to success
            </p>
          </FAQItem>
          <FAQItem title="How can I make the most of the Anti-Procrastination Program?">
            <p>
              Each day, you&apos;ll receive practical lessons to enhance your
              daily planning and break self-destructive patterns. Daily
              reflection, weekly and monthly result tracking, and gradual
              habit-building will keep you motivated, monitor your advancement,
              and guard against potential setbacks. Our aim is to guide you in
              exploring effective resources to kick procrastination to the curb
              and ensure your path to success.
            </p>
          </FAQItem>
          <FAQItem title="What's the process after I make a purchase?">
            <p>
              Once your purchase is complete, we&apos;ll kickstart the process!
              Shortly after, you&apos;ll receive an email containing a download
              link and straightforward instructions. The entire program hinges
              on the proven effectiveness of Cognitive Behavioral Therapy (CBT),
              a well-established approach.
            </p>
          </FAQItem>
          <FAQItem title="What is the pricing?">
            <p>
              Our flexible payment options allow you to pick from a one-month,
              three-month, or six-month plan, granting you access to the app
              along with additional perks. And if you&apos;re not completely
              satisfied, don&apos;t worry! Our Risk-Free Guarantee enables you
              to cancel at any time without incurring the full price of the
              program.
            </p>
          </FAQItem>
        </div>
      </div>
    </div>
  );
}
