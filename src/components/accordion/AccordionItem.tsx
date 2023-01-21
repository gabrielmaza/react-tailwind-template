import { ChevronDownIcon } from "@heroicons/react/solid";
import React, { ReactNode, useState } from "react";
import "./accordion.css";

interface AccordionItemProps {
  title: string;
  children: ReactNode;
  open?: boolean;
}

export const AccordionItem = ({
  title = "Accordion title",
  children,
  open = false,
}: AccordionItemProps) => {
  const [openItem, setOpenItem] = useState(open);
  //   const [indexItem, setIndexItem] = useState("1");
  const handleChangeItem = () => {
    setOpenItem(!openItem);
  };
  return (
    <div className="accordion_item-group">
      <div
        aria-hidden
        className={`flex items-center justify-between w-full p-5 font-medium text-left border border-gray-200 rounded-lg focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer ${
          openItem &&
          "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white rounded-t-lg rounded-b-none"
        }`}
        onClick={handleChangeItem}
      >
        <h2>{title}</h2>
        <ChevronDownIcon
          className={`w-6 h-6 shrink-0 ${openItem && "rotate-180"}`}
        />
      </div>
      <div
        className={` font-light dark:border-gray-700 dark:bg-gray-900 rounded-b-lg overflow-hidden fade-in-bottom transition-all ${
          !openItem
            ? "h-0 opacity-0 p-0 border-none"
            : "h-auto opacity-100 p-5 border border-gray-200"
        }`}
      >
        {children}
      </div>
    </div>
  );
};
