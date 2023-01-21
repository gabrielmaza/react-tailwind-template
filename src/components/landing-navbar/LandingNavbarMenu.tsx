import React from "react";
import { PlayIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";
import "./landing-navbar.css";

export const LandingNavbarMenu = () => {
  return (
    <ul className="navbar-menu_wrapp">
      <li>
        <Link to="/" title="Explore" className="navbar-menu_link">
          <PlayIcon />
        </Link>
      </li>
    </ul>
  );
};
