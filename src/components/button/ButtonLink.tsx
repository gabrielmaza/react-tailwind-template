import React from "react";
import { Link } from "react-router-dom";
import "./button.css";

interface LinkButtonProps {
  label: string;
  title: string;
  icon?: any;
  url: string;
  color?:
    | "purple"
    | "pink"
    | "green"
    | "gray"
    | "transparent"
    | "transparent-bordered";
  customClass?: string;
}

const ButtonLink = ({
  label,
  customClass,
  icon,
  url,
  color = "purple",
  title,
}: LinkButtonProps) => {
  return (
    <Link
      to={url}
      className={`custom-button ${color} ${customClass}`}
      title={title}
    >
      {label ? <span className={icon ? "pr-2" : ""}>{label}</span> : ""}
      {icon}
    </Link>
  );
};

export default ButtonLink;
