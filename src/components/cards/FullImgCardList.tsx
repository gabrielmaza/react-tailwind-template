import React from "react";
import FullImgCard from "./FullImgCard";
import "./cards.css";

const featureProducts = [
  {
    id: 1,
    url: "#",
    img: "./src/assets/img/products/image-1.jpg",
    title: "Lorem ipsum corem firum moren...",
    subtitle: "Lorem ipsum corem firum moren...",
    price: 99.99,
  },
  {
    id: 2,
    url: "#",
    img: "./src/assets/img/products/image-2.jpg",
    title: "Lorem ipsum corem firum moren...",
    subtitle: "Lorem ipsum corem firum moren...",
    price: 99.99,
  },
  {
    id: 3,
    url: "#",
    img: "./src/assets/img/products/image-3.jpg",
    title: "Lorem ipsum corem firum moren...",
    subtitle: "Lorem ipsum corem firum moren...",
    price: 99.99,
  },
  {
    id: 4,
    url: "#",
    img: "./src/assets/img/products/image-4.jpg",
    title: "Lorem ipsum corem firum moren...",
    subtitle: "Lorem ipsum corem firum moren...",
    price: 99.99,
  },
  {
    id: 5,
    url: "#",
    img: "./src/assets/img/products/image-5.jpg",
    title: "Lorem ipsum corem firum moren...",
    subtitle: "Lorem ipsum corem firum moren...",
    price: 99.99,
  },
  {
    id: 6,
    url: "#",
    img: "./src/assets/img/products/image-6.jpg",
    title: "Lorem ipsum corem firum moren...",
    subtitle: "Lorem ipsum corem firum moren...",
    price: 99.99,
  },
  {
    id: 7,
    url: "#",
    img: "./src/assets/img/products/image-7.jpg",
    title: "Lorem ipsum corem firum moren...",
    subtitle: "Lorem ipsum corem firum moren...",
    price: 99.99,
  },
  {
    id: 8,
    url: "#",
    img: "./src/assets/img/products/image-1.jpg",
    title: "Lorem ipsum corem firum moren...",
    subtitle: "Lorem ipsum corem firum moren...",
    price: 99.99,
  },
];

interface FullImgCardListProps {
  favoriteBtn?: boolean;
  deleteBtn?: boolean;
  updateBtn?: boolean;
  pauseBtn?: boolean;
  moreBtn?: boolean;
  commentsBtn?: boolean;
  salesBtn?: boolean;
  date?: boolean;
}

const FullImgCardList = ({
  favoriteBtn = false,
  deleteBtn = false,
  updateBtn = false,
  pauseBtn = false,
  moreBtn = false,
  commentsBtn = false,
  salesBtn = false,
  date = false,
}: FullImgCardListProps) => {
  return (
    <div className="full-img-card-list">
      {featureProducts.map((item) => (
        <FullImgCard
          key={item.id}
          img={item.img}
          title={item.title}
          subTitle={item.subtitle}
          price={item.price}
          url={item.url}
          favoriteBtn={favoriteBtn}
          deleteBtn={deleteBtn}
          updateBtn={updateBtn}
          pauseBtn={pauseBtn}
          moreBtn={moreBtn}
          commentsBtn={commentsBtn}
          salesBtn={salesBtn}
          date={date}
        />
      ))}
    </div>
  );
};

export default FullImgCardList;
