import React from "react";

interface SectionTitleProps {
  label: string;
}

const SectionTitle = ({ label = "The title here" }: SectionTitleProps) => {
  return (
    <h1 className="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
      {label}
    </h1>
  );
};

export default SectionTitle;
