import Image from "next/image";
import { getBasePath } from "@/utils/path";

export default function PaymentMethodSelector() {
  return (
    <div className="flex flex-col gap-[20px]">
      <p className="text-[20px] font-[600] text-mint-800">Select Payment Method</p>
      <div className="flex gap-[11px]">
        <div className="flex h-[60px] w-[100%] items-center justify-center rounded-[24px] bg-[#FFC33A]">
          <Image
            src={getBasePath("/paypal.png")}
            alt="paypal logo"
            width={79.88}
            height={19.1}
          />
        </div>
        <div className="flex h-[60px] w-[100%] items-center justify-center gap-[5px] rounded-[24px] bg-black">
          <Image
            src="apple-logo.svg"
            alt="apple logo"
            width={18}
            height={22}
          />
          <p className="text-[18px] font-[500] mt-[2px]">Pay</p>
        </div>
      </div>
      <div className="flex items-center gap-[12px]">
        <hr className="w-[100%] border-mint-800" />
        <p className="text-[17px] font-[700] text-mint-800">or</p>
        <hr className="w-[100%] border-mint-800" />
      </div>
    </div>
  );
}
