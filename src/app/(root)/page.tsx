"use client";
import TopLogo from "../../components/toplogo";
import Summary from "../../components/summary";
import ChoosePlan from "../../components/choosePlan";
export default function Home() {
  return (
    <div className="grid">
      <TopLogo />
      <Summary />
      <ChoosePlan />
      {/* <ChoosePlan /> */}
    </div>
  );
}
