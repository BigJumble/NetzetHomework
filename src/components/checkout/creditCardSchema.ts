import { z } from "zod";

export const creditCardSchema = z.object({
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
