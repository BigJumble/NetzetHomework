"use client";
import { useAppContext } from "@/context";
import Image from "next/image";
import { useEffect } from "react";
import OrderSummary from "./orderSummary";
import PaymentMethodSelector from "./paymentMethodSelector";
import CreditCardForm from "./creditCardForm";

export default function CheckoutPopup() {
  const { setCheckoutOpen, checkoutOpen } = useAppContext();

  useEffect(() => {
    if (checkoutOpen) document.body.classList.add("overflow-y-hidden");
    else document.body.classList.remove("overflow-y-hidden");
    return () => {
      if (checkoutOpen) document.body.classList.remove("overflow-y-hidden");
    };
  }, [checkoutOpen]);

  return (
    <div
      className={`${!checkoutOpen && "hidden"} fixed top-0 z-2000 p-2 flex h-full w-full content-center justify-center overflow-y-scroll bg-[#00000080] backdrop-blur-sm`}
      onClick={() => {
        setCheckoutOpen(false);
      }}>
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="grid w-[100%] max-w-[600px] my-auto gap-[43px] rounded-[24px] border-1 border-mint-500 bg-white p-[24px_24px_40px_24px]">
        <div className="grid gap-[4px]">
          <Image
            onClick={() => {
              setCheckoutOpen(false);
            }}
            src="close.svg"
            width={20}
            height={20}
            alt="close button"
            className="cursor-pointer justify-self-end"
          />
          <div className="flex w-[100%] flex-col items-center justify-center gap-[11px]">
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
        <OrderSummary />
        <PaymentMethodSelector />
        <CreditCardForm />
      </div>
    </div>
  );
}
