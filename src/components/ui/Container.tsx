import { type ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  className?: string;
};

export default function Container({
  children,
  className = "",
}: ContainerProps) {
  return (
    <div className={`max-w-[1750px] mx-auto px-1 sm:px-2 lg:px-4 ${className}`}>
      {children}
    </div>
  );
}
