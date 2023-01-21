import React, { ReactNode } from "react";
import "./calltoaction-banner.css";

interface CallToActionBannerBodyProps {
  children: ReactNode;
}

export const CallToActionBannerBody = ({
  children,
}: CallToActionBannerBodyProps) => {
  return <p className="ctoa-banner_content">{children}</p>;
};
