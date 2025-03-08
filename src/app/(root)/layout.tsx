"use client";

import CheckoutPopup from "@/components/checkout";
import Advert from "../../components/advert";
import { useAppContext } from "@/context";

export default function Layout({ children }: { children: React.ReactNode }) {
  const { checkoutOpen } = useAppContext();
  
  return (
    <section>
      <Advert />
      {children}
      {checkoutOpen && <CheckoutPopup />}
    </section>
  );
}
