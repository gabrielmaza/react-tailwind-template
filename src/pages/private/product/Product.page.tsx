import React, { useState } from "react";
import BreadCrumb from "../../../components/breadcrumb/BreadCrumb";
import Footer from "../../../components/footer/Footer";
import MyModal from "../../../components/modal/modal";
import ModalLoginContent from "../../../components/modal/ModalLoginContent";
import Navbar from "../../../components/navbar/Navbar";
import "./product-page.css";
import ProductDetailSidebar from "../../../components/product-detail-sidebar/ProductDetailSidebar";
import ProductDetail2 from "../../../components/product-detail/ProductDetail2";
import ImgSmallCard from "../../../components/cards/ImgSmallCard";
import CardsWideList from "../../../components/card-list/CardsWideList";
import CallToActionBanner from "../../../components/calltoaction-banner/CallToActionBanner";
import { CallToActionBannerBody } from "../../../components/calltoaction-banner/CallToActionBannerP";
import { CallToActionBannerHeader } from "../../../components/calltoaction-banner/CallToActionBannerHeader";
import { CheckIcon } from "@heroicons/react/solid";
import data from "../../../data/productsList.json";

const Product = () => {
  const productsDataList = data;
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
      <Navbar navbarMenu navbarUserAvatar navbarLangSwitcher />
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
            <CardsWideList title="Best Sellers">
              {productsDataList.map(({ id, title, price, url, img }) => (
                <ImgSmallCard
                  key={id}
                  id={id}
                  title={title}
                  price={price}
                  productUrl={url}
                  imgUrl={img}
                  imgTitle={title}
                />
              ))}
            </CardsWideList>
            <CardsWideList title="similar products">
              {productsDataList.map(({ id, title, price, url, img }) => (
                <ImgSmallCard
                  key={id}
                  id={id}
                  title={title}
                  price={price}
                  productUrl={url}
                  imgUrl={img}
                  imgTitle={title}
                />
              ))}
            </CardsWideList>

            <CallToActionBanner>
              <CallToActionBannerHeader>
                <div className="flex items-center">
                  <CheckIcon className="h-9 mr-2 pb-1" />
                  <h2 className="text-lg md:text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Subscribe to our newsletter
                  </h2>
                </div>
              </CallToActionBannerHeader>
              <CallToActionBannerBody>
                <p className="font-normal text-base md:text-lg text-gray-700 dark:text-gray-400">
                  Be the first to find out about the best products and offers
                  published on the internet.
                </p>
              </CallToActionBannerBody>
            </CallToActionBanner>
          </div>
        </div>
      </div>
      <Footer />

      <MyModal show={showModal} closeFunction={handleClose}>
        <ModalLoginContent
          closeFunction={handleClose}
          label="To buy you must log in"
        />
      </MyModal>
    </>
  );
};

export default Product;
