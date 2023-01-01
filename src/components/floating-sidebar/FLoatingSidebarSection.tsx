import React, { ReactNode } from "react";
import "./floating-sidebar.css";

interface FloatingSidebarSectionProps {
  hrTop?: boolean;
  hrBottom?: boolean;
  children: ReactNode;
}

export const FloatingSidebarSection = ({
  hrTop,
  hrBottom,
  children,
}: FloatingSidebarSectionProps) => {
  return (
    <div className="floating-sidebar_section">
      {hrTop && <hr className="floating-sidebar_section-hr-b" />}
      <div className="floating-sidebar_section-content">{children}</div>
      {hrBottom && <hr className="floating-sidebar_section-hr-t" />}
    </div>
  );
};
