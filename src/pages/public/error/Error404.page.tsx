import React from "react";
import BreadCrumb from "../../../components/breadcrumb/BreadCrumb";
import ButtonLink from "../../../components/button/ButtonLink";
import Footer from "../../../components/footer/Footer";
import Navbar from "../../../components/navbar/Navbar";
import PageTitle from "../../../components/page-title/PageTitle";

const Error404 = () => {
  return (
    <>
      <Navbar />
      <div className="py-6 px-4 flex flex-col gap-6 container-100vh-180">
        <div className="flex flex-col-reverse gap-6 lg:flex-row">
          <div className="main-container">
            <div className="flex flex-col items-center justify-center gap-4 py-10 h-auto">
              <h1 className="mb-2 md:mb-10 text-3xl md:text-[120px] font-bold text-center tracking-tight text-gray-900 dark:text-slate-300">
                404
              </h1>
              <h2 className="mb-2 text-xl font-semibold text-center tracking-tight text-gray-900 dark:text-slate-300">
                PAGE NOT FOUND
              </h2>
              <p className="mb-2 max-w-[500px] text-center text-lg font-semibold tracking-tight text-gray-900 dark:text-slate-200">
                The page you are looking for might have been removed had its
                name changed or is temporarly unavailable.
              </p>
              <ButtonLink
                label="Go to home"
                title="Go to home"
                url="/"
                color="purple"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Error404;
