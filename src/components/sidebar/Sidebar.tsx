import { ChevronRightIcon, MenuAlt3Icon, XIcon } from "@heroicons/react/solid";
import React, { useState } from "react";
import "./sidebar.css";
import useClickAwayDiv from "../../hooks/useClickAwayDiv";
import "./input-toggle-switch.css";
import InputToggleSwitch from "../inputs/toggle-switch/InputToggleSwitch";

const productCategory = [
  {
    id: 1,
    name: "Equipos y notebooks",
  },
  {
    id: 2,
    name: "Consolas",
  },
  {
    id: 3,
    name: "Mothers",
  },
  {
    id: 4,
    name: "Procesadores",
  },
  {
    id: 5,
    name: "Placas",
  },
  {
    id: 6,
    name: "Almacenamiento",
  },
  {
    id: 7,
    name: "Equipos y notebooks",
  },
  {
    id: 8,
    name: "Memorias RAM",
  },
  {
    id: 9,
    name: "Gabinetes",
  },
  {
    id: 10,
    name: "Monitores",
  },
  {
    id: 11,
    name: "Teclado y mouse",
  },
  {
    id: 12,
    name: "Audio",
  },
  {
    id: 13,
    name: "Perifericos",
  },
  {
    id: 14,
    name: "Conectividad",
  },
  {
    id: 15,
    name: "Ropa, bolsos y mochilas",
  },
  {
    id: 16,
    name: "Oficina",
  },
  {
    id: 17,
    name: "Celulares",
  },
  {
    id: 18,
    name: "Cargadores y cables",
  },
];

const Sidebar = (props) => {
  const [aside, setAside] = useState(false);
  const handleClick = () => setAside(!aside);
  const close = () => setAside(false);
  const [divRef] = useClickAwayDiv<HTMLDivElement>(close);

  return (
    <>
      <div className="w-fit flex items-center" onClick={handleClick}>
        {!aside ? (
          <MenuAlt3Icon className="text-white w-7 cursor-pointer" />
        ) : (
          <XIcon
            className="text-white w-7 cursor-pointer"
            onClick={close}
            aria-hidden
          />
        )}
      </div>
      <div
        ref={divRef}
        className={`custom-sidebar_wrapp ${!aside ? "hidden" : ""}`}
      >
        <XIcon
          className="absolute right-[-32px] text-white w-7 cursor-pointer"
          onClick={close}
          aria-hidden
        />
        <div className="custom-sidebar">
          <div className="p-3">
            <InputToggleSwitch label="Offers" />
          </div>

          <div className="p-3">
            <InputToggleSwitch label="Toggle me" />
          </div>

          <div className="p-3">
            <h2 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              Categories
            </h2>
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
          </div>
        </div>
      </div>
      <div className={`custom-sidebar-overlay ${!aside ? "hidden" : ""}`} />
    </>
  );
};

export default Sidebar;
