import React from "react";
import ProductSmCard from "./ProductSmCard";

const productsData = [
  {
    id: 1,
    name: "This is a fancy product name 1",
    price: "456.99",
    productUrl: "#",
    imgUrl: "./src/assets/img/products/image-1.jpg",
    imgTitle: "This is a fancy img title",
  },
  {
    id: 2,
    name: "This is a fancy product name 2",
    price: "6345.99",
    productUrl: "#",
    imgUrl: "./src/assets/img/products/image-2.jpg",
    imgTitle: "This is a fancy img title",
  },
  {
    id: 3,
    name: "This is a fancy product name 3",
    price: "1764.99",
    productUrl: "#",
    imgUrl: "./src/assets/img/products/image-3.jpg",
    imgTitle: "This is a fancy img title",
  },
  {
    id: 4,
    name: "This is a fancy product name 4",
    price: "344.99",
    productUrl: "#",
    imgUrl: "./src/assets/img/products/image-4.jpg",
    imgTitle: "This is a fancy img title",
  },
  {
    id: 5,
    name: "This is a fancy product name 5",
    price: "454.99",
    productUrl: "#",
    imgUrl: "./src/assets/img/products/image-5.jpg",
    imgTitle: "This is a fancy img title",
  },
  {
    id: 6,
    name: "This is a fancy product name 6",
    price: "1128.99",
    productUrl: "#",
    imgUrl: "./src/assets/img/products/image-6.jpg",
    imgTitle: "This is a fancy img title",
  },
  {
    id: 7,
    name: "This is a fancy product name 7",
    price: "344.99",
    productUrl: "#",
    imgUrl: "./src/assets/img/products/image-7.jpg",
    imgTitle: "This is a fancy img title",
  },
  {
    id: 8,
    name: "This is a fancy product name 8",
    price: "454.99",
    productUrl: "#",
    imgUrl: "./src/assets/img/products/image-1.jpg",
    imgTitle: "This is a fancy img title",
  },
  {
    id: 9,
    name: "This is a fancy product name 9",
    price: "1128.99",
    productUrl: "#",
    imgUrl: "./src/assets/img/products/image-2.jpg",
    imgTitle: "This is a fancy img title",
  },
];

const ProductSmCardList = () => {
  const horizontalScroll = (event) => {
    const delta = Math.max(
      -2,
      Math.min(2, event.nativeEvent.wheelDelta || -event.nativeEvent.detail)
    );
    event.currentTarget.scrollLeft -= delta * 10;
    event.preventDefault;
  };
  return (
    <>
      <div className="product-sm-card-list" onWheel={horizontalScroll}>
        {productsData.map((item) => (
          <div key={item.id}>
            <ProductSmCard
              id={item.id}
              name={item.name}
              price={item.price}
              productUrl={item.productUrl}
              imgUrl={item.imgUrl}
              imgTitle={item.imgTitle}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductSmCardList;
