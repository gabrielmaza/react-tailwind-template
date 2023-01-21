import React, { ReactNode } from "react";
import "./calltoaction-banner.css";

interface CallToActionBannerHeaderProps {
  children: ReactNode;
}

export const CallToActionBannerHeader = ({
  children,
}: CallToActionBannerHeaderProps) => {
  return <h5 className="ctoa-banner_header">{children}</h5>;
};
