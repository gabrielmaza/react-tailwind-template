import React from "react";
import Footer from "../../../components/footer/Footer";
import Navbar from "../../../components/navbar/Navbar";
import PageTitle from "../../../components/page-title/PageTitle";
import Paginator from "../../../components/paginator/Paginator";
import CardListColumn from "../../../components/card-list/CardListColumn";
import ImgBigCard from "../../../components/cards/ImgBigCard";

const featureProducts = [
  {
    id: 1,
    url: "#",
    img: "./src/assets/img/products/image-1.jpg",
    title: "Lorem ipsum corem firum moren...",
    subtitle: "Lorem ipsum corem firum moren...",
    price: "99,99",
    date: "02 Jul",
  },
  {
    id: 2,
    url: "#",
    img: "./src/assets/img/products/image-2.jpg",
    title: "Lorem ipsum corem firum moren...",
    subtitle: "Lorem ipsum corem firum moren...",
    price: "99,99",
  },
  {
    id: 3,
    url: "#",
    img: "./src/assets/img/products/image-3.jpg",
    title: "Lorem ipsum corem firum moren...",
    subtitle: "Lorem ipsum corem firum moren...",
    price: "99,99",
    date: "02 Jul",
  },
  {
    id: 4,
    url: "#",
    img: "./src/assets/img/products/image-4.jpg",
    title: "Lorem ipsum corem firum moren...",
    subtitle: "Lorem ipsum corem firum moren...",
    price: "99,99",
    date: "02 Jul",
  },
  {
    id: 5,
    url: "#",
    img: "./src/assets/img/products/image-5.jpg",
    title: "Lorem ipsum corem firum moren...",
    subtitle: "Lorem ipsum corem firum moren...",
    price: "99,99",
    date: "02 Jul",
  },
  {
    id: 6,
    url: "#",
    img: "./src/assets/img/products/image-6.jpg",
    title: "Lorem ipsum corem firum moren...",
    subtitle: "Lorem ipsum corem firum moren...",
    price: "99,99",
    date: "02 Jul",
  },
  {
    id: 7,
    url: "#",
    img: "./src/assets/img/products/image-7.jpg",
    title: "Lorem ipsum corem firum moren...",
    subtitle: "Lorem ipsum corem firum moren...",
    price: "99,99",
    date: "02 Jul",
  },
  {
    id: 8,
    url: "#",
    img: "./src/assets/img/products/image-1.jpg",
    title: "Lorem ipsum corem firum moren...",
    subtitle: "Lorem ipsum corem firum moren...",
    price: "99,99",
    date: "02 Jul",
  },
];

const Favorite = () => {
  return (
    <>
      <Navbar navbarMenu navbarUserAvatar navbarLangSwitcher />
      <div className="py-5 px-4 flex flex-col gap-6 container-100vh-180">
        <div className="flex flex-col gap-6 lg:flex-row">
          <div className="main-container">
            <PageTitle label="Favorites" />
            <CardListColumn>
              {featureProducts.map(
                ({ id, img, title, subtitle, price, url, date }) => (
                  <ImgBigCard
                    key={id}
                    img={img}
                    title={title}
                    subTitle={subtitle}
                    price={price}
                    url={url}
                    favoriteBtn
                    deleteBtn
                    updateBtn
                    pauseBtn
                    moreBtn
                    commentsBtn
                    salesBtn
                    date={date}
                  />
                )
              )}
            </CardListColumn>
            <Paginator />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Favorite;
