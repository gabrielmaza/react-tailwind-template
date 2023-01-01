import React from "react";
import {
  BellIcon,
  CurrencyDollarIcon,
  HeartIcon,
  SupportIcon,
  TableIcon,
  UserIcon,
} from "@heroicons/react/solid";
import { FloatingSidebarNavCollapse } from "./FLoatingSidebarNavCollapse";
import "./floating-sidebar.css";

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

export const FloatingSidebarNav = () => {
  return (
    <ul className="floating-sidebar_nav">
      <FloatingSidebarNavCollapse
        icon={<TableIcon />}
        label="Products"
        collapseContent={productsNav}
      />
      <FloatingSidebarNavCollapse
        icon={<CurrencyDollarIcon />}
        label="Trading"
        collapseContent={tradingNav}
      />
      <FloatingSidebarNavCollapse
        icon={<HeartIcon />}
        btnLinkUrl="/favorite"
        btnLinkTitle="Favorites"
        label="Favorites"
      />
      <FloatingSidebarNavCollapse
        icon={<BellIcon />}
        btnLinkUrl="/notifications"
        btnLinkTitle="Notifications"
        label="Notifications"
      />
      <FloatingSidebarNavCollapse
        icon={<UserIcon />}
        btnLinkUrl="/profile"
        btnLinkTitle="Profile"
        label="Profile"
      />
      <FloatingSidebarNavCollapse
        icon={<SupportIcon />}
        btnLinkUrl="/support"
        btnLinkTitle="Support"
        label="Support"
      />
    </ul>
  );
};
