import React from "react";
import ".././inputs.css";

interface InputTextProps {
  type?: string;
  id?: any;
  name?: string;
  value?: any;
  placeholder?: string;
  required?: boolean;
  autoComplete?: boolean;
  customClass?: string;
  register?: any;
  onChange?: any;
}

const InputText = ({
  type = "text",
  id,
  name,
  value,
  placeholder,
  required = false,
  autoComplete = false,
  customClass,
  register,
  onChange,
}: InputTextProps) => {
  return <input className={`input ${customClass}`} />;
};

export default InputText;
