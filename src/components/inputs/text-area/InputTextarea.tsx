import React from "react";

interface InputTextareaProps {
  id?: any;
  name?: string;
  value?: any;
  placeholder?: string;
  required?: boolean;
  customClass?: string;
  register?: any;
  onChange?: any;
}

const InputTextarea = ({
  id,
  name,
  value,
  placeholder,
  required,
  register,
  onChange,
}: InputTextareaProps) => {
  return (
    <textarea className="block p-2.5 w-full text-lg text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></textarea>
  );
};

export default InputTextarea;
