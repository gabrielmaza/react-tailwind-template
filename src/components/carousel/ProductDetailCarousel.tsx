import React, { useState, useEffect, useRef } from "react";
import ModalLightbox from "../modal/ModalLightbox";

const imgProduct = [
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

interface ProductDetailCarouselProps {
  width: string;
  height: string;
  indicatorsSection?: boolean;
  bullets?: any;
  // images: any[];
}

let count = 0;

// let slideInterval;

const ProductDetailCarousel = ({
  width,
  height,
  indicatorsSection,
}: ProductDetailCarouselProps) => {
  // Modal actions
  const [showModal, setShowModal] = useState(false);
  const handleChange = () => {
    setShowModal(!showModal);
  };
  const handleClose = () => {
    setShowModal(false);
  };

  const [currentIndex, setCurrentIndex] = useState(0);

  const slideRef = useRef<HTMLDivElement>(null);
  //   const controlRef = useRef<HTMLButtonElement>(null);
  //   const indicatorRef = useRef<HTMLDivElement>(null);

  const removeAnimation = () => {
    slideRef.current?.classList.remove("fade-anim");
  };

  useEffect(() => {
    slideRef.current?.addEventListener("animationend", () => {
      removeAnimation();
    });
  }, []);

  const handleNext = () => {
    count = (count + 1) % imgProduct.length;
    setCurrentIndex(count);
    slideRef.current?.classList.add("fade-anim");
  };
  const handlePrev = () => {
    const productsLength = imgProduct.length;
    count = (currentIndex + productsLength - 1) % productsLength;
    setCurrentIndex(count);
    slideRef.current?.classList.add("fade-anim");
  };
  const handleChose = (item) => {
    count = item % imgProduct.length;
    setCurrentIndex(count);
  };

  return (
    <>
      <div className={`relative z-0 h-fit ${width} ${height}`}>
        {/* Carousel wrapper */}
        <div
          className={`overflow-hidden relative rounded-lg ${width} ${height}`}
        >
          {/* Item */}
          <div
            className="duration-700 ease-in-out absolute inset-0 transition-all transform translate-x-0 z-20"
            ref={slideRef}
          >
            <img
              src={imgProduct[currentIndex].url}
              className="block absolute top-1/2 left-1/2 w-full h-full object-contain -translate-x-1/2 -translate-y-1/2 rounded-lg cursor-pointer"
              alt="..."
              onClick={handleChange}
              aria-hidden
            />
          </div>
        </div>
        {/* Slider indicators */}
        {indicatorsSection ? (
          <div className="flex absolute bottom-[10px] left-1/2 z-30 space-x-3 -translate-x-1/2">
            {imgProduct.map((item) => (
              <button
                key={item.id}
                type="button"
                className={`w-3 h-3 rounded-full
                    ${
                      imgProduct[currentIndex] === item
                        ? "bg-white dark:bg-gray-800"
                        : "bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800"
                    }
                    `}
                onClick={() => handleChose(item)}
              ></button>

              // <div
              //   key={item.id}
              //   className="duration-700 ease-in-out absolute inset-0 transition-all transform translate-x-0 z-20"
              //   ref={slideRef}
              // >
              //   <img
              //     // src={item.url[currentIndex]}
              //     src={item[currentIndex]}
              //     className="block absolute top-1/2 left-1/2 w-full h-full object-cover -translate-x-1/2 -translate-y-1/2 rounded-lg"
              //     alt="..."
              //   />
              // </div>
            ))}
          </div>
        ) : (
          ""
        )}
        {/* Slider controls */}
        <button
          type="button"
          className="flex absolute top-0 left-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none"
          onClick={handlePrev}
        >
          <span className="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              ></path>
            </svg>
            <span className="sr-only">Previous</span>
          </span>
        </button>
        <button
          type="button"
          className="flex absolute top-0 right-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none"
          onClick={handleNext}
        >
          <span className="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              ></path>
            </svg>
            <span className="sr-only">Next</span>
          </span>
        </button>
        <ModalLightbox show={showModal} closeFunction={handleClose} />
      </div>
    </>
  );
};

export default ProductDetailCarousel;
