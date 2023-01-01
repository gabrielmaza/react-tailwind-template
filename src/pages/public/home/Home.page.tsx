import React, { useEffect, useState } from "react";
import Footer from "../../../components/footer/Footer";
import InputSearch from "../../../components/inputs/search/InputSearch";
import Navbar from "../../../components/navbar/Navbar";
import PageTitle from "../../../components/page-title/PageTitle";
import Paginator from "../../../components/paginator/Paginator";
import Sidebar from "../../../components/sidebar/sidebar";
import Carousel from "../../../components/carousel/Carousel";
import FullImgCardList from "../../../components/cards/FullImgCardList";
import Spinner3 from "../../../components/spinner-animation/Spinner3";
import { LayoutSimpleSliderHome } from "../../../components/layouts/LayoutSimpleSliderHome";
import { SidebarToggleBtn } from "../../../components/sidebar/SidebarToggleBtn";

const featureProducts = [
  "./src/assets/img/products/image-1.jpg",
  "./src/assets/img/products/image-2.jpg",
  "./src/assets/img/products/image-3.jpg",
];

const Home = () => {
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

  return (
    <>
      {isLoading ? (
        <Spinner3 />
      ) : (
        <>
          <Navbar navbarLogBtn />
          <LayoutSimpleSliderHome>
            <Carousel
              width="w-auto"
              height="h-56 md:h-96"
              indicatorsSection
              images={featureProducts}
            />
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
                  <FullImgCardList favoriteBtn moreBtn salesBtn />
                  <Paginator />
                </div>
              </div>
            </div>
          </LayoutSimpleSliderHome>
          <Footer />
        </>
      )}
    </>
  );
};

export default Home;
