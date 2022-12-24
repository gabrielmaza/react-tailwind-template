import { XIcon } from "@heroicons/react/solid";
import React from "react";
import Button from "../button/Button";

interface ModalCommentContentProps {
  closeFunction: () => void;
}

const ModalCommentContent = ({ closeFunction }: ModalCommentContentProps) => {
  return (
    <>
      {/* Modal header */}
      <div className="w-full h-full md:h-auto flex justify-between items-start p-4 rounded-t border-b dark:border-gray-600">
        <div className="flex flex-wrap gap-3 mb-2">
          <img
            src="./src/assets/img/products/image-2.jpg"
            alt="Product img"
            className="w-32 h-32 object-cover rounded-lg"
          />
          <div className="flex flex-col gap-2 mb-2">
            <div className="flex gap-3">
              <span className="text-lg font-semibold text-gray-900 dark:text-white">
                21 Jun 2023
              </span>
              <span className="text-lg">@user_123</span>
            </div>
            <span className="text-lg">Product name</span>
            <span className="text-lg font-semibold">$499.99</span>
          </div>
        </div>
        <Button
          type="button"
          color="transparent"
          icon={<XIcon />}
          onClick={closeFunction}
        />
      </div>
      {/* Modal body */}
      <div className="p-6 space-y-6">
        <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
          With less than a month to go before the European Union enacts new
          consumer privacy laws for its citizens, companies around the world are
          updating their terms of service agreements to comply.
        </p>
      </div>
      {/* Modal footer */}
      <div className="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">
        <Button type="button" color="purple" label="Responder" />
        <Button type="button" color="transparent-bordered" label="Eliminar" />
      </div>
    </>
  );
};

export default ModalCommentContent;
