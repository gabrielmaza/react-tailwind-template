import { ChevronRightIcon } from "@heroicons/react/solid";
import React from "react";

const productCategory = [
  {
    id: 1,
    name: "Notebooks",
  },
  {
    id: 2,
    name: "Consoles",
  },
  {
    id: 3,
    name: "Mothers",
  },
  {
    id: 4,
    name: "Processors",
  },
  {
    id: 5,
    name: "Boards",
  },
  {
    id: 6,
    name: "Storage",
  },
];

export const SidebarCategories = () => {
  return (
    <>
      <ul className="fex flex-col gap-2">
        {productCategory.map((item) => (
          <li className="p-2" key={item.id}>
            <a
              href="#"
              className="flex items-center text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <ChevronRightIcon className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
              <span className="ml-3">{item.name}</span>
            </a>
          </li>
        ))}
      </ul>
    </>
  );
};
