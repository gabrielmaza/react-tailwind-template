import React, { ReactNode } from "react";

interface TabNavProps {
  children: ReactNode;
}

export const TabNav = ({ children }: TabNavProps) => {
  return <div className="nav-tabs">{children}</div>;
};
