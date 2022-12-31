import React from "react";
import {
  BadgeCheckIcon,
  LocationMarkerIcon,
  PencilAltIcon,
  ShoppingCartIcon,
  UserCircleIcon,
  XIcon,
} from "@heroicons/react/solid";
import Button from "../button/Button";
import Dropdown from "../inputs/dropdown/InputDropdown";
import InputText from "../inputs/text/InputText";
import ButtonLink from "../button/ButtonLink";
import CommentsSection from "../comments-section/CommentsSection";

const ProductDetailSidebar = () => {
  return (
    <>
      <div className="w-full pb-4">
        <div className="flex justify-end">
          <Button
            type="button"
            color="transparent"
            icon={<XIcon />}
            customClass="mt-[-8px] mr-[-8px]"
          />
        </div>
        <div className="flex items-center gap-2 mb-4">
          <ShoppingCartIcon className="w-6 h-6" />
          <h2 className="text-md md:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Purchase
          </h2>
        </div>
        <form className="w-full rounded-lg text-gray-700">
          <div>
            <div className="mb-4">
              <div className="flex items-center gap-2">
                <h3 className="mb-1 text-lg font-normal tracking-tight text-gray-900 dark:text-gray-400">
                  Payment method
                </h3>
              </div>
              <div className="mb-3">
                <Dropdown label="Payment method">
                  <ul
                    className="py-1 text-sm text-gray-700 dark:text-gray-200"
                    aria-labelledby="dropdownActionButton"
                  >
                    <li className="p-0">
                      <a
                        href="#"
                        className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Debit
                      </a>
                    </li>
                    <li className="p-0">
                      <a
                        href="#"
                        className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Credit
                      </a>
                    </li>
                  </ul>
                </Dropdown>
              </div>
            </div>
            <div className="mb-4">
              <div className="mb-3">
                <InputText type="number" placeholder="Card number" required />
              </div>
            </div>
            <div className="mb-4">
              <div className="mb-3">
                <InputText placeholder="Card name" required />
              </div>
            </div>
            <div className="mb-4">
              <div className="flex gap-3">
                <div>
                  <InputText placeholder=".../..." required />
                </div>
                <div>
                  <InputText placeholder="CSV" required />
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="mb-4">
              <div className="flex items-center gap-2">
                <h3 className="mb-1 text-lg font-normal tracking-tight text-gray-900 dark:text-gray-400">
                  Shipping Address
                </h3>
              </div>
              <div className="mb-3">
                <Dropdown label="Country">
                  <ul
                    className="py-1 text-sm text-gray-700 dark:text-gray-200"
                    aria-labelledby="dropdownActionButton"
                  >
                    <li className="p-0">
                      <a
                        href="#"
                        className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Argentina
                      </a>
                    </li>
                    <li className="p-0">
                      <a
                        href="#"
                        className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Argelia
                      </a>
                    </li>
                    <li className="p-0">
                      <a
                        href="#"
                        className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Lorem ipsum
                      </a>
                    </li>
                    <li className="p-0">
                      <a
                        href="#"
                        className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Lorem ipsum
                      </a>
                    </li>
                    <li className="p-0">
                      <a
                        href="#"
                        className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Lorem ipsum
                      </a>
                    </li>
                    <li className="p-0">
                      <a
                        href="#"
                        className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Lorem ipsum
                      </a>
                    </li>
                    <li className="p-0">
                      <a
                        href="#"
                        className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Lorem ipsum
                      </a>
                    </li>
                    <li className="p-0">
                      <a
                        href="#"
                        className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Lorem ipsum
                      </a>
                    </li>
                    <li className="p-0">
                      <a
                        href="#"
                        className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Lorem ipsum
                      </a>
                    </li>
                  </ul>
                </Dropdown>
              </div>
              <div className="mb-3">
                <InputText type="text" placeholder="Address line 1" required />
              </div>
              <div className="mb-3">
                <InputText type="text" placeholder="Address line 2" required />
              </div>
              <div className="mb-3">
                <Dropdown label="City">
                  <ul
                    className="py-1 text-sm text-gray-700 dark:text-gray-200"
                    aria-labelledby="dropdownActionButton"
                  >
                    <li className="p-0">
                      <a
                        href="#"
                        className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Tucumán
                      </a>
                    </li>
                    <li className="p-0">
                      <a
                        href="#"
                        className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Córdoba
                      </a>
                    </li>
                  </ul>
                </Dropdown>
              </div>
              <div className="mb-3">
                <Dropdown label="State / Province / Region">
                  <ul
                    className="py-1 text-sm text-gray-700 dark:text-gray-200"
                    aria-labelledby="dropdownActionButton"
                  >
                    <li className="p-0">
                      <a
                        href="#"
                        className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        State 1
                      </a>
                    </li>
                    <li className="p-0">
                      <a
                        href="#"
                        className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        State 2
                      </a>
                    </li>
                  </ul>
                </Dropdown>
              </div>
              <div className="mb-3">
                <InputText placeholder="Zip / Postal Code" required />
              </div>
            </div>
          </div>

          <div className="w-full flex justify-end">
            <ButtonLink
              label="Siguiente"
              title="Siguiente"
              url="#"
              color="green"
              customClass="w-full px-6 py-3"
            />
          </div>
        </form>
      </div>

      <div className="w-full pb-6">
        <div className="flex flex-col items-center gap-5">
          <BadgeCheckIcon className="w-10 h-10 fill-gray-900 dark:fill-green-400" />
          <span className="text-md md:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Purchase made!
          </span>
          <div className="flex gap-4">
            <ButtonLink
              label="Go to purchases"
              title="Go to purchases"
              url="/purchases"
              color="transparent-bordered"
            />
            <ButtonLink
              label="Continue buying"
              title="Continue buying"
              url="/"
              color="pink"
            />
          </div>
        </div>
      </div>

      <div className="w-full py-4">
        <div className="mb-2">
          <div className="flex items-center gap-2">
            <UserCircleIcon className="w-4 h-4 fill-gray-900 dark:fill-gray-400" />
            <h3 className="mb-1 text-lg font-normal tracking-tight text-gray-900 dark:text-gray-400">
              Seller
            </h3>
          </div>
          <p className="mb-3 font-bold text-gray-700 dark:text-gray-400">
            @DIAMONDSYSTEMS
          </p>
          <p className="mb-3 font-bold text-gray-700 dark:text-gray-400">
            6 years selling in our store
          </p>
          <p className="mb-3 font-bold text-gray-700 dark:text-gray-400">
            2879 sales
          </p>
        </div>
        <div className="mb-2">
          <div className="flex items-center gap-2">
            <LocationMarkerIcon className="w-4 h-4 fill-gray-900 dark:fill-gray-400" />
            <h3 className="mb-1 text-lg font-normal tracking-tight text-gray-900 dark:text-gray-400">
              Location
            </h3>
          </div>
          <p className="mb-3 font-bold text-gray-700 dark:text-gray-400">
            San Francisco, California
          </p>
        </div>
        <div className="mb-2">
          <div className="flex items-center gap-2 mb-3">
            <BadgeCheckIcon className="w-4 h-4 fill-gray-900 dark:fill-green-400" />
            <p className="mb-1 text-lg font-bold tracking-tight text-gray-900 dark:text-gray-400">
              Validated identity
            </p>
          </div>
          <div className="flex items-center gap-2 mb-3">
            <BadgeCheckIcon className="w-4 h-4 fill-gray-900 dark:fill-green-400" />
            <p className="mb-1 text-lg font-bold tracking-tight text-gray-900 dark:text-gray-400">
              Validated credit card
            </p>
          </div>
        </div>
      </div>

      <CommentsSection />
    </>
  );
};

export default ProductDetailSidebar;
