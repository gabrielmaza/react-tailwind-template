import { XIcon } from "@heroicons/react/solid";
import React, { ReactNode, useState } from "react";
import "./alert.css";

interface AlertProps {
  color?: "blue" | "red" | "green" | "yellow" | "gray";
  icon: any;
  children?: ReactNode;
}

const Alert = ({ color = "gray", icon, children }: AlertProps) => {
  const [hidden, setHidden] = useState(true);
  const handleClose = () => {
    setHidden(!hidden);
  };
  return (
    <>
      <div className={`main-alert_wrapp ${color} ${!hidden ? "hidden" : ""}`}>
        <div className="flex p-4">
          {icon}
          {children}
          <button
            type="button"
            className="main-alert_close-btn"
            onClick={handleClose}
          >
            <XIcon className="main-alert_close-icon" />
          </button>
        </div>
      </div>
    </>
  );
};

export default Alert;

// Use example
{
  /* <Alert color="yellow" icon={<ExclamationCircleIcon />}>
        <p>
          A simple info alert with an<a href="#">example link</a>. Give it a
          click if you like.
        </p>
      </Alert> 
  */
}
