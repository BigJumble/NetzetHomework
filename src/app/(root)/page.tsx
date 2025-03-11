"use client";
import TopLogo from "../../components/toplogo";
import Summary from "../../components/summary";
import ChoosePlan from "../../components/choosePlan";
import ImgBlocks from "@/components/imgBlocks";

export default function Home() {

  return (
    <div className={`grid`}>
      <TopLogo />
      <Summary />
      <ChoosePlan />
      <ImgBlocks/>
      {/* <ChoosePlan /> */}
    </div>
  );
}
