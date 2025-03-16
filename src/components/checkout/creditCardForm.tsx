"use client";
import { useState } from "react";
import { z } from "zod";
import { creditCardSchema } from "./creditCardSchema";
import Image from "next/image";
import { getBasePath } from "@/utils/path";
type CreditCardFormData = z.infer<typeof creditCardSchema>;

export default function CreditCardForm() {
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

    if (name === "expiryDate") {
      const cleaned = value.replace(/\D/g, "");
      if (cleaned.length <= 4) {
        let formatted = cleaned;
        if (cleaned.length >= 2) {
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
      const validatedData = creditCardSchema.parse({
        ...formData,
        cardNumber: formData.cardNumber.replace(/\s/g, ""),
      });

      console.log("Valid payment information:", validatedData);
    } catch (error) {
      if (error instanceof z.ZodError) {
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
    finally {
      setTimeout(() => {
        setIsSubmitting(false);
      }, 3000);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-[14px] text-[16px] font-[400] text-mint-500 placeholder:leading-[24px] placeholder:font-[400] placeholder:text-mint-50 mt-[20px]">
      <div className="flex items-center justify-between">
        <p className="text-[20px] font-[600] text-mint-800">Credit Card</p>
        <Image
          src={getBasePath("/cards-2.png")}
          width={119.11}
          height={23.26}
          alt="mastercard visa maestro image"
        />
      </div>
      <div className="space-y-2">
        <div
          className={`relative ${
            !errors.cardNumber &&
            "bg-gradient-to-r from-pink-500 via-purple-500 to-sky-500"
          } rounded-[16px]`}>
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
              <p className="text-sm font-[400] text-pink-500">{errors.cvv}</p>
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
          <Image src="warning.svg" alt="warning logo" width="16" height="15" />
          <p className="text-sm font-[400] text-pink-500">
            Oops, payment failed! Please try again.
          </p>
        </div>
      )}
    </form>
  );
}
