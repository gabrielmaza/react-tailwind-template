import {
  ArrowNarrowRightIcon,
  UserCircleIcon,
  XIcon,
} from "@heroicons/react/solid";
import React from "react";
import Button from "../button/Button";
import InputText from "../inputs/text/InputText";

interface ModalLoginContentProps {
  closeFunction: () => void;
  label: string;
}

const ModalLoginContent = ({
  closeFunction,
  label,
}: ModalLoginContentProps) => {
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
        <div className="pb-2 md:pb-6 text-center">
          <UserCircleIcon className="mx-auto mb-4 w-20 h-20 text-gray-400 dark:text-gray-200" />
          <h3 className="mb-5 text-xl text-center font-bold text-gray-500 dark:text-white">
            {label}
          </h3>
          <div className="flex flex-wrap gap-4 items-center justify-center w-full">
            <form className="w-full max-w-[320px] mx-auto">
              <div className="mb-6 text-left">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Your email
                </label>
                <InputText
                  type="email"
                  id="email-input"
                  placeholder="name@reactmarket.com"
                />
              </div>
              <div className="mb-6 text-left">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Your password
                </label>
                <InputText
                  type="password"
                  id="password"
                  placeholder="Password"
                />
                {/* <input
                  type="password"
                  id="password"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                /> */}
              </div>
              <div className="flex items-start mb-6">
                <div className="flex items-center h-5">
                  <input
                    id="remember"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                    required
                  />
                </div>
                <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Remember me
                </label>
              </div>
              <div className="flex justify-end">
                <Button
                  type="submit"
                  label="Ingresar"
                  icon={<ArrowNarrowRightIcon />}
                  color="purple"
                  customClass="px-6 py-3"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalLoginContent;

// Use example
{
  /* <MyModal show={showModal} closeFunction={handleClose}>
        <ModalLoginContent
          closeFunction={handleClose}
          label="Para comprar debes iniciar sesión"
        />
      </MyModal> */
}
