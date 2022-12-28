import React from "react";
interface InputToggleSwitchProps {
  label: string;
}

export const SidebarTitle = ({ label }: InputToggleSwitchProps) => {
  return (
    <h2 className="text-xl pt-2 font-bold tracking-tight text-gray-900 dark:text-white">
      {label}
    </h2>
  );
};
