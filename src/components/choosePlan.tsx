"use client";
import Image from "next/image";
import { useAppContext } from "@/context";
import PlanRadio from "./planRadio";
import { Plan, Plans } from "@/plans";
import GradientButton from "./gradientButton";

export default function ChoosePlan() {
  const { selectedPlan, setCheckoutOpen } = useAppContext();
  return (
    <div className="grid">
      <Image
        src="/sky-wave-desktop.svg"
        alt="sky color wave"
        width={0}
        height={0}
        className="hidden h-[162px] w-full translate-y-[2px] lg:block"
      />
      <Image
        src="/sky-wave-mobile.svg"
        alt="sky color wave"
        width={0}
        height={0}
        className="block h-[51px] w-full translate-y-[2px] lg:hidden"
      />
      <div className="flex w-full flex-col items-center justify-center gap-[54px] bg-mint-750 p-[40px_24px]">
        <div className="flex w-full flex-col items-center justify-center gap-[40px] lg:gap-[54px]">
          <h3 className="text-[28px] font-[700] lg:text-[36px]">
            Choose your plan
          </h3>
          <div className="flex flex-col gap-[16px] xl:flex-row xl:items-end">
            <PlanRadio plan={Plan.One}></PlanRadio>
            <PlanRadio plan={Plan.Two} topChoice></PlanRadio>
            <PlanRadio plan={Plan.Three}></PlanRadio>
          </div>
        </div>
        <div className="flex w-full flex-col items-center justify-center gap-[32px]">
          <div className="flex w-full flex-col items-center justify-center gap-[16px]">
            <p className="w-[342px] text-center text-[14px] leading-[20px] font-[400] text-white xl:w-[672px]">
              By selecting a payment method, you agree to the Terms & Conditions
              and Privacy Policy.
            </p>
            <GradientButton
              onClick={() => {setCheckoutOpen(true)}}
              className="h-[67px] w-[342px] rounded-[24px] text-[16px] xl:w-[480px]">
              GET MY PLAN
            </GradientButton>
          </div>
          <p className="w-[342px] text-center text-[12px] leading-[15px] font-[400] text-white xl:w-[672px]">
            {Plans[selectedPlan].enrollement}
          </p>
          <div className="flex flex-col items-center gap-[24px] xl:flex-row xl:gap-[40px]">
            <div className="flex w-[342px] items-center gap-[19px] xl:w-[371px] xl:gap-[16px]">
              <Image
                src="/guarantee.svg"
                alt="money back guarantee icon"
                width={52}
                height={52}
              />
              <p className="mt-[3px] text-xs leading-[16px] font-[500] xl:text-[14px]">
                <span className="text-[18px] font-[800] xl:text-[20px]">
                  RISK-FREE GUARANTEE
                </span>{" "}
                cancel at
                <br />
                any time without being charged the full price
              </p>
            </div>
            <Image
              src="/cards.png"
              alt="visa, mastercard, visa electron and maestro icons"
              width={263}
              height={38}
            />
          </div>
        </div>
      </div>
      <Image
        src="/sky-wave-desktop.svg"
        alt="sky color wave"
        width={0}
        height={0}
        className="hidden h-[162px] w-full translate-y-[-2px] scale-y-[-1] lg:block"
      />
      <Image
        src="/sky-wave-mobile.svg"
        alt="sky color wave"
        width={0}
        height={0}
        className="block h-[51px] w-full translate-y-[-2px] scale-x-[-1] scale-y-[-1] lg:hidden"
      />
    </div>
  );
}
