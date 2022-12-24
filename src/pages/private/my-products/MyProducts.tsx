import React from "react";
import ProductCardListColumn from "../../../components/cards/ProductCardListColumn";
import Footer from "../../../components/footer/Footer";
import Navbar from "../../../components/navbar/Navbar";
import PageTitle from "../../../components/page-title/PageTitle";
import Paginator from "../../../components/paginator/Paginator";

const MyProducts = () => {
  return (
    <>
      <Navbar />
      <div className="py-5 px-4 flex flex-col gap-6 container-100vh-180">
        <div className="flex flex-col gap-6 lg:flex-row">
          <div className="main-container">
            <PageTitle label="My products" />
            <ProductCardListColumn
              date
              pauseBtn
              deleteBtn
              updateBtn
              commentsBtn
              salesBtn
            />
            <Paginator />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MyProducts;
