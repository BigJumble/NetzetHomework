"use client";

import CheckoutPopup from "@/components/checkout/checkoutPopup";
import Advert from "../../components/advert";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section>
      <Advert />
      {children}
      <CheckoutPopup />
    </section>
  );
}
