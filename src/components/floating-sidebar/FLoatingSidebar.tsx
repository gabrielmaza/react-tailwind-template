import { XIcon } from "@heroicons/react/solid";
import React, { useState } from "react";
import "./floating-sidebar.css";
import { FloatingSidebarNav } from "./FLoatingSidebarNav";
import { FloatingSidebarContent } from "./FLoatingSidebarContent";
import { FloatingSidebarSection } from "./FLoatingSidebarSection";

interface FLoatingSidebarProps {
  toggleSidebar: any;
  handleClick: () => void;
  left?: boolean;
  right?: boolean;
  title: string;
}

const FLoatingSidebar = ({
  toggleSidebar,
  handleClick,
  left = false,
  right = false,
  title,
}: FLoatingSidebarProps) => {
  return (
    <div className="flex flex-auto flex-col">
      <div
        className={`floating-sidebar_wrapp ${left && "left"} ${
          right && "right"
        } ${!toggleSidebar && "hidden"}`}
      >
        <FloatingSidebarContent>
          <button
            className="floating-sidebar_mobile-close-btn"
            type="button"
            onClick={handleClick}
          >
            <XIcon />
          </button>
          <FloatingSidebarSection hrBottom>
            <h2 className="floating-sidebar_title">{title}</h2>
          </FloatingSidebarSection>
        </FloatingSidebarContent>
      </div>
      <div
        className={`floating-custom-sidebar-overlay ${
          !toggleSidebar ? "hidden" : ""
        }`}
        onClick={handleClick}
      />
    </div>
  );
};

export default FLoatingSidebar;
