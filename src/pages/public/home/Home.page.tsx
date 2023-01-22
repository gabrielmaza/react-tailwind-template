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

const featureProducts = [
  "./src/assets/img/products/image-1.jpg",
  "./src/assets/img/products/image-2.jpg",
  "./src/assets/img/products/image-3.jpg",
];

const productsList = [
  {
    id: 1,
    url: "#",
    img: "./src/assets/img/products/image-1.jpg",
    title: "Drone x-41 HD",
    subtitle: "Lorem ipsum corem firum moren...",
    price: 199.99,
    offerPrice: "159.99",
    date: "02 Jul 2022",
  },
  {
    id: 2,
    url: "#",
    img: "./src/assets/img/products/image-2.jpg",
    title: "Gamer optical mouse",
    subtitle: "Lorem ipsum corem firum moren...",
    price: 123.99,
    offerPrice: "00.00",
    date: "02 Jul 2022",
  },
  {
    id: 3,
    url: "#",
    img: "./src/assets/img/products/image-3.jpg",
    title: "Apple product",
    subtitle: "Lorem ipsum corem firum moren...",
    price: 234.99,
    offerPrice: "00.00",
    date: "02 Jul 2022",
  },
  {
    id: 4,
    url: "#",
    img: "./src/assets/img/products/image-4.jpg",
    title: "Headphones x-sound",
    subtitle: "Lorem ipsum corem firum moren...",
    price: 3434.99,
    offerPrice: "00.00",
    date: "02 Jul 2022",
  },
  {
    id: 5,
    url: "#",
    img: "./src/assets/img/products/image-5.jpg",
    title: "Lorem ipsum corem firum moren...",
    subtitle: "Lorem ipsum corem firum moren...",
    price: 939.99,
    offerPrice: "00.00",
    date: "02 Jul 2022",
  },
  {
    id: 6,
    url: "#",
    img: "./src/assets/img/products/image-6.jpg",
    title: "Lorem ipsum corem firum moren...",
    subtitle: "Lorem ipsum corem firum moren...",
    price: 856.99,
    offerPrice: "00.00",
    date: "02 Jul 2022",
  },
  {
    id: 7,
    url: "#",
    img: "./src/assets/img/products/image-7.jpg",
    title: "Lorem ipsum corem firum moren...",
    subtitle: "Lorem ipsum corem firum moren...",
    price: 135.99,
    offerPrice: "00.00",
    date: "02 Jul 2022",
  },
  {
    id: 8,
    url: "#",
    img: "./src/assets/img/products/image-1.jpg",
    title: "Lorem ipsum corem firum moren...",
    subtitle: "Lorem ipsum corem firum moren...",
    price: 246.0,
    offerPrice: "00.00",
    date: "02 Jul 2022",
  },
];

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
                  <ImgMasonryCardList>
                    {productsList.map((item) => (
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
