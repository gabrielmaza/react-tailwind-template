import React, { ReactNode } from "react";
import "./sidebar.css";

interface SidebarSectionProps {
  hrTop?: boolean;
  hrBottom?: boolean;
  children: ReactNode;
}

export const SidebarSection = ({
  hrTop,
  hrBottom,
  children,
}: SidebarSectionProps) => {
  return (
    <div className="sidebar_section">
      {hrTop && <hr className="sidebar_section-hr-b" />}
      <div className="sidebar_section-content">{children}</div>
      {hrBottom && <hr className="sidebar_section-hr-t" />}
    </div>
  );
};
