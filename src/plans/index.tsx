'use client'
import React from "react";

export enum Plan {
  One,
  Two,
  Three,
}

type PlanType = {
  [key in Plan]: {
    title: string;
    desc: string;
    discount?: string;
    price: string;
    currency: string;
    dayPrice: string;
    dayDiscount?: string;
    enrollement: React.ReactElement; // sure, it might not be a good practice, but it makes it incredibly convenient to decorate text
    checkoutTitle: string;
    checkoutPrice: string;
    checkoutDiscountAmount?: string;
    checkoutDiscount?: string;
    checkoutTotal: string;
  };
};

export const Plans: PlanType = {
  [Plan.One]: {
    title: "3-month plan",
    desc: "Billed every 3 month",
    discount: "USD 125.98",
    price: "USD 62.99",
    currency: "USD",
    dayPrice: "0.69",
    dayDiscount: "USD 1.38 per day",
    enrollement: (
      <>
        You are enrolling in 3 Month Plan subscription to
        <br />
        https://shiftmind.app/ service with the discount price $62.99. You agree
        that the plan you selected will automatically be extended at the full
        price for successive renewal periods and you will be charged $125.98
        every 3 months until you cancel the subscription. Payments will be
        charged from the card you specified here. You can cancel your
        subscription by contacting our customer support team via email at
        hello@shiftmind.app. Terms of Service the charge will appear on your
        bill as &quot;ShiftMind&quot;.
      </>
    ),
    checkoutTitle: "3-Month Plan",
    checkoutPrice: "$125.98",
    checkoutDiscountAmount: "$62.99",
    checkoutDiscount: "Discount (50%)",
    checkoutTotal: "$62.99",
  },
  [Plan.Two]: {
    title: "1-month plan",
    desc: "Billed every 1 month",
    discount: "USD 59.98",
    price: "USD 29.99",
    currency: "USD",
    dayPrice: "0.99",
    dayDiscount: "USD 1.98 per day",
    //changed "every 1 months" to "every 1 month"
    enrollement: (
      <>
        You are enrolling in 1 Month Plan subscription to
        <br />
        https://shiftmind.app/ service with the discount price $29.99. You agree
        that the plan you selected will automatically be extended at the full
        price for successive renewal periods and you will be charged $59.98
        every 1 month until you cancel the subscription. Payments will be
        charged from the card you specified here. You can cancel your
        subscription by contacting our customer support team via email at
        hello@shiftmind.app. Terms of Service the charge will appear on your
        bill as &quot;ShiftMind&quot;.
      </>
    ),
    checkoutTitle: "1-Month Plan",
    checkoutPrice: "$59.98",
    checkoutDiscountAmount: "$29.99",
    checkoutDiscount: "Discount (50%)",
    checkoutTotal: "$29.99",
  },
  [Plan.Three]: {
    title: "6-month plan",
    desc: "Billed every 6 month",
    discount: "USD 179.98",
    price: "USD 89.99",
    currency: "USD",
    dayPrice: "0.49",
    dayDiscount: "USD 0.98 per day",
    enrollement: (
      <>
        You are enrolling in 6 Month Plan subscription to
        <br />
        https://shiftmind.app/ service with the discount price $89.99. You agree
        that the plan you selected will automatically be extended at the full
        price for successive renewal periods and you will be charged $179.98
        every 6 months until you cancel the subscription. Payments will be
        charged from the card you specified here. You can cancel your
        subscription by contacting our customer support team via email at
        hello@shiftmind.app. Terms of Service the charge will appear on your
        bill as &quot;ShiftMind&quot;.
      </>
    ),
    checkoutTitle: "6-Month Plan",
    checkoutPrice: "$179.98",
    checkoutDiscountAmount: "$89.99",
    checkoutDiscount: "Discount (50%)",
    checkoutTotal: "$89.99",
  },
};
