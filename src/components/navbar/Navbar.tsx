import React, { useState } from "react";
import {
  BellIcon,
  CogIcon,
  CurrencyDollarIcon,
  HeartIcon,
  MenuAlt2Icon,
  SupportIcon,
  TableIcon,
  UserIcon,
  XIcon,
} from "@heroicons/react/solid";
import "./navbar.css";
import { Link } from "react-router-dom";
import ButtonLink from "../button/ButtonLink";
import Button from "../button/Button";
import { BrandLogo } from "../brand-logo/BrandLogo";
import { NavbarMenu } from "./NavbarMenu";
import { NavbarLogBtn } from "./NavbarLogBtn";
import { NavbarUserAvatar } from "./NavbarUserAvatar";
import NotificationCard from "../cards/NotificationCard";
import { FloatingSidebarSection } from "../floating-sidebar/FloatingSidebarSection";
import FloatingSidebar from "../floating-sidebar/FloatingSidebar";
import { SidebarNavCollapse } from "../sidebar/SidebarNavCollapse";
import { useTranslation } from "react-i18next";
import TextOnlyCard from "../cards/TextOnlyCard";

const productsNav = [
  {
    label: "My products",
    url: "/my-products",
    title: "My products",
  },
  {
    label: "Post new",
    url: "/new-product-form",
    title: "Post new",
  },
];

const tradingNav = [
  {
    label: "My sales",
    url: "/sales",
    title: "My sales",
  },
  {
    label: "My purchases",
    url: "/purchases",
    title: "My purchases",
  },
];

const MyNotifications = [
  {
    id: 1,
    img: "./src/assets/img/products/image-2.jpg",
    title: "Notification title",
    date: "12/07/2023",
    hour: "19:30",
    comment:
      "Aliquam lobortis mattis est sed varius. Ipsum eleifend, et gravida est blandit. Aliquam pulvinar, metus eget aliquam elementum.",
  },
  {
    id: 2,
    img: "./src/assets/img/products/image-2.jpg",
    title: "Notification title",
    date: "12/07/2023",
    hour: "19:30",
    comment:
      "Donec sit amet nibh nibh. Ut viverra lacus ut ipsum eleifend, et gravida est blandit. Aliquam pulvinar, metus eget aliquam elementum.",
  },
  {
    id: 3,
    img: "./src/assets/img/products/image-2.jpg",
    title: "Notification title",
    date: "12/07/2023",
    hour: "19:30",
    comment:
      "Aliquam lobortis mattis est sed varius. Donec sit amet nibh nibh. Ut viverra lacus ut ipsum eleifend, et gravida est blandit. Aliquam pulvinar, metus eget aliquam elementum.",
  },
  {
    id: 4,
    img: "./src/assets/img/products/image-2.jpg",
    title: "Notification title",
    date: "12/07/2023",
    hour: "19:30",
    comment:
      "Aliquam lobortis mattis est sed varius. Donec sit amet nibh nibh. Ut viverra lacus ut ipsum eleifend, et gravida est blandit. Aliquam pulvinar, metus eget aliquam elementum.",
  },
  {
    id: 5,
    img: "./src/assets/img/products/image-2.jpg",
    title: "Notification title",
    date: "12/07/2023",
    hour: "19:30",
    comment:
      "Aliquam lobortis mattis est sed varius. Donec sit amet nibh nibh. Ut viverra lacus ut ipsum eleifend, et gravida est blandit. Aliquam pulvinar, metus eget aliquam elementum.",
  },
];
interface NavbarProps {
  navbarMenu?: boolean;
  navbarLogBtn?: boolean;
  navbarUserAvatar?: boolean;
  mobSidebPrivContent?: boolean;
  mobSidebPubContent?: boolean;
  navbarLangSwitcher?: boolean;
}

