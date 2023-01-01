import React from "react";
import Button from "../button/Button";
import { ChevronRightIcon, HeartIcon, ShareIcon } from "@heroicons/react/solid";
import ProductDetailCarousel from "../carousel/ProductDetailCarousel";

const ProductDetail2 = () => {
  return (
    <>
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-2 justify-between">
          <p className="font-bold text-gray-700 dark:text-gray-400">
            Jul 21 | 123 downloads
          </p>
          <div className="flex gap-3">
            <Button
              type="button"
              color="transparent"
              icon={<ShareIcon />}
              label="Share"
            />
            <Button
              type="button"
              color="transparent"
              icon={<HeartIcon className="fill-gray-900 dark:fill-gray-500" />}
              label="Like"
            />
          </div>
        </div>
        <ProductDetailCarousel
          width="w-full"
          height="h-[420px]"
          indicatorsSection
        />
        <div className="flex gap-3">
          <div className="w-full md:w-7/12 flex flex-col gap-3">
            <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">
              Product fancy name
            </h1>
            <span className="font-bold text-2xl pb-3 text-gray-900 dark:text-white">
              $129.99
            </span>
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
          <div className="w-full md:w-5/12">
            {/* Option user admin */}
            <Button
              type="submit"
              color="transparent-bordered"
              label="Edit"
              customClass="p-3 w-full max-w-lg mb-2"
            />
            {/* Option customer */}
            <Button
              type="submit"
              color="green"
              label="Buy"
              customClass="p-3 w-full max-w-lg mb-2"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Description
        </h3>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum,
          doloremque optio. Sapiente, omnis! Aperiam dolorum sint qui odit fugit
          ea. Voluptatem laudantium officiis accusantium explicabo neque esse
          dolores molestias voluptatibus.
        </p>
      </div>
    </>
  );
};

export default ProductDetail2;
