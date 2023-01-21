import React, { ReactNode } from "react";

interface TabNavProps {
  children: ReactNode;
}

export const TabContent = ({ children }: TabNavProps) => {
  return <div className="content-tabs">{children}</div>;
};
