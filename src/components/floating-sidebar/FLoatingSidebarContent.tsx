import React, { ReactNode } from "react";
import "./floating-sidebar.css";

interface FloatingSidebarContentProps {
  children: ReactNode;
}

export const FloatingSidebarContent = ({
  children,
}: FloatingSidebarContentProps) => {
  return <div className="floating-sidebar_content">{children}</div>;
};
