import React, { useState } from "react";
import ".././inputs.css";

interface InputTextProps {
  type?: string;
  value?: any;
  placeholder?: string;
  required?: boolean;
  customClass?: string;
}

const InputText = ({
  type = "text",
  value = "inputValue",
  placeholder = "Placeholder...",
  required = false,
  customClass,
}: InputTextProps) => {
  const [inputValue, setinputValue] = useState("");

  const onInputChange = ({ target }) => {
    setinputValue(target.value);
  };

  return (
    <input
      type={type}
      placeholder={placeholder}
      value={inputValue}
      onChange={onInputChange}
      className={`input ${customClass}`}
      {...(required && { required })}
    />
  );
};

export default InputText;
