"use client";
import TopLogo from "../../components/toplogo";
import Summary from "../../components/summary";
import ChoosePlan from "../../components/choosePlan";
import ImgBlocks from "@/components/imgBlocks";
import FaceBlock from "@/components/faceBlock";
import BrainBlock from "@/components/brainBlock";
import Reviews from "@/components/reviews";
import OurPromise from "@/components/ourPromise";
import FAQ from "@/components/faq";
export default function Home() {

  return (
    <div className={`grid`}>
      <TopLogo />
      <Summary />
      <ChoosePlan />
      <ImgBlocks/>
      <FaceBlock />
      <BrainBlock />
      <Reviews />
      <ChoosePlan /> 
      <OurPromise />
      <FAQ />
    </div>
  );
}
