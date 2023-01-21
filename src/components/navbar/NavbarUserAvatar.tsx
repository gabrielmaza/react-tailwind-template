import React from "react";
import { Link } from "react-router-dom";
import { useHandleShow } from "../../hooks/useHandleShow";
import useClickAwayDiv from "../../hooks/useClickAwayDiv";
import Button from "../button/Button";
import { UserCircleIcon, UserIcon } from "@heroicons/react/solid";

interface NavbarUserAvatarProps {
  userProfileImg?: string;
}

export const NavbarUserAvatar = ({ userProfileImg }: NavbarUserAvatarProps) => {
  const { show, handleChange, handleClose } = useHandleShow();

  const [divRef] = useClickAwayDiv<HTMLDivElement>(handleClose);

  return (
    <div className="w-auto h-auto relative">
      <div
        ref={divRef}
        className="flex items-center space-x-4 cursor-pointer"
        onClick={handleChange}
        aria-hidden
      >
        {userProfileImg ? (
          <img
            className="w-10 h-10 rounded-full"
            src={userProfileImg}
            alt="User Profile img"
          />
        ) : (
          <UserCircleIcon className="text-white bg-gray-400 cursor-pointer rounded-3xl w-10 h-10" />
        )}
        <div className="flex flex-col font-medium dark:text-white overflow-hidden">
          <span>Jese Leos</span>
          <span className="text-sm text-gray-500 dark:text-gray-400 truncate">
            jeseleos@emailexample.com
          </span>
        </div>
      </div>
      {/* <!-- Dropdown menu --> */}
      <div
        id="userDropdown"
        className={`absolute z-10 w-44 max-h-[300px] overflow-y-auto mt-2 bg-white rounded-lg divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600 border border-gray-600 dark:border-gray-500 ${
          !show && "hidden"
        }`}
      >
        <div className="py-3 px-4 text-sm text-gray-900 dark:text-white">
          <span>ID: 00234</span>
        </div>
        <ul
          className="py-1 text-sm text-gray-700 dark:text-gray-200"
          aria-labelledby="avatarButton"
        >
          <li>
            <Link
              to="#"
              className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Dashboard
            </Link>
          </li>
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
        <div className="py-2 px-4">
          <Button color="transparent-bordered" type="button" label="Sign out" />
        </div>
      </div>
    </div>
  );
};
