"use client";
import { useAppContext } from "@/context";
import { Plans } from "@/plans";

export default function OrderSummary() {
  const { selectedPlan } = useAppContext();

  return (
    <div className="flex flex-col gap-[16px] mt-[43px]">
      <h3 className="text-[20px] font-[600] text-mint-800">Order Summary</h3>
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
  );
}
