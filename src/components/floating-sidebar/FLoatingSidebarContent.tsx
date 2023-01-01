import React, { ReactNode } from "react";
import "./floating-sidebar.css";

interface SidebarContentProps {
  children: ReactNode;
}

export const SidebarContent = ({ children }: SidebarContentProps) => {
  return <div className="sidebar_content">{children}</div>;
};
