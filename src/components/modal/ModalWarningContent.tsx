import { XIcon } from "@heroicons/react/solid";
import React from "react";
import Button from "../button/Button";

interface ModalWarningContentProps {
  closeFunction: () => void;
  label: string;
  action?: any;
}

const ModalWarningContent = ({
  closeFunction,
  label,
  action,
}: ModalWarningContentProps) => {
  return (
    <div className="w-full h-full md:h-auto flex justify-between items-start p-4 rounded-t border-b dark:border-gray-600">
      <div className="w-full">
        <div className="flex justify-end items-start">
          <Button
            type="button"
            color="transparent"
            icon={<XIcon />}
            onClick={closeFunction}
          />
        </div>
        <div className="p-6 text-center">
          <svg
            aria-hidden="true"
            className="mx-auto mb-4 w-20 h-20 text-gray-400 dark:text-gray-200"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              strokeWidth="2"
              d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
          <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
            {label}
          </h3>
          <div className="flex flex-wrap gap-4 items-center justify-center">
            {action}
            {action}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalWarningContent;

// Use example
{
  /* <MyModal show={showModal} closeFunction={handleClose}>
        <ModalWarningContent
          closeFunction={handleClose}
          label="¿Seguro de eliminar este producto?"
          action1={
            <Button type="button" color="pink" label="Si, estoy seguro" />
          }
          action2={
            <Button
              type="button"
              color="transparent-bordered"
              label="No, cancelar"
            />
          }
        />
      </MyModal> */
}
