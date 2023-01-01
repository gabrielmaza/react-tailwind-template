import React from "react";
import {
  BellIcon,
  CogIcon,
  DesktopComputerIcon,
  HeartIcon,
  PlusCircleIcon,
  SortAscendingIcon,
  SortDescendingIcon,
  SupportIcon,
  UserIcon,
} from "@heroicons/react/solid";
import "./navbar.css";
import { Link } from "react-router-dom";
import "./navbar.css";

export const NavbarMenu = () => {
  return (
    <ul className="navbar-menu_wrapp">
      <li>
        <Link
          to="/notifications"
          title="Notifications"
          className="navbar-menu_link"
        >
          <BellIcon />
          <span className="top-1 right-1 absolute  w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></span>
        </Link>
      </li>
      <li>
        <Link to="/settings" title="Settings" className="navbar-menu_link">
          <CogIcon />
        </Link>
      </li>
    </ul>
  );
};
