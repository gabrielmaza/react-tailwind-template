import React, { ReactNode } from "react";
import "./modal.css";

interface MyModalProps {
  show: boolean;
  closeFunction: () => void;
  children: ReactNode;
}

const MyModal = ({ show, children }: MyModalProps) => {
  return (
    <>
      {/* Main modal */}
      <div className={`custom-modal ${show ? "active" : ""}`}>
        <div className="relative p-4 w-full max-w-2xl h-full md:h-auto">
          {/* Modal content */}
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export default MyModal;
