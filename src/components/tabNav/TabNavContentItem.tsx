import React, { ReactNode } from "react";

interface TabNavContentItemProps {
  toggleState: number;
  index: number;
  children: ReactNode;
}

export const TabNavContentItem = ({
  toggleState,
  index,
  children,
}: TabNavContentItemProps) => {
  return (
    <div className={`content ${toggleState === index && "active"}`}>
      {children}
    </div>
  );
};
