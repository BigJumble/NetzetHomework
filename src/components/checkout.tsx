"use client";
import { useAppContext } from "@/context";
import Image from "next/image";
import { Plans } from "@/plans";
import { getBasePath } from "@/utils/path";
import { useState } from "react";
import { z } from "zod";

const creditCardSchema = z.object({
  cardNumber: z
    .string()
    .min(1, "Card number is required")
    .refine((value) => /^[0-9]{16}$/.test(value.replace(/\s/g, "")), {
      message: "Card number must be 16 digits",
    }),
  cardholderName: z
    .string()
    .min(1, "Cardholder name is required")
    .refine((value) => /^[a-zA-Z\s]+$/.test(value), {
      message: "Name can only contain letters and spaces",
    }),
  expiryDate: z
    .string()
    .min(1, "Expiry date is required")
    .refine((value) => /^(0[1-9]|1[0-2])\/\d{2}$/.test(value), {
      message: "Expiry date must be in MM/YY format",
    })
    .refine(
      (value) => {
        const [month, year] = value.split("/");
        const currentDate = new Date();
        const currentYear = currentDate.getFullYear() % 100;
        const currentMonth = currentDate.getMonth() + 1;
        const expYear = parseInt(year, 10);
        const expMonth = parseInt(month, 10);

        if (expYear < currentYear) return false;
        if (expYear === currentYear && expMonth < currentMonth) return false;
        return true;
      },
      {
        message: "Card has expired",
      },
    ),
  cvv: z
    .string()
    .min(1, "CVV is required")
    .refine((value) => /^[0-9]{3,4}$/.test(value), {
      message: "CVV must be 3 or 4 digits",
    }),
});

type CreditCardFormData = z.infer<typeof creditCardSchema>;

