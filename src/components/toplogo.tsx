"use client";
import Image from "next/image";

// dev note - had to add preserveAspectRatio="none" to the svg to let it strech horizontally
// dev note - it seems that green wave is not the same on mobile and desktop versions, just slightly different, i've done it in a lazy way
export default function TopLogo() {
  return (
    <div>
      <div className="flex h-[100px] w-full content-center justify-center bg-mint-500">
        <Image
          src="/logo.svg"
          alt="logo"
          width={110}
          height={52}
        />
      </div>
      <Image
        src="/green-wave.svg"
        alt="green wave"
        width={0}
        height={0}
        className="max-h-[93px] min-h-[56px] w-full sm:scale-x-[-1]"
      />
    </div>
  );
}
