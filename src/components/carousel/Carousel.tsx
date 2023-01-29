import { ArrowNarrowRightIcon } from "@heroicons/react/solid";
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import BigButtonLink from "../button/bigButtonLink";
import "./carousel.css";
// import { sliderData } from "../../data/homeSliderProducts";

interface CarouselProps {
  sliderData: any;
  transitionTime?: any;
}

export const Carousel = ({
  sliderData,
  transitionTime = 4000,
}: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? sliderData.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const handleNext = () => {
    const isLastSlide = currentIndex === sliderData.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  useEffect(() => {
    let slideInterval;
    const startSlider = () => {
      if (!slideInterval) {
        slideInterval = setInterval(handleNext, transitionTime);
      }
    };
    startSlider();

    return () => {
      clearInterval(slideInterval);
    };
  }, [currentIndex]);

  return (
    <div className="main-carousel">
      <div className="main-carousel_img-wrapp">
        {sliderData.map((slide, index) => {
          return (
            <div key={slide.id}>
              <img
                src={slide.img}
                alt={slide.title}
                className={`main-carousel_img ${
                  index === currentIndex && "active"
                }`}
              />
              <div
                className={`main-carousel_link ${
                  index === currentIndex && "active"
                }`}
              >
                <Link to="/product" title="Product link">
                  <h2
                    className={`main-carousel_title ${
                      index === currentIndex && "active"
                    }`}
                  >
                    {slide.title}
                  </h2>
                </Link>
                <Link to="/product" title="Product link">
                  <span
                    className={`main-carousel_subtitle ${
                      index === currentIndex && "active"
                    }`}
                  >
                    {slide.subtitle}
                  </span>
                </Link>
                <BigButtonLink
                  label="More"
                  url="#"
                  icon={<ArrowNarrowRightIcon />}
                  color="transparent-purple"
                  title="Show product"
                  customClass={`main-carousel_btn-link ${
                    index === currentIndex && "active"
                  }`}
                />
              </div>

              <button
                type="button"
                className="main-carousel_control-btn before"
                onClick={handlePrev}
              >
                <span className="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5 text-white sm:w-6 sm:h-6"
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
                className="main-carousel_control-btn next"
                onClick={handleNext}
              >
                <span className="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5 text-white sm:w-6 sm:h-6"
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
          );
        })}
      </div>
      <div className="main-carousel_control-bullets-wrapp">
        {sliderData.map((slide, slideIndex) => (
          <button
            key={slideIndex}
            type="button"
            className={`main-carousel_control-bullets
              ${
                sliderData[currentIndex] === slide
                  ? "bg-white dark:bg-gray-400"
                  : "bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-500"
              }
              `}
            onClick={() => goToSlide(slideIndex)}
          ></button>
        ))}
      </div>
    </div>
  );
};
