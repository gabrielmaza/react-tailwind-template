import React, { ReactNode } from "react";

interface LayoutSimpleSlider {
  children: ReactNode;
}

export const LayoutSimpleSlider = ({ children }: LayoutSimpleSlider) => {
  return (
    <div className="py-5 px-4 flex flex-col gap-6 container-100vh-180">
      {children}
    </div>
  );
};
