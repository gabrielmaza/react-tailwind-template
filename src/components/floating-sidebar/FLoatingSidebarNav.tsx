import React from "react";
import {
  ArrowsExpandIcon,
  BellIcon,
  CurrencyDollarIcon,
  HeartIcon,
  SupportIcon,
  TableIcon,
  TicketIcon,
  UserIcon,
} from "@heroicons/react/solid";
import { SidebarNavCollapse } from "./FLoatingSidebarNavCollapse";
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

export const SidebarNav = () => {
  return (
    <ul className="sidebar_nav">
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
  );
};
