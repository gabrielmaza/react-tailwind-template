import { ArrowNarrowRightIcon } from "@heroicons/react/solid";
import React from "react";
import ButtonLink from "../button/ButtonLink";
import "./cards.css";

interface ProductSmCardProps {
  id: any;
  name: string;
  price: string;
  productUrl: string;
  imgUrl: string;
  imgTitle: string;
}

const ProductSmCard = ({
  id,
  name,
  price,
  productUrl,
  imgUrl,
  imgTitle,
}: ProductSmCardProps) => {
  return (
    <>
      <div className="product-sm-card_item">
        <a href="#">
          <img className="rounded-t-lg mb-5" src={imgUrl} alt={imgTitle} />
        </a>
        <div className="px-5 pb-5">
          <a className="flex items-center mb-5" href="#">
            <h3 className="text-md font-semibold tracking-tight truncate text-gray-900 dark:text-white">
              {name}
            </h3>
          </a>
          <div className="flex justify-between items-center">
            <span className="text-lg font-bold text-gray-900 dark:text-white">
              $ {price}
            </span>
            <ButtonLink
              label="Show"
              url={productUrl}
              icon={<ArrowNarrowRightIcon />}
              color="purple"
              title="Show"
              customClass="bottom-0"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductSmCard;
