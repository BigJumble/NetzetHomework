import { useAppContext } from "@/context";
import { Plan, Plans } from "@/plans";

export default function PlanRadio({
  plan,
  topChoice = false,
}: {
  plan: Plan;
  topChoice?: boolean;
}) {
  const { selectedPlan, setSelectedPlan } = useAppContext();

  return (
    <div
      onClick={() => setSelectedPlan(plan)}
      className={`group rounded-[24px] bg-blue-400 transition-all hover:shadow-[0px_0px_34px_0px_rgba(90,_145,_255,_0.6)] ${
        selectedPlan === plan &&
        "shadow-[0px_0px_34px_0px_rgba(90,_145,_255,_0.6)]"
      } `}>
      {topChoice && (
        <p className="text-center text-[14px] leading-[41px] font-[700] text-white">
          TOP CHOICE FOR BEGINNERS
        </p>
      )}
      <div
        className={`w-[342px] rounded-[24px] transition-all lg:w-[378px] ${
          selectedPlan === plan
            ? "bg-transparent"
            : "bg-gradient-to-r from-white to-mint-100 group-hover:bg-gradient-to-r group-hover:from-transparent group-hover:to-transparent"
        }`}>
        <div
          className={`flex h-full w-auto cursor-pointer justify-between rounded-[24px] border-2 border-solid p-[24px_16px] transition-[border] group-hover:border-blue-400 ${
            selectedPlan === plan
              ? "border-blue-400 bg-white"
              : "border-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-mint-100"
          } ${topChoice && "xl:p-[32px_16px]"}`}>
          <div className="flex gap-[16px]">
            <div>
              <div
                className={`h-[20px] w-[20px] rounded-full transition-all ${
                  selectedPlan === plan
                    ? "border-[6px] border-blue-400 bg-white"
                    : "bg-mint-50 group-hover:border-[6px] group-hover:border-blue-400 group-hover:bg-white"
                }`}></div>
            </div>
            <div className="grid gap-[8px]">
              <p className="text-[20px] leading-[24px] font-[700] text-mint-800">
                {Plans[plan].title}
              </p>
              <p className="text-[12px] leading-[15px] font-[400] text-mint-500">
                {Plans[plan].desc}
              </p>
              <p className="text-[12px] leading-none font-[400]">
                {Plans[plan].discount && (
                  <>
                    <span className="text-pink-500 line-through">
                      {Plans[plan].discount}
                    </span>
                    <span> </span>
                  </>
                )}
                <span className="font-[700] text-mint-500">
                  {Plans[plan].price}
                </span>
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-[4px]">
            <p className="flex items-start gap-[4px] text-mint-800">
              <span className="p-[5px_0px] text-[14px] leading-[17px] font-[600] tracking-normal">
                {Plans[plan].currency}
              </span>
              <span className="text-[32px] leading-[39px] font-[700] tracking-normal">
                {Plans[plan].dayPrice}
              </span>
            </p>
            {Plans[plan].dayDiscount && (
              <p className="text-right text-[12px] leading-none font-[400] text-pink-500 line-through">
                {Plans[plan].dayDiscount}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
