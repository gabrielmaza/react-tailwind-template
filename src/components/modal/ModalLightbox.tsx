import React from "react";
import "./modal.css";
import useClickAwayDiv from "../../hooks/useClickAwayDiv";
import Button from "../button/Button";
import { XIcon } from "@heroicons/react/solid";
import CarouselLightbox from "../carousel/CarouselLightbox";

interface ModalLightboxProps {
  show: boolean;
  closeFunction: () => void;
}

const ModalLightbox = ({ show, closeFunction }: ModalLightboxProps) => {
  const [divRef] = useClickAwayDiv<HTMLDivElement>(closeFunction);

  return (
    <>
      {/* Main modal */}
      <div className={`lightbox-modal ${show ? "active" : ""}`}>
        {/* Modal content */}
        <div
          ref={divRef}
          className="relative w-full h-full bg-transparent rounded-lg shadow dark:bg-transparent"
        >
          <div className="w-full fixed h-[486px] z-50">
            <div className="flex justify-end">
              <Button
                type="button"
                color="transparent-bordered"
                icon={<XIcon />}
                onClick={closeFunction}
                customClass="m-3"
              />
            </div>
            <CarouselLightbox />
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalLightbox;
