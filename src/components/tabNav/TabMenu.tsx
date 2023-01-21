import React, { ReactNode, useState } from "react";
import TextOnlyCard from "../cards/TextOnlyCard";
import "./tabs.css";

interface TabMenuProps {
  children: ReactNode;
}

const TabMenu = ({ children }: TabMenuProps) => {
  return <>{children}</>;
};

export default TabMenu;
