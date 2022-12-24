import { ArrowNarrowRightIcon } from "@heroicons/react/solid";
import React, { useState, useEffect, useRef } from "react";
import ButtonLink from "../button/ButtonLink";
import "./carousel.css";

interface CarouselCardsProps {
  imgData: any;
}

let count1 = 0;
let count2 = 1;
let count3 = 2;

// let slideInterval;

const CarouselCards = ({ imgData }: CarouselCardsProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentIndex2, setCurrentIndex2] = useState(1);
  const [currentIndex3, setCurrentIndex3] = useState(2);

  const slideRef = useRef<HTMLDivElement>(null);

  const removeAnimation = () => {
    slideRef.current?.classList.remove("fade-anim");
  };

  useEffect(() => {
    slideRef.current?.addEventListener("animationend", () => {
      removeAnimation();
    });
  }, []);

  const handleNext = () => {
    count1 = (count1 + 3) % imgData.length;
    count2 = (count2 + 3) % imgData.length;
    count3 = (count3 + 3) % imgData.length;
    setCurrentIndex(count1);
    setCurrentIndex2(count2);
    setCurrentIndex3(count3);
    slideRef.current?.classList.add("fade-anim");
  };
  const handlePrev = () => {
    const productsLength = imgData.length;
    count1 = (currentIndex + productsLength - 3) % productsLength;
    count2 = (currentIndex2 + productsLength - 3) % productsLength;
    count3 = (currentIndex3 + productsLength - 3) % productsLength;
    setCurrentIndex(count1);
    setCurrentIndex2(count2);
    setCurrentIndex3(count3);
    slideRef.current?.classList.add("fade-anim");
  };

  return (
    <>
      <div className="carousel-cards">
        {/* Carousel wrapper */}
        <div className="carousel-cards_wrapp">
          <div className="carousel-cards_slide-wrapp" ref={slideRef}>
            {/* Item 1 */}
            <div className="carousel-cards_item">
              <a href="#">
                <img
                  className="rounded-t-lg mb-5"
                  src={imgData[currentIndex].imgUrl}
                  alt={imgData[currentIndex].imgTitle}
                />
              </a>
              <div className="px-5 pb-5">
                <a className="flex items-center mb-5" href="#">
                  <h3 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                    {imgData[currentIndex].name}
                  </h3>
                </a>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-gray-900 dark:text-white">
                    $ {imgData[currentIndex].price}
                  </span>
                  <ButtonLink
                    label="Más"
                    url={imgData[currentIndex].productUrl}
                    icon={<ArrowNarrowRightIcon />}
                    color="purple"
                    title="Ver producto"
                    customClass="bottom-0"
                  />
                </div>
              </div>
            </div>
            {/* Item 2 */}
            <div className="carousel-cards_item">
              <a href="#">
                <img
                  className="rounded-t-lg mb-5"
                  src={imgData[currentIndex2].imgUrl}
                  alt={imgData[currentIndex2].imgTitle}
                />
              </a>
              <div className="px-5 pb-5">
                <a className="flex items-center mb-5" href="#">
                  <h3 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                    {imgData[currentIndex2].name}
                  </h3>
                </a>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-gray-900 dark:text-white">
                    $ {imgData[currentIndex2].price}
                  </span>
                  <ButtonLink
                    label="Más"
                    url={imgData[currentIndex2].productUrl}
                    icon={<ArrowNarrowRightIcon />}
                    color="purple"
                    title="Ver producto"
                    customClass="bottom-0"
                  />
                </div>
              </div>
            </div>
            {/* Item 3 */}
            <div className="carousel-cards_item">
              <a href="#">
                <img
                  className="rounded-t-lg mb-5"
                  src={imgData[currentIndex3].imgUrl}
                  alt={imgData[currentIndex3].imgTitle}
                />
              </a>
              <div className="px-5 pb-5">
                <a className="flex items-center mb-5" href="#">
                  <h3 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                    {imgData[currentIndex3].name}
                  </h3>
                </a>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-gray-900 dark:text-white">
                    $ {imgData[currentIndex3].price}
                  </span>
                  <ButtonLink
                    label="Más"
                    url={imgData[currentIndex3].productUrl}
                    icon={<ArrowNarrowRightIcon />}
                    color="purple"
                    title="Ver producto"
                    customClass="bottom-0"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Slider controls */}
        <button
          type="button"
          className="flex absolute top-0 left-0 z-20 justify-center items-center h-full cursor-pointer group focus:outline-none"
          onClick={handlePrev}
        >
          <span className="inline-flex justify-center items-center w-8 h-[40px] rounded-lg sm:w-10 sm:h-[90px] bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-300"
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
          className="flex absolute top-0 right-0 z-20 justify-center items-center h-full cursor-pointer group focus:outline-none"
          onClick={handleNext}
        >
          <span className="inline-flex justify-center items-center w-8 h-[40px] rounded-lg sm:w-10 sm:h-[90px] bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-300"
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
      </div>
    </>
  );
};

export default CarouselCards;
