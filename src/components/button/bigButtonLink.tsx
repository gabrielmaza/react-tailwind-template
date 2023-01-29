import React from "react";
import { Link } from "react-router-dom";
import "./button.css";

interface BigLinkButtonProps {
  label: string;
  title: string;
  icon?: any;
  url?: string;
  color?:
    | "purple"
    | "pink"
    | "green"
    | "gray"
    | "transparent"
    | "transparent-purple";
  customClass?: string;
}

const BigButtonLink = ({
  label,
  customClass,
  icon,
  url = "#",
  color = "purple",
  title,
}: BigLinkButtonProps) => {
  return (
    <Link
      to={url}
      className={`big-button-link ${color} ${customClass}`}
      title={title}
    >
      {label ? <span className={icon ? "pr-2" : ""}>{label}</span> : ""}
      {icon}
    </Link>
  );
};

export default BigButtonLink;
