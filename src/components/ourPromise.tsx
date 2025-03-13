"use client";

import { getBasePath } from "@/utils/path";
import Image from "next/image";

export default function OurPromise() {
  return (
    <div className="mt-[60px] flex flex-col items-center justify-center gap-[40px] px-6 md:mt-[80px]">
      <div className="relative max-w-[790px] rounded-3xl bg-gradient-to-r from-pink-500 via-blue-400 to-sky-500 md:rounded-[40px]">
        {/* <div className="absolute z-[-1] h-full w-full rounded-3xl bg-gradient-to-r from-pink-500 via-blue-400 to-sky-500 blur-md md:rounded-[40px]" /> */}
        <div className="flex h-full w-full flex-col items-center rounded-3xl border-1 border-solid border-transparent bg-white bg-clip-padding md:rounded-[40px]">
          <div className="flex flex-col items-center justify-center gap-[28px] p-[40px_24px_0px_24px] md:p-[40px_56px_0px_56px]">
            <h3 className="text-[28px] leading-[28px] font-bold text-mint-800 md:text-4xl">
              Our promise
            </h3>
            <p className="text-[16px] leading-[24px] font-[400] tracking-[0%] text-mint-800 md:text-[20px]">
              &quot;We know how you feel. You&apos;re constantly fighting
              procrastination, and{" "}
              <span className="font-[800]">
                it seems like there&apos;s no way to win.{" "}
              </span>
              Sometimes you see a glimmer of hope, only to{" "}
              <span className="font-[800]">
                fall back into the same old patterns.
              </span>
              <br />
              <br />
              At first you think that missing a deadline or an overdue bill is
              the worst that could happen. But then you realize that those are
              just the beginning.
              <br />
              <br />
              <span className="font-[800]">
                Unsuccessful relationships, unrealized aspirations,
              </span>{" "}
              and <span className="font-[800]">poor mental wellbeing</span> that
              seems to be spiraling out of control - these are the real
              consequences of procrastination.
              <br />
              <br />
              Having helped thousands of procrastinators we’ve learned that the
              procrastinator’s problems run deep and overcoming procrastination
              is not merely just a matter of &quot;getting your act
              together&quot; and &quot;sticking to it&quot;.
              <br />
              <br />
              <span className="font-[800]">There’s a reason why you procrastinate, and understanding that
              reason is the key to success.</span>
              <br />
              <br />
              That&apos;s why there&apos;s no one-size-fits-all solution to
              procrastination. You need to find the right strategy for you - and
              that&apos;s where we come in.
              <br />
              <br />
              Together, <span className="font-[800]">we&apos;ll help you find the root cause of your
              procrastination</span> and design a personalized plan to overcome it
              based on the latest psychological research.
              <br />
              <br />
              We have helped countless people to feel more in control, more
              productive, and more confident and we know we can do the same for
              you!
              <br />
              <br />
            </p>
          </div>
          {/* also problem with export */}
          <Image
            src="gradient-wave.svg"
            alt="wave"
            width={0}
            height={0}
            className="w-full "
          />
          <div className="flex items-center gap-[32px] pb-[40px] mt-6 md:mt-0">
            <Image
              src={getBasePath("/timothy.png")}
              alt="profile"
              width={94}
              height={94}
            />

            <p className="w-[171px] text-[14px] leading-[16px] font-[400] text-mint-800">
              <span className="text-[16px] font-bold">Timothy Decker</span>
              <br />
              <br />
              Head of Science and Research at{" "}
              <span className="font-bold">ShiftMind</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
