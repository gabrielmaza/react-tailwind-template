import React, { ReactNode } from "react";
import { Link } from "react-router-dom";
import "./calltoaction-banner.css";

interface CallToActionBannerProps {
  children: ReactNode;
}

const CallToActionBanner = ({ children }: CallToActionBannerProps) => {
  return (
    <Link to="#" className="ctoa-banner_wrapp-link">
      <img
        className="ctoa-banner_img"
        src="./src/assets/img/image-1.jpg"
        alt=""
      />
      <div className="ctoa-banner_body">{children}</div>
    </Link>
  );
};

export default CallToActionBanner;
