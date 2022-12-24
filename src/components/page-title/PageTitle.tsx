import React from "react";

interface PageTitleProps {
  label: string;
}

const PageTitle = ({ label }: PageTitleProps) => {
  return (
    <h1 className="text-xl sm:text-4xl text-slate-100 font-bold">{label}</h1>
  );
};

export default PageTitle;
