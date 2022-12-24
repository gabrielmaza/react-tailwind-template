import React from "react";
import "./button.css";

interface ButtonProps {
  label?: string;
  color:
    | "purple"
    | "pink"
    | "green"
    | "gray"
    | "transparent"
    | "transparent-bordered";
  customClass?: string;
  icon?: any;
  type: "button" | "submit";
  onClick?: any;
}

const Button = ({
  label,
  customClass,
  icon,
  color = "purple",
  type = "button",
  onClick,
}: ButtonProps) => {
  return (
    <button
      className={`custom-button ${color} ${customClass}`}
      type={type}
      onClick={onClick}
    >
      {label ? <span className={icon ? "pr-2" : ""}>{label}</span> : ""}
      {icon}
    </button>
  );
};

export default Button;
