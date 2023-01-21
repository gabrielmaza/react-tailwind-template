import React, { useState } from "react";
import { MenuAlt2Icon, XIcon } from "@heroicons/react/solid";
import "./landing-navbar.css";
import { Link } from "react-router-dom";
import useClickAwayDiv from "../../hooks/useClickAwayDiv";
import { BrandLogo } from "../brand-logo/BrandLogo";
import { LandingNavbarMenu } from "./LandingNavbarMenu";
import { LandingNavbarLogBtn } from "./LandingNavbarLogBtn";

interface LandingNavbarProps {
  navbarMenu?: boolean;
  navbarLogBtn?: boolean;
}

const LandingNavbar = ({
  navbarMenu = false,
  navbarLogBtn = false,
}: LandingNavbarProps) => {
  // Floating Sidebar
  const [toggFloatingSidebar, setToggFloatingSidebar] = useState(true);
  const handleToggFloatingSidebar = () => {
    setToggFloatingSidebar(!toggFloatingSidebar);
  };

  // Mobile menu
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  const close = () => setNav(false);
  const [divRef] = useClickAwayDiv<HTMLDivElement>(close);

  return (
    <div ref={divRef} className="main-navbar">
      <div className="px-3 flex justify-between items-center w-full h-full fade-in-top">
        <div className="flex items-center">
          <div className="mx-2">
            <Link to="/" title="Logo enlace">
              <BrandLogo />
            </Link>
          </div>
        </div>
        <div className="hidden md:flex md:items-center gap-4">
          {navbarMenu && <LandingNavbarMenu />}
          {navbarLogBtn && <LandingNavbarLogBtn />}
        </div>
        <div className="md:hidden" onClick={handleClick}>
          {!nav ? (
            <MenuAlt2Icon className="text-white w-7 cursor-pointer" />
          ) : (
            <XIcon className="text-white w-7 cursor-pointer" />
          )}
        </div>
      </div>
      {/* <ul className={`mobile-main-menu ${!nav ? "hidden" : ""}`}>
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
      </ul>       */}
    </div>
  );
};

export default LandingNavbar;
