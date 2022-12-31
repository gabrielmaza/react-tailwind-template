import React from "react";
import BreadCrumb from "../../../components/breadcrumb/BreadCrumb";
import ProductCardListColumn from "../../../components/cards/ProductCardListColumn";
import Footer from "../../../components/footer/Footer";
import InputSearch from "../../../components/inputs/search/InputSearch";
import Navbar from "../../../components/navbar/Navbar";
import PageTitle from "../../../components/page-title/PageTitle";
import Paginator from "../../../components/paginator/Paginator";

const Search = () => {
  return (
    <>
      <Navbar />
      <div className="py-5 px-4 flex flex-col gap-6 container-100vh-180">
        <BreadCrumb />
        <div className="main-container">
          <div className="flex gap-3">
            <InputSearch />
          </div>
          <div className="flex flex-col gap-6 w-full">
            <PageTitle label="Results found for [input text]" />
            <ProductCardListColumn favoriteBtn moreBtn />
            <Paginator />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Search;
