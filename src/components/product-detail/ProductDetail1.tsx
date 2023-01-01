import React from "react";
import Button from "../button/Button";
import InputText from "../inputs/text/InputText";
import { ChevronRightIcon, HeartIcon } from "@heroicons/react/solid";
import ProductDetailCarousel from "../carousel/ProductDetailCarousel";

const ProductDetail1 = () => {
  return (
    <div className="w-full lg:w-full max-w-full flex flex-col gap-6">
      <div className="flex flex-col sm:flex-row gap-4">
        <ProductDetailCarousel
          width="w-full sm:w-[240px] md:w-80"
          height="h-80 sm:h-[240px] md:h-80"
          indicatorsSection
        />
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2 justify-between">
            <p className="font-bold text-gray-700 dark:text-gray-400">
              21 de Jul | 1234 vendidos
            </p>
            <Button
              type="button"
              color="transparent"
              icon={<HeartIcon className="fill-gray-900 dark:fill-gray-500" />}
            />
          </div>
          {/* Option user admin */}
          <Button
            type="submit"
            color="transparent-bordered"
            label="Edit"
            customClass="p-3 w-full mb-2"
          />
          <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">
            Product fancy name
          </h1>
          <span className="font-bold  text-2xl text-gray-900 dark:text-white">
            $129.99
          </span>
          {/* Option customer */}
          <Button
            type="submit"
            color="green"
            label="Buy"
            customClass="p-3 w-full mb-2"
          />
          <div className="flex flex-col gap-2">
            <ul className="product-page_charact">
              <li>
                <ChevronRightIcon />
                <p className="font-semibold">Format: EPS</p>
              </li>
              <li>
                <ChevronRightIcon />
                <p className="font-semibold">3077 × 2000 pixels</p>
              </li>
              <li>
                <ChevronRightIcon />
                <p className="font-semibold">PPP 300</p>
              </li>
              <li>
                <ChevronRightIcon />
                <p className="font-semibold">820 bytes</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Descripción
        </h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum possimus
          itaque cumque, voluptatibus rem nesciunt, ut debitis corporis tenetur
          nisi maiores? Quae consectetur id et sit unde deleniti ipsa
          doloremque.
        </p>
      </div>
    </div>
  );
};

export default ProductDetail1;
