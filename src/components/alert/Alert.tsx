import { ExclamationCircleIcon, XIcon } from "@heroicons/react/solid";
import React, { ReactNode, useState } from "react";
import "./alert.css";

interface AlertProps {
  color?: "blue" | "red" | "green" | "yellow" | "gray";
  children?: ReactNode;
}

const Alert = ({ color = "gray", children }: AlertProps) => {
  const [hidden, setHidden] = useState(true);
  const handleClose = () => {
    setHidden(!hidden);
  };
  return (
    <>
      <div className={`main-alert_wrapp ${color} ${!hidden ? "hidden" : ""}`}>
        <div className="flex p-4">
          <ExclamationCircleIcon className="main-alert_icon" />
          {children}
          <button
            type="button"
            className="main-alert_close-button"
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
  /* <Alert color="red">
        <p>
          A simple info alert with an<a href="#">example link</a>. Give it a
          click if you like.
        </p>
      </Alert> */
}
