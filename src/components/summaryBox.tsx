"use client";
export enum SummaryBoxType {
  HIGH = "HIGH",
  MODERATE = "MODERATE",
}

export default function SummaryBox({
  type,
  title,
  description,
}: {
  type: SummaryBoxType;
  title: string;
  description: string;
}) {
  return (
    <div
      className={`flex w-[342px] flex-col gap-[24px] rounded-[24px] border-1 bg-mint-700 p-[24px] lg:w-[472px] lg:p-[24px_40px] ${type === SummaryBoxType.HIGH ? "border-pink-500" : "border-sky-500"}`}>
      <div className="flex flex-col gap-[8px]">
        <p className="text-[20px] leading-[24.2px] font-[700] lg:text-[24px] lg:leading-[29.05px]">
          {title}
        </p>
        <p
          className={`${type === SummaryBoxType.HIGH ? "text-pink-500" : "text-sky-500"} text-[20px] leading-[24.2px] font-[800]`}>
          {type}
        </p>
        <p className="text-[18px] leading-[21.78px] font-[500]">
          {description}
        </p>
      </div>
      <div className="relative flex h-[12px] flex-col">
        <div className="absolute top-0 h-[12px] w-full rounded-full bg-mint-200"></div>
        <div
          className={`h-[12px] w-[66%] ${type === SummaryBoxType.HIGH ? "bg-pink-500" : "bg-sky-500"} absolute top-0 rounded-full`}></div>
      </div>
    </div>
  );
}
