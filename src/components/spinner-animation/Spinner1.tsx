import React from "react";
import "./spinner-animation.css";

const Spinner1 = () => {
  return (
    <div className="spinner_wrapp">
      <div className="w-auto h-auto relative inline-block">
        <div className="spinner_1" />
        <div className="spinner_1" />
      </div>
    </div>
  );
};

export default Spinner1;
