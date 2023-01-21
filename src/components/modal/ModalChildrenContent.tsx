import { XIcon } from "@heroicons/react/solid";
import React, { ReactNode } from "react";
import Button from "../button/Button";

interface ModalChildrenContentProps {
  closeFunction: () => void;
  children: ReactNode;
  data1?;
  data2?;
  data3?;
  span1?;
}

const ModalChildrenContent = ({
  closeFunction,
  children,
  data1,
  data2,
  data3,
  span1,
}: ModalChildrenContentProps) => {
  return (
    <>
      {/* Modal header */}
      <div className="w-full h-full md:h-auto flex justify-between items-start p-4 rounded-t border-b dark:border-gray-600">
        <div className="flex flex-col">
          <div className="flex flex-wrap mb-1 gap-2">
            {data1 && <span className="text-sm font-thin">{data1}</span>}
            {data2 && (
              <>
                <span className="text-sm"> | </span>
                <span className="text-sm font-thin">{data2}</span>
              </>
            )}
            {data3 && (
              <>
                <span className="text-sm"> | </span>
                <span className="text-sm font-thin">{data3}</span>
              </>
            )}
          </div>
          {span1 && <span className="text-xl font-semibold">{span1}</span>}
        </div>
        <Button
          type="button"
          color="transparent"
          icon={<XIcon />}
          onClick={closeFunction}
        />
      </div>
      {/* Modal body */}
      <div className="p-6 space-y-6">{children}</div>
      {/* Modal footer */}
      <div className="flex items-center justify-end p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">
        <Button type="button" color="purple" label="Reply" />
        <Button type="button" color="transparent-bordered" label="Delete" />
      </div>
    </>
  );
};

export default ModalChildrenContent;
