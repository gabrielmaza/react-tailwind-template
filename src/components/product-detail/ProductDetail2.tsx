import React, { useState } from "react";
import Button from "../button/Button";
import { ChevronRightIcon, HeartIcon, ShareIcon } from "@heroicons/react/solid";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import MyModal from "../modal/modal";
import ModalLightbox from "../modal/ModalLightbox";

const images = [
  {
    id: 1,
    url: "./src/assets/img/products/phone/phone-1.jpg",
  },
  {
    id: 2,
    url: "./src/assets/img/products/phone/phone-2.jpg",
  },
  {
    id: 3,
    url: "./src/assets/img/products/phone/phone-3.jpg",
  },
];

const ProductDetail2 = () => {
  // Modal actions
  const [showModal, setShowModal] = useState(false);
  const handleChange = () => {
    setShowModal(!showModal);
  };
  const handleClose = () => {
    setShowModal(false);
  };
  return (
    <>
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-2 justify-between">
          <p className="font-bold text-gray-700 dark:text-gray-400">
            Jul 21 | 123 downloads
          </p>
          <div className="flex gap-3">
            <Button
              type="button"
              color="transparent"
              icon={<ShareIcon />}
              label="Share"
            />
            <Button
              type="button"
              color="transparent"
              icon={<HeartIcon className="fill-gray-900 dark:fill-gray-500" />}
              label="Like"
            />
          </div>
        </div>

        <Carousel showArrows={true} showIndicators={false} infiniteLoop={true}>
          {images.map((image, index) => (
            <div className="cursor-pointer" onClick={handleChange} aria-hidden>
              <img key={index} src={image.url} />
            </div>
          ))}
        </Carousel>

        <div className="flex gap-3">
          <div className="w-full md:w-7/12 flex flex-col gap-3">
            <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">
              Product fancy name
            </h1>
            <span className="font-bold text-2xl pb-3 text-gray-900 dark:text-white">
              $129.99
            </span>
            <div className="flex flex-col gap-2">
              <ul className="product-page_charact">
                <li>
                  <ChevronRightIcon />
                  <p className="font-semibold">Format: EPS</p>
                </li>
                <li>
                  <ChevronRightIcon />
                  <p className="font-semibold">3077 × 2000 pixels</p>
                </li>
                <li>
                  <ChevronRightIcon />
                  <p className="font-semibold">PPP 300</p>
                </li>
                <li>
                  <ChevronRightIcon />
                  <p className="font-semibold">820 bytes</p>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full md:w-5/12">
            {/* Option user admin */}
            <Button
              type="submit"
              color="transparent-bordered"
              label="Edit"
              customClass="p-3 w-full max-w-lg mb-2"
            />
            {/* Option customer */}
            <Button
              type="submit"
              color="green"
              label="Buy"
              customClass="p-3 w-full max-w-lg mb-2"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Description
        </h3>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum,
          doloremque optio. Sapiente, omnis! Aperiam dolorum sint qui odit fugit
          ea. Voluptatem laudantium officiis accusantium explicabo neque esse
          dolores molestias voluptatibus.
        </p>
        <MyModal show={showModal} closeFunction={handleClose}>
          <ModalLightbox closeFunction={handleClose} show={showModal}>
            <Carousel
              showArrows={true}
              showIndicators={false}
              infiniteLoop={true}
            >
              {images.map((image, index) => (
                <img key={index} src={image.url} />
              ))}
            </Carousel>
          </ModalLightbox>
        </MyModal>
      </div>
    </>
  );
};

export default ProductDetail2;
