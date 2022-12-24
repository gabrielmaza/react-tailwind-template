import React from "react";

interface InputFileProps {
  placeholder: string;
  customClass?: string;
  accept: "image/*,.pdf" | "image/*" | "video/*" | "audio/*";
}

const InputFile = ({
  placeholder,
  customClass,
  accept = "image/*,.pdf",
}: InputFileProps) => {
  return (
    <input
      type="file"
      className={`bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-indigo-300 focus:border-indigo-300 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-300 dark:focus:border-indigo-300 ${customClass}`}
      placeholder={placeholder}
      accept={accept}
    />
  );
};

export default InputFile;
