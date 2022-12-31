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
import ProductDetailSidebar from "../../../components/product-detail-sidebar/ProductDetailSidebar";
import ProductDetail2 from "../../../components/product-detail/ProductDetail2";

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
              <div className="flex flex-col gap-4 p-6 w-full lg:w-2/6 max-w-full divide-y divide-gray-400 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
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
