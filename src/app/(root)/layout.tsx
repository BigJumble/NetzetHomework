"use client";

import CheckoutPopup from "@/components/checkout";
import Advert from "../../components/advert";
import { useAppContext } from "@/context";
import { useEffect } from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  const { checkoutOpen } = useAppContext();
  
  useEffect(() => {
    if (checkoutOpen) document.body.classList.add("overflow-y-hidden");
    else document.body.classList.remove("overflow-y-hidden");
    return () => {
      document.body.classList.remove("overflow-y-hidden");
    };
  }, [checkoutOpen]);

  return (
    <section>
      <Advert />
      {children}
      {checkoutOpen && <CheckoutPopup />}
    </section>
  );
}
