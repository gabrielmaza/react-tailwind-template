import React, { useEffect, useState } from "react";

interface InputToggleSwitchProps {
  label?: string;
}

const InputToggleSwitch = ({ label }: InputToggleSwitchProps) => {
  const [checked, setChecked] = useState(false);
  const handleChange = () => {
    setChecked(!checked);
    console.log(checked);
  };

  return (
    <label className={`input-toggle-switch_wrapp ${checked ? "checked" : ""}`}>
      <input type="checkbox" value="" className="sr-only peer" />
      <div className="input-toggle-switch_button" onClick={handleChange}></div>
      <span className="input-toggle-switch_span">{label}</span>
    </label>
  );
};

export default InputToggleSwitch;
