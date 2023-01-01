import { ArrowNarrowRightIcon } from "@heroicons/react/solid";
import React from "react";
import BreadCrumb from "../../../components/breadcrumb/BreadCrumb";
import Button from "../../../components/button/Button";
import Footer from "../../../components/footer/Footer";
import Navbar from "../../../components/navbar/Navbar";
import PageTitle from "../../../components/page-title/PageTitle";

const PrivacyPolicy = () => {
  return (
    <>
      <Navbar navbarLogBtn />
      <div className="py-6 px-4 flex flex-col gap-6 container-100vh-180">
        <div className="flex flex-col-reverse gap-6 lg:flex-row">
          <div className="main-container">
            <BreadCrumb />
            <div className="flex flex-col gap-6">
              <PageTitle label="Privacy policy" />
              <h2 className="mb-2 pr-8 text-xl md:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                PLEASE READ THIS CAREFULLY. THIS DOCUMENT INDICATES HOW THIS
                SITE WILL USE AND PROTECT YOUR PERSONAL DATA. WHILE YOU NAVIGATE
                THIS WEBSITE, YOU AUTOMATICALLY ACCEPT THE TERMS OF USE,
                PROTECTION AND SECURITY ESTABLISHED HEREIN.
              </h2>
              <h3 className="mb-2 pr-8 text-lg md:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Security and Protection of your Personal Data.
              </h3>
              <p>
                The security of personal data is a priority for this place. This
                website strives to offer the highest level security for which
                advanced technology is used. We adhere to the requirements of
                the National Protection Law of Personal Data, No. 25,326 and its
                complementary regulations.
              </p>
              <h3 className="mb-2 pr-8 text-lg md:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Your privacy.
              </h3>
              <p>
                This site respects your privacy. All the information that you
                provide us will be treated with the utmost care and with the
                greatest possible safety, and will only be used in accordance
                with the limits set forth in this document.
              </p>
              <h3 className="mb-2 pr-8 text-lg md:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                How the information is gathered.
              </h3>
              <p>
                This site only collects your personal data when you provides
                directly and with your express consent and informed.
              </p>
              <h3 className="mb-2 pr-8 text-lg md:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                How this site uses your information.
              </h3>
              <p>
                This site uses the information you provide to: expand marketing
                offers and to publish products and services that may be of
                interest to you, to personalize and improve our services and for
                statistical purposes of this site Who has access to the
                information? this site always is committed to presenting new
                solutions that improve the value of your products and services.
                The information is not identifiable and statistical information
                may also be shared with Business partners. Security and
                Protection of your Data Personal The security of personal data
                is a priority for this site. This website strives to offer the
                most high level of security for which security technology is
                used advanced. We adhere to the requirements of the National Law
                of Protection of Personal Data, No. 25,326 and its regulations
                complementary.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
