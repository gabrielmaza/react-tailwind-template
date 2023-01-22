import {
  AnnotationIcon,
  ArrowNarrowRightIcon,
  ChartBarIcon,
  HeartIcon,
  PauseIcon,
  PencilIcon,
  TrashIcon,
} from "@heroicons/react/solid";
import React from "react";
import { Link } from "react-router-dom";
import Button from "../button/Button";
import ButtonLink from "../button/ButtonLink";
import "./cards.css";

interface ImgMasonryCardProps {
  img: string;
  title: string;
  price?: any;
  offerPrice?: any;
  url: string;
  favoriteBtn?: boolean;
  deleteBtn?: boolean;
  updateBtn?: boolean;
  pauseBtn?: boolean;
  moreBtn?: boolean;
  commentsBtn?: boolean;
  salesBtn?: boolean;
  date?: any;
  currency?: string;
}

const ImgMasonryCard = ({
  img,
  title,
  price = "00.00",
  offerPrice = "00.00",
  url,
  favoriteBtn = false,
  deleteBtn = false,
  updateBtn = false,
  pauseBtn = false,
  moreBtn = false,
  commentsBtn = false,
  salesBtn = false,
  date = false,
  currency = "U$D",
}: ImgMasonryCardProps) => {
  return (
    <div className="masonry-img-card">
      <Link to="/product" title={title} className="masonry-img-card_link">
        <img className="masonry-img-card_img" src={img} alt={`${title}img`} />
        <div className="masonry-img-card_text-group">
          {date && <span className="masonry-img-card_date">{date}</span>}
          <h2 className="masonry-img-card_title">{title}</h2>
        </div>
      </Link>
      <div className="relative px-0 pt-1 pb-3 w-full h-full flex flex-col justify-between">
        <div className="w-full flex gap-1">
          {price && (
            <div className="w-1/2 m-2 flex items-center gap-1">
              <span className="text-lg font-semibold whitespace-nowrap">
                {currency}
              </span>
              {offerPrice != "00.00" && (
                <span className="text-lg font-semibold whitespace-nowrap">
                  {offerPrice}
                </span>
              )}
              <span
                className={`text-lg font-semibold whitespace-nowrap ${
                  offerPrice != "00.00" && "masonry-img-card_old-price"
                }`}
              >
                {price}
              </span>
            </div>
          )}
          <div className="w-1/2 flex justify-end gap-1">
            {pauseBtn ? (
              <Button
                color="transparent"
                type="submit"
                icon={<PauseIcon className="h-5" />}
                customClass="w-fit m-0"
              />
            ) : (
              ""
            )}
            {deleteBtn ? (
              <Button
                color="transparent"
                type="submit"
                icon={<TrashIcon className="h-5" />}
                customClass="w-fit m-0"
              />
            ) : (
              ""
            )}
            {updateBtn ? (
              <Button
                color="transparent"
                type="submit"
                icon={<PencilIcon className="h-5" />}
                customClass="w-fit m-0"
              />
            ) : (
              ""
            )}
            {favoriteBtn ? (
              <ButtonLink
                label="234"
                url="#"
                icon={<HeartIcon />}
                color="transparent"
                title="Favorites"
                customClass="bottom-0"
              />
            ) : (
              ""
            )}
            {commentsBtn ? (
              <ButtonLink
                label="234"
                url="#"
                icon={<AnnotationIcon />}
                color="transparent"
                title="Comments"
                customClass="bottom-0"
              />
            ) : (
              ""
            )}
            {salesBtn ? (
              <ButtonLink
                label="837"
                url="#"
                icon={<ChartBarIcon />}
                color="transparent"
                title="Sales"
                customClass="bottom-0"
              />
            ) : (
              ""
            )}
            {moreBtn ? (
              <ButtonLink
                label="See more"
                url={title}
                icon={<ArrowNarrowRightIcon />}
                color="transparent"
                title="See more"
                customClass="bottom-0"
              />
            ) : (
              ""
            )}
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default ImgMasonryCard;
