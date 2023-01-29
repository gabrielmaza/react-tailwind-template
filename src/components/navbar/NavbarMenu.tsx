import React from "react";
import { BellIcon, CogIcon } from "@heroicons/react/solid";
import "./navbar.css";
import { Link } from "react-router-dom";
import "./navbar.css";
import { useHandleShow } from "../../hooks/useHandleShow";
import useClickAwayDiv from "../../hooks/useClickAwayDiv";
import Button from "../button/Button";

interface PropsNavbarMenu {
  floatingSidebar: boolean;
  handleFloatingSidebar: () => void;
}

export const NavbarMenu = ({
  floatingSidebar,
  handleFloatingSidebar,
}: PropsNavbarMenu) => {
  const { show, handleChange, handleClose } = useHandleShow();

  const [divRef] = useClickAwayDiv<HTMLDivElement>(handleClose);

  return (
    <div className="navbar-menu_wrapp">
      <div>
        <div
          title="Notifications"
          className="navbar-menu_link"
          onClick={handleFloatingSidebar}
          aria-hidden
        >
          <BellIcon />
          <span className="top-1 right-1 absolute  w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></span>
        </div>
      </div>
      <div ref={divRef}>
        <div
          title="Settings"
          className="navbar-menu_link"
          onClick={handleChange}
          aria-hidden
        >
          <CogIcon />
        </div>
        {/* <!-- Dropdown menu --> */}
        <div
          id="userDropdown"
          className={`absolute z-10 w-44 max-h-[300px] overflow-y-auto mt-2 bg-white rounded-lg divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600 border border-gray-600 dark:border-gray-500 ${
            !show && "hidden"
          }`}
        >
          <ul className="py-1 text-sm text-gray-700 dark:text-gray-200">
            <li>
              <Link
                to="#"
                className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Profile settings
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Earnings
              </Link>
            </li>
          </ul>
          <div className="py-3 px-4">
            <Button
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
                  />
                </svg>
              }
              color="transparent-bordered"
              type="button"
              label="Sign out"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
