import React from "react";
import { BrandLogo } from "../brand-logo/BrandLogo";

export const SidebarHeader = () => {
  return (
    <div className="sidebar_header">
      {/* <div className="sidebar_logo">
        <span className="sidebar_logo-span">Brand.</span>
      </div> */}
      {/* <img className="sidebar_logo" src="" alt="" /> */}
      <BrandLogo />
    </div>
  );
};
