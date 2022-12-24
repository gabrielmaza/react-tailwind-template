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
            Comprar
          </h2>
        </div>
        <form className="w-full rounded-lg text-gray-700">
          <div>
            <div className="mb-4">
              <div className="flex items-center gap-2">
                <h3 className="mb-1 text-lg font-normal tracking-tight text-gray-900 dark:text-gray-400">
                  Medio de pago
                </h3>
              </div>
              <div className="mb-3">
                <Dropdown label="Elegir medio de pago">
                  <ul
                    className="py-1 text-sm text-gray-700 dark:text-gray-200"
                    aria-labelledby="dropdownActionButton"
                  >
                    <li className="p-0">
                      <a
                        href="#"
                        className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Tarjeta de débito
                      </a>
                    </li>
                    <li className="p-0">
                      <a
                        href="#"
                        className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Tarjeta de crédito
                      </a>
                    </li>
                  </ul>
                </Dropdown>
              </div>
            </div>
            <div className="mb-4">
              <div className="mb-3">
                <InputText
                  type="number"
                  placeholder="Número de tarjeta"
                  required
                />
              </div>
            </div>
            <div className="mb-4">
              <div className="mb-3">
                <InputText
                  placeholder="Nombre como figura en la tarjeta"
                  required
                />
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
                  Dirección de envío
                </h3>
              </div>
              <div className="mb-3">
                <Dropdown label="País">
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
                <Dropdown label="Provincia">
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
                <Dropdown label="Localidad">
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
                <InputText placeholder="Calle" required />
              </div>
              <div className="mb-3">
                <InputText type="number" placeholder="Número" required />
              </div>
              <div className="mb-3">
                <div className="flex gap-3">
                  <div>
                    <InputText placeholder="Calle" required />
                  </div>
                  <div>
                    <InputText type="number" placeholder="Número" required />
                  </div>
                </div>
              </div>
              <div className="mb-3">
                <InputText
                  placeholder="Piso / Departamento (Opcional)"
                  required
                />
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
            Compra realizada
          </span>
          <div className="flex gap-4">
            <ButtonLink
              label="Ver en compras"
              title="Ver en compras"
              url="/sales"
              color="transparent-bordered"
            />
            <ButtonLink
              label="Seguir comprando"
              title="Seguir comprando"
              url="/"
              color="pink"
            />
          </div>
        </div>
      </div>

      <div className="w-full py-4">
        <div className="mb-6">
          <div className="flex items-center gap-2">
            <PencilAltIcon className="w-4 h-4 fill-gray-900 dark:fill-gray-400" />
            <h3 className="mb-1 text-lg font-normal tracking-tight text-gray-900 dark:text-gray-400">
              Publicado en
            </h3>
          </div>
          <p className="mb-3 font-bold text-gray-700 dark:text-gray-400">
            Mercadolibre
          </p>
        </div>
        <div className="mb-6">
          <div className="flex items-center gap-2">
            <UserCircleIcon className="w-4 h-4 fill-gray-900 dark:fill-gray-400" />
            <h3 className="mb-1 text-lg font-normal tracking-tight text-gray-900 dark:text-gray-400">
              Vendedor
            </h3>
          </div>
          <p className="mb-3 font-bold text-gray-700 dark:text-gray-400">
            @DIAMONDSYSTEMS
          </p>
          <p className="mb-3 font-bold text-gray-700 dark:text-gray-400">
            6 años vendiendo en Mercado Libre
          </p>
          <p className="mb-3 font-bold text-gray-700 dark:text-gray-400">
            24028 ventas
          </p>
        </div>
        <div className="mb-6">
          <div className="flex items-center gap-2">
            <LocationMarkerIcon className="w-4 h-4 fill-gray-900 dark:fill-gray-400" />
            <h3 className="mb-1 text-lg font-normal tracking-tight text-gray-900 dark:text-gray-400">
              Ubicación
            </h3>
          </div>
          <p className="mb-3 font-bold text-gray-700 dark:text-gray-400">
            San Justo, Buenos Aires
          </p>
        </div>
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-3">
            <BadgeCheckIcon className="w-4 h-4 fill-gray-900 dark:fill-green-400" />
            <p className="mb-1 text-lg font-bold tracking-tight text-gray-900 dark:text-gray-400">
              Identidad validada
            </p>
          </div>
          <div className="flex items-center gap-2 mb-3">
            <BadgeCheckIcon className="w-4 h-4 fill-gray-900 dark:fill-green-400" />
            <p className="mb-1 text-lg font-bold tracking-tight text-gray-900 dark:text-gray-400">
              Tarjeta validada
            </p>
          </div>
        </div>
      </div>

      <CommentsSection />
    </>
  );
};

export default ProductDetailSidebar;
