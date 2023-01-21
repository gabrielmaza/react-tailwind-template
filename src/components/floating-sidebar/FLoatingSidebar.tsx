import { XIcon } from "@heroicons/react/solid";
import React, { Children, ReactNode, useState } from "react";
import "./floating-sidebar.css";
import { FloatingSidebarNav } from "./FloatingSidebarNav";
import { FloatingSidebarContent } from "./FloatingSidebarContent";
import { FloatingSidebarSection } from "./FloatingSidebarSection";
import NotificationCard from "../cards/NotificationCard";

interface FloatingSidebarProps {
  toggleSidebar: any;
  handleClick: () => void;
  left?: boolean;
  right?: boolean;
  children: ReactNode;
}

const FloatingSidebar = ({
  toggleSidebar,
  handleClick,
  left = false,
  right = false,
  children,
}: FloatingSidebarProps) => {
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
          {children}
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

export default FloatingSidebar;