export default function CheckoutPopup() {
  const { setCheckoutOpen, selectedPlan } = useAppContext();


  const [formData, setFormData] = useState<CreditCardFormData>({
    cardNumber: "",
    cardholderName: "",
    expiryDate: "",
    cvv: "",
  });

  const [errors, setErrors] = useState<
    Partial<Record<keyof CreditCardFormData, string>>
  >({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    // Format card number with spaces for every 4 digits for display
    if (name === "cardNumber") {
      const digits = value.replace(/\D/g, "");
      if (digits.length <= 16) {
        const formatted = digits.replace(/(.{4})/g, "$1 ").trim();
        setFormData({
          ...formData,
          [name]: formatted,
        });
      }
      return;
    }

    // Format expiry date automatically
    if (name === "expiryDate") {
      const cleaned = value.replace(/\D/g, "");
      if (cleaned.length <= 4) {
        let formatted = cleaned;
        if (cleaned.length > 2) {
          formatted = cleaned.slice(0, 2) + "/" + cleaned.slice(2);
        }
        setFormData({
          ...formData,
          [name]: formatted,
        });
      }
      return;
    }

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});

    try {
      // Validate form data with Zod
      const validatedData = creditCardSchema.parse({
        ...formData,
        cardNumber: formData.cardNumber.replace(/\s/g, ""), // Remove spaces before validation
      });

      console.log("Valid payment information:", validatedData);
    } catch (error) {
      if (error instanceof z.ZodError) {
        // Convert Zod errors to a more usable format
        const newErrors: Partial<Record<keyof CreditCardFormData, string>> = {};
        error.errors.forEach((err) => {
          const path = err.path[0] as keyof CreditCardFormData;
          newErrors[path] = err.message;
        });
        setErrors(newErrors);
      } else {
        console.error("Unexpected error:", error);
      }
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className="fixed top-0 z-2000 flex h-full w-full content-center justify-center bg-[#00000080] backdrop-blur-sm overflow-y-scroll"
      onClick={() => {
        setCheckoutOpen(false);
      }}>
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="grid h-min w-[100%] max-w-[600px] gap-[43px] rounded-[24px] border-1 border-mint-500  bg-white p-[24px_24px_40px_24px]">
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
        <div className="flex flex-col gap-[32px]">
          <div className="flex flex-col gap-[20px]">
            {/* Select Payment Method */}
            <div className="flex flex-col gap-[20px]">
              <p className="text-[20px] font-[600] text-mint-800">
                Select Payment Method
              </p>
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
                  <p className="text-[18px] font-[500]">Pay</p>
                </div>
              </div>
              <div className="flex items-center gap-[12px]">
                <hr className="w-[100%] border-mint-800" />
                <p className="text-[17px] font-[700] text-mint-800">or</p>
                <hr className="w-[100%] border-mint-800" />
              </div>
            </div>
            {/* Credit Card */}
            <form
              onSubmit={handleSubmit}
              className="space-y-[14px] text-[16px] font-[400] text-mint-500 placeholder:leading-[24px] placeholder:font-[400] placeholder:text-mint-50">
              <div className="flex justify-between items-center">
                <p className="text-[20px] font-[600] text-mint-800">
                  Credit Card
                </p>
                <Image src={getBasePath("/cards-2.png")} width={119.11} height={23.26} alt="mastercard visa maestro image"/>
              </div>
              <div className="space-y-2">
                <div
                  className={`relative ${!errors.cardNumber && "bg-gradient-to-r from-pink-500 via-purple-500 to-sky-500"} rounded-[16px]`}>
                  <Image
                    src="credit-card.svg"
                    width={25}
                    height={24}
                    alt="credit card logo"
                    className="absolute top-[17px] left-2"
                  />
                  <input
                    type="text"
                    id="cardNumber"
                    name="cardNumber"
                    value={formData.cardNumber}
                    onChange={handleChange}
                    placeholder="XXXX XXXX XXXX XXXX"
                    className={`h-[60px] w-full rounded-[16px] border-[1px] border-solid bg-[#F7FCFB] bg-clip-padding p-[17px_16px_17px_40px] focus:ring-0 focus:outline-none ${
                      errors.cardNumber
                        ? "border-pink-500 focus:ring-1 focus:ring-pink-500"
                        : "border-transparent focus:border-[2px] focus:p-[16px_15px_16px_39px]"
                    }`}
                    maxLength={19}
                  />
                </div>
                {errors.cardNumber && (
                  <div className="flex gap-[8px]">
                    <Image
                      src="warning.svg"
                      alt="warning logo"
                      width="16"
                      height="15"
                    />
                    <p className="text-sm font-[400] text-pink-500">
                      {errors.cardNumber}
                    </p>
                  </div>
                )}
              </div>

              <div className="space-y-2">
                <input
                  type="text"
                  id="cardholderName"
                  name="cardholderName"
                  value={formData.cardholderName}
                  onChange={handleChange}
                  placeholder="Name on card"
                  className={`w-full rounded-[16px] border bg-[#F7FCFB] p-[17px_16px] focus:ring-1 focus:outline-none ${
                    errors.cardholderName
                      ? "border-pink-500 focus:ring-pink-500"
                      : "border-mint-500 focus:ring-mint-500"
                  }`}
                />
                {errors.cardholderName && (
                  <div className="flex gap-[8px]">
                    <Image
                      src="warning.svg"
                      alt="warning logo"
                      width="16"
                      height="15"
                    />
                    <p className="text-sm font-[400] text-pink-500">
                      {errors.cardholderName}
                    </p>
                  </div>
                )}
              </div>

              <div className="grid grid-cols-2 gap-4 space-y-[16px]">
                <div className="space-y-2">
                  <input
                    type="text"
                    id="expiryDate"
                    name="expiryDate"
                    value={formData.expiryDate}
                    onChange={handleChange}
                    placeholder="MM/YY"
                    className={`w-full rounded-[16px] border bg-[#F7FCFB] p-[17px_16px] focus:ring-1 focus:outline-none ${
                      errors.expiryDate
                        ? "border-pink-500 focus:ring-pink-500"
                        : "border-mint-500 focus:ring-mint-500"
                    }`}
                    maxLength={5}
                  />
                  {errors.expiryDate && (
                    <div className="flex gap-[8px]">
                      <Image
                        src="warning.svg"
                        alt="warning logo"
                        width="16"
                        height="15"
                      />
                      <p className="text-sm font-[400] text-pink-500">
                        {errors.expiryDate}
                      </p>
                    </div>
                  )}
                </div>

                <div className="space-y-2">
                  <input
                    type="password"
                    id="cvv"
                    name="cvv"
                    value={formData.cvv}
                    onChange={handleChange}
                    placeholder="CVV/CVC"
                    className={`w-full rounded-[16px] border bg-[#F7FCFB] p-[17px_16px] focus:ring-1 focus:outline-none ${
                      errors.cvv
                        ? "border-pink-500 focus:ring-pink-500"
                        : "border-mint-500 focus:ring-mint-500"
                    }`}
                    maxLength={4}
                  />
                  {errors.cvv && (
                    <div className="flex gap-[8px]">
                      <Image
                        src="warning.svg"
                        alt="warning logo"
                        width="16"
                        height="15"
                      />
                      <p className="text-sm font-[400] text-pink-500">
                        {errors.cvv}
                      </p>
                    </div>
                  )}
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="h-[67px] w-full rounded-[24px] bg-gradient-to-r from-pink-500 via-purple-500 to-sky-500 font-[600] text-white disabled:opacity-50">
                {isSubmitting ? "Processing..." : "SUBMIT SECURE ORDER"}
              </button>
              {(errors.cvv ||
                errors.expiryDate ||
                errors.cardNumber ||
                errors.cardholderName) && (
                <div className="flex justify-center gap-[8px]">
                  <Image
                    src="warning.svg"
                    alt="warning logo"
                    width="16"
                    height="15"
                  />
                  <p className="text-sm font-[400] text-pink-500">
                    Oops, payment failed! Please try again.
                  </p>
                </div>
              )}
            </form>

          </div>
          <Image src={getBasePath("/cards-3.png")} width={262} height={31} alt="visa mastercard discover maestro image" className="self-center"/>
        </div>
      </div>
    </div>
  );
}
