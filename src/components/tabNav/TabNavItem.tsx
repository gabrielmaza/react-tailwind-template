import React from "react";

interface TabNavItemProps {
  toggleState: number;
  handleTab: (index: any) => void;
  index: number;
  label: string;
  counter?: string;
}

export const TabNavItem = ({
  toggleState,
  handleTab,
  index,
  label,
  counter,
}: TabNavItemProps) => {
  return (
    <div
      className={`tabs 
            ${toggleState === index ? "active-tab" : "disable-tab"}
            `}
      onClick={() => handleTab(index)}
    >
      <div className="flex items-center gap-1">
        <span>{label}</span>
        {counter != "0" && (
          <div className="bg-slate-400 dark:bg-slate-600 rounded-sm w-auto h-5 px-2">
            <span className="text-slate-800 dark:text-white font-semibold text-sm">
              {counter}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};
