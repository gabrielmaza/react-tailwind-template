import { ArrowNarrowRightIcon } from "@heroicons/react/solid";
import React from "react";
import { Link } from "react-router-dom";
import ButtonLink from "../button/ButtonLink";
import "./cards.css";

interface ImgSmallCardProps {
  id?: any;
  title: string;
  price?: any;
  productUrl?: string;
  imgUrl?: string;
  imgTitle?: string;
}

const ImgSmallCard = ({
  id,
  title,
  price,
  productUrl,
  imgUrl,
  imgTitle,
}: ImgSmallCardProps) => {
  return (
    <>
      <div className="sm-card_item" key={id}>
        <Link to="#" className="sm-card_item-link">
          <img className="rounded-t-lg mb-5" src={imgUrl} alt={imgTitle} />
        </Link>
        <div className="px-5 pb-5">
          <a className="flex items-center mb-5" href="#">
            <h3 className="text-md font-semibold tracking-tight truncate text-gray-900 dark:text-white">
              {title}
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

export default ImgSmallCard;
