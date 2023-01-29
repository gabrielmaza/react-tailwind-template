import React, { useEffect, useState } from "react";
import Footer from "../../../components/footer/Footer";
import InputSearch from "../../../components/inputs/search/InputSearch";
import Navbar from "../../../components/navbar/Navbar";
import Alert from "../../../components/alert/Alert";
import PageTitle from "../../../components/page-title/PageTitle";
import Paginator from "../../../components/paginator/Paginator";
import Sidebar from "../../../components/sidebar/sidebar";
import ImgMasonryCardList from "../../../components/card-list/ImgMasonryCardList";
import Spinner3 from "../../../components/spinner-animation/Spinner3";
import { SidebarToggleBtn } from "../../../components/sidebar/SidebarToggleBtn";
import { LayoutSimpleSlider } from "../../../components/layouts/LayoutSimpleSlider";
import { useTranslation } from "react-i18next";
import ImgMasonryCard from "../../../components/cards/ImgMasonryCard";
import { ProductsData } from "../../../data/productsList";
import { Carousel } from "../../../components/carousel/Carousel";
import { SliderData } from "../../../data/homeSliderProducts";

const Home = () => {
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

  return (
    <>
      {isLoading ? (
        <Spinner3 />
      ) : (
        <>
          <Navbar navbarLogBtn mobSidebPubContent navbarLangSwitcher />

          <LayoutSimpleSlider>
            <Carousel sliderData={SliderData} transitionTime={5000} />

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
                    {ProductsData.map((item) => (
                      <ImgMasonryCard
                        key={item.id}
                        img={item.img}
                        title={item.title}
                        price={item.price}
                        offerPrice={item.offerPrice}
                        url={item.url}
                        favoriteBtn
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
