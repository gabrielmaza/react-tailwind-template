import { ChevronDownIcon } from "@heroicons/react/solid";
import React, { useState, ReactNode } from "react";
import useClickAwayDiv from "../../../hooks/useClickAwayDiv";
import { useHandleShow } from "../../../hooks/useHandleShow";
interface DropdownProps {
  label?: string;
  icon?: any;
  children: ReactNode;
}

const Dropdown = ({ label, icon, children }: DropdownProps) => {
  const { show, handleChange, handleClose } = useHandleShow();

  const [divRef] = useClickAwayDiv<HTMLDivElement>(handleClose);

  return (
    <div ref={divRef} className="w-full">
      <button
        className="w-full inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-lg py-2 px-3 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
        type="button"
        onClick={handleChange}
      >
        {icon}
        {label}
        <ChevronDownIcon className="ml-2 w-4 h-4" />
      </button>
      {/* Dropdown menu */}
      <div
        className={`absolute z-10 w-44 max-h-[300px] overflow-y-auto mt-2 bg-white rounded-lg divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600 border border-gray-600 dark:border-gray-500 ${
          !show && "hidden"
        }`}
      >
        {children}
      </div>
    </div>
  );
};

export default Dropdown;