const Navbar = ({
  navbarMenu = false,
  navbarLogBtn = false,
  navbarUserAvatar = false,
  mobSidebPrivContent = false,
  mobSidebPubContent = false,
  navbarLangSwitcher = false,
}: NavbarProps) => {
  // Notifications Floating Sidebar
  const [floatingSidebar, setFloatingSidebar] = useState(false);
  const handleFloatingSidebar = () => {
    setFloatingSidebar(!floatingSidebar);
  };
  // Mobile Floating Sidebar
  const [mobileFloatingSidebar, setMobileFloatingSidebar] = useState(false);
  const handleMobileFloatingSidebar = () => {
    setMobileFloatingSidebar(!mobileFloatingSidebar);
  };
  //Translations
  const { t, i18n } = useTranslation("global");
  return (
    <div className="main-navbar">
      <div className="px-3 flex justify-between items-center w-full h-full">
        <div className="flex items-center">
          <div className="mx-2">
            <Link to="/" title="Logo enlace">
              <BrandLogo />
            </Link>
          </div>
        </div>
        <div className="hidden md:flex md:items-center gap-4">
          {navbarMenu && (
            <NavbarMenu
              floatingSidebar={floatingSidebar}
              handleFloatingSidebar={handleFloatingSidebar}
            />
          )}
          {navbarLogBtn && <NavbarLogBtn />}
          {navbarUserAvatar && (
            <NavbarUserAvatar userProfileImg="./src/assets/img/people/profile-picture-1.jpg" />
          )}
          {navbarLangSwitcher && (
            <div>
              <button onClick={() => i18n.changeLanguage("es")}>ES</button>
              <button onClick={() => i18n.changeLanguage("en")}>EN</button>
            </div>
          )}
        </div>
        <div className="md:hidden" onClick={handleMobileFloatingSidebar}>
          {!mobileFloatingSidebar ? (
            <MenuAlt2Icon className="text-white w-7 cursor-pointer" />
          ) : (
            <XIcon className="text-white w-7 cursor-pointer" />
          )}
        </div>
      </div>
      {/* Notifications Floating Sidebar */}
      <FloatingSidebar
        right
        toggleSidebar={floatingSidebar}
        handleClick={handleFloatingSidebar}
      >
        <FloatingSidebarSection hrBottom>
          <h2 className="floating-sidebar_title">Notifications</h2>
        </FloatingSidebarSection>
        {MyNotifications.map(({ id, date, hour, title, comment }) => (
          <div key={id}>
            <TextOnlyCard
              icon={<BellIcon />}
              data1={date}
              data2={hour}
              span1={title}
              comment={comment}
            />
          </div>
        ))}
      </FloatingSidebar>
      {/* Mobile Floating Sidebar */}
      <FloatingSidebar
        right
        toggleSidebar={mobileFloatingSidebar}
        handleClick={handleMobileFloatingSidebar}
      >
        {mobSidebPrivContent && (
          <>
            <FloatingSidebarSection hrBottom>
              <NavbarUserAvatar />
            </FloatingSidebarSection>
            <FloatingSidebarSection hrBottom>
              <span>ID: 00234</span>
            </FloatingSidebarSection>
            <FloatingSidebarSection hrBottom>
              <ul className="sidebar_nav mt-1">
                <SidebarNavCollapse
                  icon={<BellIcon />}
                  btnLinkUrl="/notifications"
                  btnLinkTitle="Notifications"
                  label="Notifications"
                />
                <SidebarNavCollapse
                  icon={<CogIcon />}
                  btnLinkUrl="/settings"
                  btnLinkTitle="Settings"
                  label="Settings"
                />
                <SidebarNavCollapse
                  icon={<TableIcon />}
                  label="Products"
                  collapseContent={productsNav}
                />
                <SidebarNavCollapse
                  icon={<CurrencyDollarIcon />}
                  label="Trading"
                  collapseContent={tradingNav}
                />
                <SidebarNavCollapse
                  icon={<HeartIcon />}
                  btnLinkUrl="/favorite"
                  btnLinkTitle="Favorites"
                  label="Favorites"
                />
                <SidebarNavCollapse
                  icon={<BellIcon />}
                  btnLinkUrl="/notifications"
                  btnLinkTitle="Notifications"
                  label="Notifications"
                />
                <SidebarNavCollapse
                  icon={<UserIcon />}
                  btnLinkUrl="/profile"
                  btnLinkTitle="Profile"
                  label="Profile"
                />
                <SidebarNavCollapse
                  icon={<SupportIcon />}
                  btnLinkUrl="/support"
                  btnLinkTitle="Support"
                  label="Support"
                />
              </ul>
            </FloatingSidebarSection>
            <FloatingSidebarSection>
              <Button
                color="transparent-bordered"
                type="button"
                label="Sign out"
              />
            </FloatingSidebarSection>
          </>
        )}
        {mobSidebPubContent && (
          <>
            <FloatingSidebarSection>
              <div className="flex gap-2">
                <ButtonLink
                  label="Log in"
                  title="Log in"
                  color="purple"
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
            </FloatingSidebarSection>
          </>
        )}
      </FloatingSidebar>
    </div>
  );
};

export default Navbar;
