import React, { ReactNode } from "react";

interface HomeContainerProps {
  children: ReactNode;
}

export const LayoutSimpleSliderHome = ({ children }: HomeContainerProps) => {
  return (
    <div className="py-5 px-4 flex flex-col gap-6 container-100vh-180">
      {children}
    </div>
  );
};
