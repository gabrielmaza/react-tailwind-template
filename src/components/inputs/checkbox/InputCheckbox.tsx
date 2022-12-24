import React, { ReactNode } from "react";

interface InputCheckboxProps {
  label?: any;
  value?: any;
  children?: ReactNode;
}

const InputCheckbox = ({ label, value, children }: InputCheckboxProps) => {
  return (
    <div className="flex items-start mb-6">
      <div className="flex items-center h-5">
        <input
          id="remember"
          type="checkbox"
          value={value}
          className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
          required
        />
      </div>
      <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
        {label}
        {children}
      </label>
    </div>
  );
};

export default InputCheckbox;
