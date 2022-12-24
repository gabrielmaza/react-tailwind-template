import {
  AnnotationIcon,
  ArrowRightIcon,
  FilterIcon,
  UploadIcon,
} from "@heroicons/react/solid";
import React from "react";
import { Link } from "react-router-dom";
import BreadCrumb from "../../../components/breadcrumb/BreadCrumb";
import Button from "../../../components/button/Button";
import ButtonLink from "../../../components/button/ButtonLink";
import ProductDetailCarousel from "../../../components/carousel/ProductDetailCarousel";
import Footer from "../../../components/footer/Footer";
import Dropdown from "../../../components/inputs/dropdown/InputDropdown";
import InputFile from "../../../components/inputs/file/InputFile";
import Navbar from "../../../components/navbar/Navbar";
import PageTitle from "../../../components/page-title/PageTitle";

const Sales = () => {
  return (
    <>
      <Navbar />
      <div className="py-6 px-4 flex flex-col gap-6 container-100vh-180">
        <div className="flex flex-col-reverse gap-6 lg:flex-row">
          <div className="main-container">
            <BreadCrumb />
            <PageTitle label="Sales" />
            {/* CONTENT 1 */}
            <div className="flex justify-between items-center">
              <Dropdown
                icon={<FilterIcon className="ml-2 w-3 h-3" />}
                label="Filter"
              >
                <ul
                  className="py-1 text-sm text-gray-700 dark:text-gray-200"
                  aria-labelledby="dropdownActionButton"
                >
                  <li className="p-0">
                    <a
                      href="#"
                      className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Complete
                    </a>
                  </li>
                  <li className="p-0">
                    <a
                      href="#"
                      className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Pending
                    </a>
                  </li>
                  <li className="p-0">
                    <a
                      href="#"
                      className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Cancelled
                    </a>
                  </li>
                </ul>
                <div className="py-1">
                  <a
                    href="#"
                    className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    All
                  </a>
                </div>
              </Dropdown>
            </div>
            <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
              <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="py-3 px-6">
                      Image/Photo
                    </th>
                    <th scope="col" className="py-3 px-6">
                      Product
                    </th>
                    <th scope="col" className="py-3 px-6">
                      Date
                    </th>
                    <th scope="col" className="py-3 px-6">
                      Price
                    </th>
                    <th scope="col" className="py-3 px-6">
                      Pay mode
                    </th>
                    <th scope="col" className="py-3 px-6">
                      Detail
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th scope="row" className="py-4 px-6">
                      <img
                        src="./src/assets/img/products/image-2.jpg"
                        alt="Product img"
                        className="w-10 h-10 object-cover rounded-lg"
                      />
                    </th>
                    <td className="py-4 px-6 font-medium text-gray-900 dark:text-white">
                      Apple MacBook Pro 17"
                    </td>
                    <td className="py-4 px-6">12 Jul 2021</td>
                    <td className="py-4 px-6">$2999</td>
                    <td className="py-4 px-6">VISA Crédito</td>
                    <td className="py-4 px-6">
                      <span
                        className="cursor-pointer font-medium text-indigo-600 dark:text-indigo-400 hover:underline"
                        aria-hidden
                      >
                        Show
                      </span>
                    </td>
                  </tr>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th scope="row" className="py-4 px-6">
                      <img
                        src="./src/assets/img/products/image-1.jpg"
                        alt="Product img"
                        className="w-10 h-10 object-cover rounded-lg"
                      />
                    </th>
                    <td className="py-4 px-6 font-medium text-gray-900 dark:text-white">
                      Microsoft Surface Pro
                    </td>
                    <td className="py-4 px-6">12 Jul 2021</td>
                    <td className="py-4 px-6">$1999</td>
                    <td className="py-4 px-6">Contado</td>
                    <td className="py-4 px-6">
                      <a
                        href="#"
                        className="font-medium text-indigo-600 dark:text-indigo-400 hover:underline"
                      >
                        Show
                      </a>
                    </td>
                  </tr>
                  <tr className="bg-white dark:bg-gray-800">
                    <th scope="row" className="py-4 px-6">
                      <img
                        src="./src/assets/img/products/image-3.jpg"
                        alt="Product img"
                        className="w-10 h-10 object-cover rounded-lg"
                      />
                    </th>
                    <td className="py-4 px-6 font-medium text-gray-900 dark:text-white">
                      Magic Mouse 2
                    </td>
                    <td className="py-4 px-6">12 Jul 2021</td>
                    <td className="py-4 px-6">$99</td>
                    <td className="py-4 px-6">VISA Débito</td>
                    <td className="py-4 px-6">
                      <a
                        href="#"
                        className="font-medium text-indigo-600 dark:text-indigo-400 hover:underline"
                      >
                        Show
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            {/* CONTENT 2 */}
            <div className="w-full rounded-lg my-10 py-10 px-2 flex flex-col items-center bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <h2 className="text-xl text-center text-white font-bold mb-8">
                No sales made yet
              </h2>
              <ButtonLink
                label="Publicar productos"
                title="Publicar productos"
                url="/new-product-form"
                color="green"
                customClass="px-10 py-4"
                icon={<ArrowRightIcon />}
              />
            </div>

            {/* CONTENT 3 */}
            <div className="w-full rounded-lg my-10 p-3 md:p-5 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <div className="mb-6">
                <h2 className="mb-3 text-xl font-bold text-gray-700 dark:text-white">
                  Detalle de venta
                </h2>
              </div>
              <div className="mb-6">
                <ProductDetailCarousel
                  width="w-full sm:w-[240px] md:w-80"
                  height="h-80 sm:h-[240px] md:h-80"
                  indicatorsSection
                />
                <Link to="/product" title="Product">
                  <p className="my-3 text-lg font-bold text-gray-700 dark:text-white">
                    iPhone 13 Pro
                  </p>
                </Link>
              </div>

              <div className="mb-6">
                <div className="flex items-center gap-2">
                  <h3 className="mb-1 text-lg font-normal tracking-tight text-gray-900 dark:text-gray-400">
                    Fecha y hora
                  </h3>
                </div>
                <p className="mb-3 font-bold text-gray-700 dark:text-white">
                  21 Julio - 12:43 hs
                </p>
              </div>
              <div className="mb-6">
                <div className="flex items-center gap-2">
                  <h3 className="mb-1 text-lg font-normal tracking-tight text-gray-900 dark:text-gray-400">
                    Precio
                  </h3>
                </div>
                <p className="mb-3 font-bold text-gray-700 dark:text-white">
                  $129.00
                </p>
              </div>
              <div className="mb-6">
                <div className="flex items-center gap-2">
                  <h3 className="mb-1 text-lg font-normal tracking-tight text-gray-900 dark:text-gray-400">
                    Modo de pago
                  </h3>
                </div>
                <p className="mb-3 font-bold text-gray-700 dark:text-white">
                  VISA débito
                </p>
              </div>
              <div className="mb-6">
                <div className="flex items-center gap-2">
                  <h3 className="mb-1 text-lg font-normal tracking-tight text-gray-900 dark:text-gray-400">
                    Cliente
                  </h3>
                </div>
                <p className="mb-3 font-bold text-gray-700 dark:text-white">
                  @elon_musk
                </p>
              </div>
              <div className="mb-6">
                <div className="flex items-center gap-2">
                  <h3 className="mb-1 text-lg font-normal tracking-tight text-gray-900 dark:text-gray-400">
                    Ubicación
                  </h3>
                </div>
                <p className="mb-3 font-bold text-gray-700 dark:text-white">
                  San Justo, Buenos Aires
                </p>
              </div>
              <div className="mb-6">
                <div className="flex items-center gap-2">
                  <h3 className="mb-1 text-lg font-normal tracking-tight text-gray-900 dark:text-gray-400">
                    Estado
                  </h3>
                </div>
                <p className="mb-3 font-bold text-green-600 dark:text-green-500">
                  Completada
                </p>
              </div>
              <form action="#" className="mb-6">
                <div className="flex items-center gap-2">
                  <h3 className="mb-1 text-lg font-normal tracking-tight text-gray-900 dark:text-gray-400">
                    Factura (imagen / PDF)
                  </h3>
                </div>
                <div className="mb-3">
                  <InputFile
                    placeholder="Subir factura"
                    accept="image/*,.pdf"
                  />
                </div>
                <div className="mb-3">
                  <Button
                    color="green"
                    type="submit"
                    icon={<UploadIcon />}
                    label="Subir"
                  />
                </div>
              </form>
              <div className="w-full flex justify-end mb-6">
                <ButtonLink
                  label="Contact customer"
                  title="Contact customer"
                  url="#"
                  color="purple"
                  customClass="px-6 py-3"
                  icon={<AnnotationIcon />}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Sales;
