import React, { useEffect, useState } from "react";
import Footer from "../../../components/footer/Footer";
import InputSearch from "../../../components/inputs/search/InputSearch";
import Navbar from "../../../components/navbar/Navbar";
import Alert from "../../../components/alert/Alert";
import PageTitle from "../../../components/page-title/PageTitle";
import Paginator from "../../../components/paginator/Paginator";
import Sidebar from "../../../components/sidebar/sidebar";
import Carousel from "../../../components/carousel/Carousel";
import ImgMasonryCardList from "../../../components/card-list/ImgMasonryCardList";
import Spinner3 from "../../../components/spinner-animation/Spinner3";
import { SidebarToggleBtn } from "../../../components/sidebar/SidebarToggleBtn";
import { LayoutSimpleSlider } from "../../../components/layouts/LayoutSimpleSlider";
import { useTranslation } from "react-i18next";
import ImgMasonryCard from "../../../components/cards/ImgMasonryCard";
import data from "../../../data/productsList.json";
import dataSlider from "../../../data/homeSliderProducts.json";
import { ArrowCircleRightIcon } from "@heroicons/react/solid";

const featureProducts = [
  "./src/assets/img/products/image-1.jpg",
  "./src/assets/img/products/image-2.jpg",
  "./src/assets/img/products/image-3.jpg",
];

const slides = [
  { url: "./src/assets/img/products/image-1.jpg", title: "Img title 1" },
  { url: "./src/assets/img/products/image-2.jpg", title: "Img title 2" },
  { url: "./src/assets/img/products/image-4.jpg", title: "Img title 3" },
];

const Home = () => {
  const productsDataList = data;

  const { t, i18n } = useTranslation("global");

  const [toggleSidebar, setToggleSidebar] = useState(false);

  const handleToggleSidebar = () => {
    setToggleSidebar(!toggleSidebar);
  };

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getItems = async () => {
      await fetch("/");
      setIsLoading(false);
    };
    getItems();
  }, []);

  // Slider
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const handleNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  // let slideInterval;

  // const startSlider = () => {
  //   if (!slideInterval) {
  //     slideInterval = setInterval(() => {
  //       handleNext();
  //     }, 3000);
  //     console.log("Interval works!");
  //   }
  // };

  // useEffect(() => {
  //   startSlider();
  // }, []);

  return (
    <>
      {isLoading ? (
        <Spinner3 />
      ) : (
        <>
          <Navbar navbarLogBtn mobSidebPubContent navbarLangSwitcher />

          <LayoutSimpleSlider>
            <div className="main-carrusel h-[480px] relative">
              <div className="main-carrusel_img-wrapp relative h-full text-center duration-700 ease-in-out transition-all">
                <img
                  src={slides[currentIndex].url}
                  alt={slides[currentIndex].title}
                  className="absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] w-full h-full object-cover overflow-hidden rounded-lg transition-all"
                />
                <button
                  type="button"
                  className="flex justify-center items-center absolute top-0 left-0 z-20 px-4 h-full cursor-pointer group focus:outline-none"
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
                  className="flex justify-center items-center absolute top-0 right-0 z-20 px-4 h-full cursor-pointer group focus:outline-none"
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
                <div className="flex absolute bottom-3 left-1/2 z-20 space-x-3 -translate-x-1/2">
                  {slides.map((slide, slideIndex) => (
                    <button
                      key={slideIndex}
                      type="button"
                      className={`w-3 h-3 rounded-full z-20 bg-white dark:bg-gray-400 bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-500`}
                      onClick={() => goToSlide(slideIndex)}
                    ></button>
                  ))}
                </div>
              </div>
            </div>

            {/* <Carousel
              width="w-auto"
              height="h-56 md:h-96"
              indicatorsSection
              images={featureProducts}
            /> */}
            <div
              className={`grid ${
                !toggleSidebar
                  ? "grid-cols-[minmax(0px,_1fr)]"
                  : "lg:grid-cols-[290px_minmax(200px,_1fr)]"
              }`}
            >
              <Sidebar
                toggleSidebar={toggleSidebar}
                handleClick={handleToggleSidebar}
              />
              <div className="flex flex-col gap-6 w-full">
                <div className="main-container">
                  <div className="flex gap-3">
                    <SidebarToggleBtn
                      toggleSidebar={toggleSidebar}
                      handleClick={handleToggleSidebar}
                    />
                    <InputSearch />
                  </div>
                  <PageTitle label="Latest" />
                  <ImgMasonryCardList>
                    {productsDataList.map((item) => (
                      <ImgMasonryCard
                        key={item.id}
                        img={item.img}
                        title={item.title}
                        price={item.price}
                        offerPrice={item.offerPrice}
                        url={item.url}
                        favoriteBtn
                        salesBtn
                        date={item.date}
                        category={item.category}
                        offer={item.offer}
                      />
                    ))}
                  </ImgMasonryCardList>
                  <Paginator />
                </div>
              </div>
            </div>
          </LayoutSimpleSlider>
          <Footer />
        </>
      )}
    </>
  );
};

export default Home;
