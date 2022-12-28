import React, { useState } from "react";
import {
  ArrowNarrowRightIcon,
  BellIcon,
  DesktopComputerIcon,
  HeartIcon,
  LogoutIcon,
  MenuAlt2Icon,
  PlusCircleIcon,
  PlusIcon,
  SortAscendingIcon,
  SortDescendingIcon,
  SupportIcon,
  UserIcon,
  XIcon,
} from "@heroicons/react/solid";
import "./navbar.css";
import { Link } from "react-router-dom";
import ButtonLink from "../button/ButtonLink";
import Button from "../button/Button";
import useClickAwayDiv from "../../hooks/useClickAwayDiv";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  const close = () => setNav(false);
  const [divRef] = useClickAwayDiv<HTMLDivElement>(close);

  return (
    <div ref={divRef} className="main-navbar">
      <div className="px-3 flex justify-between items-center w-full h-full fade-in-top">
        <div className="flex items-center">
          <h1 className="text-white text-3xl font-bold mr-4 sm:text-4xl">
            <Link to="/" title="Logo enlace">
              Brand.
            </Link>
          </h1>
          <ul className="hidden md:flex text-white">
            <li className="mx-2 px-2 pt-3 pb-3 rounded-lg hover:bg-slate-700 cursor-pointer focus:bg-slate-700">
              <Link to="/new-product-form" title="Sell product">
                <PlusCircleIcon className="mx-2 h-5" />
              </Link>
            </li>
            <li className="mx-2 px-2 pt-3 pb-3 rounded-lg hover:bg-slate-700 cursor-pointer focus:bg-slate-700">
              <Link to="/purchases" title="My purchases">
                <SortDescendingIcon className="mx-2 h-5" />
              </Link>
            </li>
            <li className="mx-2 px-2 pt-3 pb-3 rounded-lg hover:bg-slate-700 cursor-pointer focus:bg-slate-700">
              <Link to="/sales" title="My sales">
                <SortAscendingIcon className="mx-2 h-5" />
              </Link>
            </li>
            <li className="mx-2 px-2 pt-3 pb-3 rounded-lg hover:bg-slate-700 cursor-pointer focus:bg-slate-700">
              <Link to="/my-products" title="My products">
                <DesktopComputerIcon className="mx-2 h-5" />
              </Link>
            </li>
            <li className="mx-2 px-2 pt-3 pb-3 rounded-lg hover:bg-slate-700 cursor-pointer focus:bg-slate-700">
              <Link to="/support" title="Support">
                <SupportIcon className="mx-2 h-5" />
              </Link>
            </li>
            <li className="mx-2 px-2 pt-3 pb-3 rounded-lg hover:bg-slate-700 cursor-pointer focus:bg-slate-700">
              <Link to="/profile" title="Profile">
                <UserIcon className="mx-2 h-5" />
              </Link>
            </li>
            <li className="mx-2 px-2 pt-3 pb-3 rounded-lg hover:bg-slate-700 cursor-pointer focus:bg-slate-700">
              <Link to="/favorite" title="Favorites">
                <HeartIcon className="mx-2 h-5" />
              </Link>
            </li>
            <li className="mx-2 px-2 pt-3 pb-3 rounded-lg hover:bg-slate-700 cursor-pointer focus:bg-slate-700">
              <Link to="/notifications" title="Notifications">
                <BellIcon className="mx-2 h-5" />
              </Link>
            </li>
          </ul>
        </div>
        <div className="hidden md:flex md:items-center gap-4">
          <ButtonLink
            label="Log in"
            title="Log in"
            color="transparent"
            url="/login"
            customClass="py-3 px-4"
          />
          <ButtonLink
            label="Sign in"
            title="Sign in"
            color="transparent-bordered"
            url="/register-form"
            customClass="py-3 px-4"
          />
        </div>
        <div className="md:hidden" onClick={handleClick}>
          {!nav ? (
            <MenuAlt2Icon className="text-white w-7 cursor-pointer" />
          ) : (
            <XIcon className="text-white w-7 cursor-pointer" />
          )}
        </div>
      </div>
      <ul className={`mobile-main-menu ${!nav ? "hidden" : ""}`}>
        <li className="w-full py-4 text-white cursor-pointer">
          <ButtonLink
            label="Sell product"
            title="Sell product"
            icon={<PlusIcon className="w-5 ml-2" />}
            url="/new-product-form"
            customClass="px-8 py-3 w-full sm:w-fit"
            color="transparent-bordered"
          />
        </li>
        <li className="w-full py-4 text-white cursor-pointer">
          <Link className="flex items-center" to="/purchase" title="Compras">
            <SortDescendingIcon className="mx-2 h-5" />
            My purchases
          </Link>
        </li>
        <li className="w-full py-4 text-white cursor-pointer">
          <Link className="flex items-center" to="/sales" title="Ventas">
            <SortAscendingIcon className="mx-2 h-5" />
            My sales
          </Link>
        </li>
        <li className="w-full py-4 text-white cursor-pointer">
          <Link
            className="flex items-center"
            to="/my-products"
            title="Mis productos"
          >
            <DesktopComputerIcon className="mx-2 h-5" />
            My products
          </Link>
        </li>
        <li className="w-full py-4 text-white cursor-pointer">
          <Link className="flex items-center" to="/support" title="Soporte">
            <SupportIcon className="mx-2 h-5" />
            Support
          </Link>
        </li>
        <li className="w-full py-4 text-white cursor-pointer">
          <Link className="flex items-center" to="/profile" title="Perfil">
            <UserIcon className="mx-2 h-5" />
            Profile
          </Link>
        </li>
        <li className="w-full py-4 text-white cursor-pointer">
          <Link className="flex items-center" to="/favorite" title="Favoritos">
            <HeartIcon className="mx-2 h-5" />
            Favorites
          </Link>
        </li>
        <li className="w-full py-4 text-white cursor-pointer">
          <Link
            className="flex items-center"
            to="/notifications"
            title="Notificaciones"
          >
            <BellIcon className="mx-2 h-5" />
            Notifications
          </Link>
        </li>
        <div className="flex flex-col sm:flex-row gap-3 my-4">
          <Button
            label="Log out"
            icon={<LogoutIcon className="w-5 ml-2" />}
            customClass="px-8 py-3 w-full sm:w-fit"
            color="transparent-bordered"
            type="button"
          />
          <ButtonLink
            label="Log in"
            title="Log in"
            icon={<UserIcon className="w-5 ml-2" />}
            url="/login"
            customClass="px-8 py-3 w-full sm:w-fit"
            color="transparent-bordered"
          />
          <ButtonLink
            label="Sign in"
            title="Sign in"
            icon={<ArrowNarrowRightIcon className="w-5 ml-2" />}
            url="/register-form"
            customClass="px-8 py-3 w-full sm:w-fit"
            color="purple"
          />
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
