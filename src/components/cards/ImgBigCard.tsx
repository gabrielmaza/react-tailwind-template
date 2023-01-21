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

interface ImgBigCardProps {
  img: string;
  title: string;
  subTitle: string;
  price?: any;
  url: string;
  favoriteBtn?: boolean;
  deleteBtn?: boolean;
  updateBtn?: boolean;
  pauseBtn?: boolean;
  moreBtn?: boolean;
  commentsBtn?: boolean;
  salesBtn?: boolean;
  date?: any;
}

const ImgBigCard = ({
  img,
  title,
  subTitle,
  price = "00,00",
  url,
  favoriteBtn = false,
  deleteBtn = false,
  updateBtn = false,
  pauseBtn = false,
  moreBtn = false,
  commentsBtn = false,
  salesBtn = false,
  date = false,
}: ImgBigCardProps) => {
  return (
    <div className="product-card flex flex-col sm:flex-row w-full bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
      <Link to="/product" title={title}>
        <img
          className="rounded-l-lg object-cover h-[120px] md:h-[200px] w-full md:w-[300px] md:min-w-[300px]"
          src={img}
          alt={`${title}img`}
        />
      </Link>
      <div className="product-card_body-wrapp p-3 relative w-full">
        <div className="w-full flex justify-beteen gap-1">
          {date && (
            <div className="w-full m-2 flex gap-1">
              <span className="text-sm">{date}</span>
            </div>
          )}
          <div className="w-full flex justify-end gap-1">
            {favoriteBtn && (
              <Button
                color="transparent"
                type="submit"
                icon={<HeartIcon className="h-5" />}
                customClass="w-fit m-0"
              />
            )}
            {pauseBtn && (
              <Button
                color="transparent"
                type="submit"
                icon={<PauseIcon className="h-5" />}
                customClass="w-fit m-0"
              />
            )}
            {deleteBtn && (
              <Button
                color="transparent"
                type="submit"
                icon={<TrashIcon className="h-5" />}
                customClass="w-fit m-0"
              />
            )}
            {updateBtn && (
              <Button
                color="transparent"
                type="submit"
                icon={<PencilIcon className="h-5" />}
                customClass="w-fit m-0"
              />
            )}
          </div>
        </div>
        <Link to={url} title={title}>
          <h2 className="truncate mb-2 pr-8 text-lg md:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident
            nulla tenetur iste obcaecati quis fugit nesciunt voluptates,
            exercitationem rem dicta natus laborum quod ipsa veritatis? Quis
            veniam ullam culpa nobis.
          </h2>
          <p className="mb-6 font-normal text-gray-700 dark:text-gray-400">
            {subTitle}
          </p>
        </Link>
        <div className="w-full flex justify-between items-end gap-5 flex-wrap">
          <span className="text-3xl font-bold">${price}</span>
          <div className="flex justify-end gap-1 flex-wrap">
            {commentsBtn && (
              <ButtonLink
                label="234"
                url="#"
                icon={<AnnotationIcon />}
                color="transparent"
                title="Comments"
                customClass="bottom-0"
              />
            )}
            {salesBtn && (
              <ButtonLink
                label="837"
                url="#"
                icon={<ChartBarIcon />}
                color="transparent"
                title="Sales"
                customClass="bottom-0"
              />
            )}
            {moreBtn && (
              <ButtonLink
                label="See more"
                url={title}
                icon={<ArrowNarrowRightIcon />}
                color="transparent"
                title="See more"
                customClass="bottom-0"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImgBigCard;
