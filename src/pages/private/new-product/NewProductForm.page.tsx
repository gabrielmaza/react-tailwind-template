import { UploadIcon } from "@heroicons/react/solid";
import React from "react";
import BreadCrumb from "../../../components/breadcrumb/BreadCrumb";
import Button from "../../../components/button/Button";
import ButtonLink from "../../../components/button/ButtonLink";
import Footer from "../../../components/footer/Footer";
import InputCheckbox from "../../../components/inputs/checkbox/InputCheckbox";
import Dropdown from "../../../components/inputs/dropdown/InputDropdown";
import InputFile from "../../../components/inputs/file/InputFile";
import InputTextarea from "../../../components/inputs/text-area/InputTextarea";
import InputText from "../../../components/inputs/text/InputText";
import Navbar from "../../../components/navbar/Navbar";
import PageTitle from "../../../components/page-title/PageTitle";

const NewProductForm = () => {
  return (
    <>
      <Navbar />
      <div className="py-6 px-4 flex flex-col gap-6 container-100vh-180">
        <div className="flex flex-col-reverse gap-6 lg:flex-row">
          <div className="main-container">
            <BreadCrumb />
            <PageTitle label="Publish new" />
            <form className="w-full p-3 md:p-5 rounded-lg text-gray-700 border border-gray-200 bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
              <div className="mb-6 max-w-[600px]">
                <div className="flex items-center gap-2">
                  <h3 className="mb-1 text-lg font-normal tracking-tight text-gray-900 dark:text-gray-400">
                    Image / Photo
                  </h3>
                </div>
                <p className="mb-3 font-bold text-gray-700 dark:text-white">
                  *Upload only clear photos of the product/service.
                </p>
                <div className="mb-3">
                  <InputFile placeholder="Subir factura" accept="image/*" />
                </div>
              </div>

              <div className="mb-6 max-w-[600px]">
                <div className="flex items-center gap-2">
                  <h3 className="mb-1 text-lg font-normal tracking-tight text-gray-900 dark:text-gray-400">
                    Title
                  </h3>
                </div>
                <div className="mb-3">
                  <InputText
                    placeholder="Ingresa un título del producto"
                    required
                  />
                </div>
              </div>

              <div className="mb-6 max-w-[600px]">
                <div className="flex items-center gap-2">
                  <h3 className="mb-3 text-lg font-normal tracking-tight text-gray-900 dark:text-gray-400">
                    Price
                  </h3>
                </div>
                <div className="flex gap-2 items-center mb-3 max-w-sm">
                  <span className="text-xl text-gray-900 dark:text-gray-400">
                    $
                  </span>
                  <InputText placeholder="00.00" type="number" required />
                </div>
              </div>

              <div className="mb-6 max-w-[600px]">
                <div className="flex items-center gap-2">
                  <h3 className="mb-1 text-lg font-normal tracking-tight text-gray-900 dark:text-gray-400">
                    Category
                  </h3>
                </div>
                <div className="mb-3">
                  <Dropdown label="Chose category">
                    <ul
                      className="py-1 text-sm text-gray-700 dark:text-gray-200"
                      aria-labelledby="dropdownActionButton"
                    >
                      <li className="p-0">
                        <a
                          href="#"
                          className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Notebooks
                        </a>
                      </li>
                      <li className="p-0">
                        <a
                          href="#"
                          className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Desktop
                        </a>
                      </li>
                      <li className="p-0">
                        <a
                          href="#"
                          className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Mothers
                        </a>
                      </li>
                    </ul>
                    <div className="py-1">
                      <a
                        href="#"
                        className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                      >
                        Otra
                      </a>
                    </div>
                  </Dropdown>
                </div>
              </div>

              <div className="mb-6 max-w-[600px]">
                <div className="flex items-center gap-2">
                  <h3 className="mb-1 text-lg font-normal tracking-tight text-gray-900 dark:text-gray-400">
                    Description
                  </h3>
                </div>
                <div className="mb-3">
                  <InputTextarea
                    placeholder="Ingresa una breve descripción"
                    required
                  />
                </div>
              </div>

              <div className="mb-6 max-w-[600px]">
                <div className="flex items-center gap-2">
                  <h3 className="mb-3 text-lg font-normal tracking-tight text-gray-900 dark:text-gray-400">
                    Product Condition
                  </h3>
                </div>
                <div className="mb-3">
                  <Dropdown label="Product Condition">
                    <ul
                      className="py-1 text-sm text-gray-700 dark:text-gray-200"
                      aria-labelledby="dropdownActionButton"
                    >
                      <li className="p-0">
                        <a
                          href="#"
                          className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          New
                        </a>
                      </li>
                      <li className="p-0">
                        <a
                          href="#"
                          className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Used like new
                        </a>
                      </li>
                      <li className="p-0">
                        <a
                          href="#"
                          className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Used
                        </a>
                      </li>
                      <li className="p-0">
                        <a
                          href="#"
                          className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Poor condition / faulty
                        </a>
                      </li>
                    </ul>
                  </Dropdown>
                </div>
              </div>

              <div className="mb-6 max-w-[600px]">
                <div className="flex items-center gap-2">
                  <h3 className="mb-3 text-lg font-normal tracking-tight text-gray-900 dark:text-gray-400">
                    Shipping
                  </h3>
                </div>
                <div className="mb-3">
                  <Dropdown label="Shipping type">
                    <ul
                      className="py-1 text-sm text-gray-700 dark:text-gray-200"
                      aria-labelledby="dropdownActionButton"
                    >
                      <li className="p-0">
                        <a
                          href="#"
                          className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          I do not ship
                        </a>
                      </li>
                      <li className="p-0">
                        <a
                          href="#"
                          className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Local
                        </a>
                      </li>
                      <li className="p-0">
                        <a
                          href="#"
                          className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Provincial
                        </a>
                      </li>
                      <li className="p-0">
                        <a
                          href="#"
                          className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Algunas provincias
                        </a>
                      </li>
                      <li className="p-0">
                        <a
                          href="#"
                          className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Todo el país
                        </a>
                      </li>
                      <li className="p-0">
                        <a
                          href="#"
                          className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Todo el país y países limítrofes
                        </a>
                      </li>
                      <li className="p-0">
                        <a
                          href="#"
                          className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Todo el país y el mundo
                        </a>
                      </li>
                    </ul>
                  </Dropdown>
                </div>
              </div>

              <div className="w-full flex justify-end mb-6">
                <ButtonLink
                  label="Publish"
                  title="Publish"
                  url="#"
                  color="green"
                  customClass="px-6 py-3"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default NewProductForm;
