import { ArrowNarrowRightIcon } from "@heroicons/react/solid";
import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import ButtonLink from "../button/ButtonLink";
import "./carousel.css";

interface Carousel2Props {
  width: string;
  height: string;
  indicatorsSection?: boolean;
  bullets?: any;
  images: any;
}

let count = 0;

let slideInterval;

const Carousel2 = ({
  width,
  height,
  indicatorsSection,
  bullets,
  images,
}: Carousel2Props) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slideRef = useRef<HTMLDivElement>(null);
  const controlRef = useRef<HTMLButtonElement>(null);
  const indicatorRef = useRef<HTMLDivElement>(null);

  const removeAnimation = () => {
    slideRef.current?.classList.remove("fade-anim");
  };

  useEffect(() => {
    slideRef.current?.addEventListener("animationend", () => {
      removeAnimation();
    });
    slideRef.current?.addEventListener("mouseenter", () => {
      pauseSlider();
    });
    slideRef.current?.addEventListener("mouseleave", () => {
      startSlider();
    });
    controlRef.current?.addEventListener("mouseenter", () => {
      pauseSlider();
    });
    controlRef.current?.addEventListener("mouseleave", () => {
      startSlider();
    });
    indicatorRef.current?.addEventListener("mouseenter", () => {
      pauseSlider();
    });
    indicatorRef.current?.addEventListener("mouseleave", () => {
      startSlider();
    });
    startSlider();
  }, []);

  const startSlider = () => {
    if (!slideInterval) {
      slideInterval = setInterval(() => {
        handleNext();
      }, 3000);
    }
  };

  const pauseSlider = () => {
    clearInterval(slideInterval);
    slideInterval = 0;
  };

  const handleNext = () => {
    count = (count + 1) % images.length;
    setCurrentIndex(count);
    slideRef.current?.classList.add("fade-anim");
  };
  const handlePrev = () => {
    const productsLength = images.length;
    count = (currentIndex + productsLength - 1) % productsLength;
    setCurrentIndex(count);
    slideRef.current?.classList.add("fade-anim");
  };
  const handleChose = (item) => {
    count = item % images.length;
    setCurrentIndex(count);
  };

  return (
    <>
      <div className="main-carrusel">
        {/* Carousel wrapper */}
        <div
          className={`overflow-hidden relative rounded-lg ${width} ${height}`}
        >
          {/* Item */}
          <div className="main-carrusel_img-wrapp" ref={slideRef}>
            <img
              src={images[currentIndex]}
              className="absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] w-full h-auto object-cover overflow-hidden rounded-lg"
              alt="..."
            />
            <Link
              to="/product"
              title="Product link"
              className="absolute w-full left-0 bottom-10 mx-auto text-center md:text-left px-2 md:px-12 z-20 flex flex-col gap-4"
            >
              <span className="w-full md:w-3/6 text-sm sm:text-2xl lg:text-3xl font-bold text-white dark:text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing
              </span>
              <ButtonLink
                label="More"
                url="#"
                icon={<ArrowNarrowRightIcon />}
                color="transparent-bordered"
                title="Show product"
                customClass="hidden md:flex md:px-6 md:py-3"
              />
            </Link>
          </div>
        </div>
        {/* Slider indicators */}
        {indicatorsSection ? (
          <div
            className="flex absolute bottom-3 left-1/2 z-20 space-x-3 -translate-x-1/2"
            ref={indicatorRef}
          >
            {images.map((item) => (
              <button
                key={item}
                type="button"
                className={`w-3 h-3 rounded-full z-20
                ${
                  images[currentIndex] === item
                    ? "bg-white dark:bg-gray-400"
                    : "bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-500"
                }
                `}
                onClick={() => handleChose(item)}
              ></button>
            ))}
          </div>
        ) : (
          ""
        )}
        {/* Slider controls */}
        <button
          type="button"
          className="flex justify-center items-center absolute top-0 left-0 z-20 px-4 h-full cursor-pointer group focus:outline-none"
          onClick={handlePrev}
          ref={controlRef}
        >
          <span className="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
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
          className="flex justify-center items-center absolute top-0 right-0 z-20 px-4 h-full cursor-pointer group focus:outline-none"
          onClick={handleNext}
          ref={controlRef}
        >
          <span className="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
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

export default Carousel2;
