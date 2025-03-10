"use client";
import { useAppContext } from "@/context";
import Image from "next/image";
import { Plans } from "@/plans";
export default function CheckoutPopup() {
  const { setCheckoutOpen, selectedPlan } = useAppContext();

  return (
    <div
      className="fixed top-0 z-2000 flex h-full w-full content-center items-center justify-center bg-[#00000088]"
      onClick={() => {
        setCheckoutOpen(false);
      }}>
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="grid h-min w-[100%] max-w-[600px] gap-[43px] rounded-[24px] border-1 border-mint-500 bg-white p-[24px_24px_40px_24px]">
        <div className="grid gap-[4px]">
          <Image
            onClick={() => {
              setCheckoutOpen(false);
            }}
            src="close.svg"
            width={20}
            height={20}
            alt="close button"
            className="justify-self-end"
          />

          <div className="flex w-[100%] flex-col items-center justify-center gap-[11px]">
            {/* for some reason this graphic uses different font, I left it as default*/}
            <div className="relative flex w-[85%] items-center justify-between">
              <div className="z-1 h-[14px] min-h-[14px] w-[14px] min-w-[14px] rounded-full bg-mint-450"></div>
              <div className="absolute left-[7px] z-0 h-[3px] w-[calc(50%-7px)] bg-mint-450"></div>
              <div className="z-1 h-[14px] min-h-[14px] w-[14px] min-w-[14px] rounded-full border-[2.5px] border-solid border-mint-450 bg-white"></div>
              <div className="absolute left-[50%] z-0 h-[3px] w-[calc(50%-7px)] bg-gray-300"></div>
              <div className="z-1 h-[14px] min-h-[14px] w-[14px] min-w-[14px] rounded-full border-[2.5px] border-solid border-gray-300 bg-white"></div>
            </div>
            <div className="flex w-[94%] justify-between text-[12px] font-[600] text-mint-800">
              <p>Select plan</p>
              <p className="mr-[10px]">Payment</p>
              <p className="mr-[10px]">Receipt</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[16px]">
          <h3 className="text-[20px] font-[600] text-mint-800">
            Order Summary
          </h3>
          <div className="flex w-[100%] flex-col gap-[16px] rounded-[16px] border-1 border-solid border-mint-50 p-[16px]">
            <div className="flex h-[19px] items-center justify-between">
              <p className="text-[14px] leading-none font-[400] text-mint-800">
                {Plans[selectedPlan].checkoutTitle}
              </p>
              <p className="text-[16px] leading-none font-[600] text-mint-800">
                {Plans[selectedPlan].checkoutPrice}
              </p>
            </div>
            {Plans[selectedPlan].checkoutDiscount && (
              <>
                <hr className="border-mint-50" />
                <div className="flex h-[19px] items-center justify-between">
                  <p className="text-[14px] leading-none font-[400] text-pink-500">
                    {Plans[selectedPlan].checkoutDiscount}
                  </p>
                  <p className="text-[16px] leading-none font-[600] text-pink-500">
                    -{Plans[selectedPlan].checkoutDiscountAmount}
                  </p>
                </div>
              </>
            )}
            <hr className="border-mint-50" />
            <div className="flex items-center justify-between">
              <p className="text-[16px] font-[600] text-mint-800">Total</p>
              <p className="text-[24px] leading-[29px] font-[600] text-mint-800">
                {Plans[selectedPlan].checkoutTotal}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
