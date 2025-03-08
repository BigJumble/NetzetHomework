"use client";
import { useEffect, useState } from "react";
import GradientButton from "./gradientButton";

export default function Advert() {
  const [countdown, setCountdown] = useState(600);

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown((prevCount) => {
        if (prevCount <= 0) {
          clearInterval(interval);
          return 0;
        }
        return prevCount - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="sticky top-0 z-1000 flex h-[80px] items-center justify-center gap-[24px] bg-mint-700 px-[24px] sm:gap-[36px]">
      <div className="flex items-center gap-[8px] sm:gap-[16px]">
        <p className="w-[74px] text-base leading-[17.2px] font-[400] sm:w-auto sm:text-lg sm:font-[500]">
          The offer expires in
        </p>
        <div className="flex items-center gap-[4px]">
          <div className="h-[40px] w-[40px] content-center rounded-[4px] bg-mint-300 p-[4px_6px] sm:h-[48px] sm:w-[48px]">
            <p className="text-center text-base leading-[17.2px] font-[400] sm:text-[20px] sm:leading-[21.5px] sm:font-[500]">
              {Math.floor(countdown / 60) < 10
                ? `0${Math.floor(countdown / 60)}`
                : Math.floor(countdown / 60)}
            </p>
            <p className="text-center text-xs font-[400]">min</p>
          </div>
          <p className="text-base font-[400] sm:text-xs sm:font-[500]">:</p>
          <div className="h-[40px] w-[40px] content-center rounded-[4px] bg-mint-300 p-[4px_6px] sm:h-[48px] sm:w-[48px]">
            <p className="text-center text-base leading-[17.2px] font-[400] sm:text-[20px] sm:leading-[21.5px] sm:font-[500]">
              {countdown % 60}
            </p>
            <p className="line text-center text-xs leading-[12.9px] font-[400]">
              sec
            </p>
          </div>
        </div>
      </div>
      
      <GradientButton onClick={()=>{}} className="h-[48px] w-[146px] min-w-[146px] rounded-[8px] text-[14px] sm:w-[240px]">GET MY PLAN</GradientButton>
    </div>
  );
}
