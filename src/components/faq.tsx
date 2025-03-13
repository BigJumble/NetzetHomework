"use client";
import Image from "next/image";

export default function FAQ() {
    return (
        <div className="mt-[60px] lg:mt-[80px]">
            <Image src="green-wave.svg" alt="wave" width={0} height={0} className="w-full rotate-180 scale-x-[-1] hidden xl:block h-[160px]" />
            <Image src="bottom-wave.svg" alt="wave" width={0} height={0} className="w-full block xl:hidden h-[83px]" />
        </div>
    );
}
