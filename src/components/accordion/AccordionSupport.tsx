import { ChevronDownIcon } from "@heroicons/react/solid";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const AccordionSupport = () => {
  const [open, setOpen] = useState(true);
  const [index, setIndex] = useState("content-1");

  const handleChange = (prop) => {
    if (open == false) {
      setIndex(prop);
      setOpen(true);
    }
    if (open == true) {
      setIndex(prop);
    }
    if (open == true && index == prop) {
      setOpen(false);
    }
  };
  console.log(open);
  console.log(index);

  return (
    <div className="accordion">
      <h2>
        <button
          type="button"
          className={`flex items-center justify-between w-full p-5 font-medium text-left border border-gray-200 rounded-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 ${
            open && index == "content-1"
              ? "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white"
              : ""
          }`}
          onClick={() => handleChange("content-1")}
        >
          <h2>How to publish?</h2>
          <ChevronDownIcon
            className={`w-6 h-6 shrink-0 ${
              open && index == "content-1" ? "rotate-180" : ""
            }`}
          />
        </button>
      </h2>
      <div className={open && index == "content-1" ? "" : "hidden"}>
        <div className="p-5 font-light border border-gray-200 dark:border-gray-700 dark:bg-gray-900">
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            To post on our website, you must create an account on the{" "}
            <Link to="/register-form">Register page</Link> and validate your
            email.
          </p>
        </div>
      </div>
      <h2>
        <button
          type="button"
          className={`flex items-center justify-between w-full p-5 font-medium text-left border border-gray-200 rounded-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 ${
            open && index == "content-2"
              ? "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white"
              : ""
          }`}
          onClick={() => handleChange("content-2")}
        >
          <span>How to buy?</span>
          <ChevronDownIcon
            className={`w-6 h-6 shrink-0 ${
              open && index == "content-2" ? "rotate-180" : ""
            }`}
          />
        </button>
      </h2>
      <div className={open && index == "content-2" ? "" : "hidden"}>
        <div className="p-5 font-light border border-gray-200 dark:border-gray-700">
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            To buy on our website you must create an account in the{" "}
            <Link to="/register-form">Register page.</Link> Then go to a product
            page and Click the "Buy" button.
          </p>
        </div>
      </div>
      <h2>
        <button
          type="button"
          className={`flex items-center justify-between w-full p-5 font-medium text-left border border-gray-200 rounded-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 ${
            open && index == "content-3"
              ? "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white"
              : ""
          }`}
          onClick={() => handleChange("content-3")}
        >
          <span>How to report?</span>
          <ChevronDownIcon
            className={`w-6 h-6 shrink-0 ${
              open && index == "content-3" ? "rotate-180" : ""
            }`}
          />
        </button>
      </h2>
      <div className={open && index == "content-3" ? "" : "hidden"}>
        <div className="p-5 font-light border border-t-0 border-gray-200 dark:border-gray-700">
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            To report a product, purchase or user you must send us a message
            from the <Link to="/contact">Contact page</Link> with the name, id,
            or SKU of the product, purchase code or name of the username/email
            you want to report.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AccordionSupport;
