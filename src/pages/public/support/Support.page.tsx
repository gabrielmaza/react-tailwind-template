import React, { useState } from "react";
import { Link } from "react-router-dom";
import Accordion from "../../../components/accordion/Accordion";
import { AccordionItem } from "../../../components/accordion/AccordionItem";
import BreadCrumb from "../../../components/breadcrumb/BreadCrumb";
import Footer from "../../../components/footer/Footer";
import Navbar from "../../../components/navbar/Navbar";
import PageTitle from "../../../components/page-title/PageTitle";

const Support = () => {
  return (
    <>
      <Navbar navbarLogBtn />
      <div className="py-6 px-4 flex flex-col gap-6 container-100vh-180">
        <div className="flex flex-col-reverse gap-6 lg:flex-row">
          <div className="main-container">
            <BreadCrumb />
            <div className="flex flex-col gap-6">
              <PageTitle label="Support" />
              <Accordion>
                <AccordionItem title="How to publish?" open>
                  <p className="mb-2 text-gray-500 dark:text-gray-300">
                    To post on our website, you must create an account on the{" "}
                    <Link to="/register-form">Register page</Link> and validate
                    your email.
                  </p>
                </AccordionItem>
                <AccordionItem title="How to buy?">
                  <p className="mb-2 text-gray-500 dark:text-gray-300">
                    To buy on our website you must create an account in the{" "}
                    <Link to="/register-form">Register page.</Link> Then go to a
                    product page and Click the "Buy" button.
                  </p>
                </AccordionItem>
                <AccordionItem title="How to report?">
                  <p className="mb-2 text-gray-500 dark:text-gray-300">
                    To report a product, purchase or user you must send us a
                    message from the <Link to="/contact">Contact page</Link>{" "}
                    with the name, id, or SKU of the product, purchase code or
                    name of the username/email you want to report.
                  </p>
                </AccordionItem>
              </Accordion>
              <h2 className="mb-2 pr-8 text-xl md:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Contact channels
              </h2>
              <p>
                If you have questions about setting up your account, billing,
                access to courses or any other query, send us a direct message
                from us <Link to="/contact">contact center</Link> or an email
                email to support@....com. You can also find us at following
                social networks
              </p>
              <ul className="pl-5 text-gray-500 list-disc dark:text-gray-400">
                <li>
                  <a
                    href="https://flowbite.com/pro/"
                    className="text-indigo-600 dark:text-blue-500 hover:underline"
                  >
                    Twitter: https://twitter.com/
                  </a>
                </li>
                <li>
                  <a
                    href="https://tailwindui.com/"
                    rel="nofollow"
                    className="text-indigo-600 dark:text-blue-500 hover:underline"
                  >
                    Facebook: https://www.facebook.com/
                  </a>
                </li>
                <li>
                  <a
                    href="https://tailwindui.com/"
                    rel="nofollow"
                    className="text-indigo-600 dark:text-blue-500 hover:underline"
                  >
                    Instagram: https://www.instagram.com/
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Support;
