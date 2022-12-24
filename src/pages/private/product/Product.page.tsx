import React, { useState } from "react";
import BreadCrumb from "../../../components/breadcrumb/BreadCrumb";
import Footer from "../../../components/footer/Footer";
import MyModal from "../../../components/modal/modal";
import ModalLoginContent from "../../../components/modal/ModalLoginContent";
import Navbar from "../../../components/navbar/Navbar";
import "./product-page.css";
import SimilarProductsList from "../../../components/similar-products-list/SimilarProducts";
import BestSellersList from "../../../components/best-sellers-list/BestSellersList";
import SubscribeBanner from "../../../components/subscribe-banner/SubscribeBanner";
import ProductDetailBigImg from "../../../components/product-detail/ProductDetail2";
import CommentsSection from "../../../components/comments-section/CommentsSection";
import ProductDetailSidebar from "../../../components/product-detail-sidebar/ProductDetailSidebar";
import ProductDetail1 from "../../../components/product-detail/ProductDetail1";
import ProductDetail2 from "../../../components/product-detail/ProductDetail2";

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
    id: 4,
    name: "This is a fancy product name 7",
    price: "344.99",
    productUrl: "#",
    imgUrl: "./src/assets/img/products/image-7.jpg",
    imgTitle: "This is a fancy img title",
  },
  {
    id: 5,
    name: "This is a fancy product name 8",
    price: "454.99",
    productUrl: "#",
    imgUrl: "./src/assets/img/products/image-1.jpg",
    imgTitle: "This is a fancy img title",
  },
  {
    id: 6,
    name: "This is a fancy product name 9",
    price: "1128.99",
    productUrl: "#",
    imgUrl: "./src/assets/img/products/image-2.jpg",
    imgTitle: "This is a fancy img title",
  },
];

const Product = () => {
  // Modal actions
  const [showModal, setShowModal] = useState(false);
  const handleChange = () => {
    setShowModal(!showModal);
  };
  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <>
      <Navbar />
      <div className="py-6 px-4 flex flex-col gap-6 container-100vh-180">
        <div className="flex flex-col-reverse gap-6 lg:flex-row">
          <div className="main-container">
            <BreadCrumb />
            <div className="flex flex-col lg:flex-row gap-6">
              <div className="w-full lg:w-4/6 max-w-full flex flex-col gap-6">
                <ProductDetail2 />
              </div>
              <div className="flex flex-col p-6 w-full lg:w-2/6 max-w-full divide-y divide-gray-400 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                <ProductDetailSidebar />
              </div>
            </div>
            <SimilarProductsList />
            <BestSellersList />
            <SubscribeBanner />
          </div>
        </div>
      </div>
      <Footer />

      <MyModal show={showModal} closeFunction={handleClose}>
        <ModalLoginContent
          closeFunction={handleClose}
          label="Para comprar debes iniciar sesión"
        />
      </MyModal>
    </>
  );
};

export default Product;
