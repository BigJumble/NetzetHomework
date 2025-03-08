"use client";

import { createContext, useContext, useState } from "react";
import { Plan } from "@/plans";

type AppContextType = {
    selectedPlan: Plan;
    setSelectedPlan: (plan: Plan) => void;
    checkoutOpen: boolean;
    setCheckoutOpen: (plan: boolean) => void;
};

const AppContext = createContext<AppContextType>({
    selectedPlan: Plan.Two,
    setSelectedPlan: () => {},
    checkoutOpen: false,
    setCheckoutOpen: () => {},
});

export function AppWrapper({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const [selectedPlan, setSelectedPlan] = useState(Plan.Two);
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  return (
    <AppContext.Provider value={{ selectedPlan, setSelectedPlan, checkoutOpen, setCheckoutOpen }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
