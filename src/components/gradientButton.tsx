"use client";

// using a simple hover effect for now
export default function GradientButton({
  children,
  className,
  onClick,
}: {
  children: React.ReactNode;
  className?: string;
  onClick: () => void;
}) {
  return (
    <div
      onClick={onClick}
      className={`flex cursor-pointer items-center justify-center bg-gradient-to-r from-pink-500 via-purple-500 to-sky-500 font-[600] hover:scale-99 active:scale-97 ${className}`}>
      <span>{children}</span>
    </div>
  );
}
