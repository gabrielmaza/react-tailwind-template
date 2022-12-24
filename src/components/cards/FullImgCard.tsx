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

interface FullImgCardProps {
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
  date?: boolean;
}

const FullImgCard = ({
  img,
  title,
  subTitle,
  price = "?",
  url,
  favoriteBtn = false,
  deleteBtn = false,
  updateBtn = false,
  pauseBtn = false,
  moreBtn = false,
  commentsBtn = false,
  salesBtn = false,
  date = false,
}: FullImgCardProps) => {
  return (
    <div className="full-img-card">
      <Link to="/product" title={title} className="relative block w-full">
        <img
          className="rounded-lg object-cover h-auto w-full"
          src={img}
          alt={`${title}img`}
        />
      </Link>
      <div className="relative p-2 w-full h-full flex flex-col justify-between">
        <div className="w-full flex justify-beteen gap-1">
          {date ? (
            <div className="w-full m-2 flex gap-1">
              <span className="text-sm">02 Jul</span>
            </div>
          ) : (
            ""
          )}
          <div className="w-full flex justify-end gap-1">
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
          </div>
        </div>
        <div>
          <Link to={url} title={title}>
            <h2 className="truncate mb-2 text-sm md:text-lg font-semibold tracking-tight text-gray-900 dark:text-white">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Provident nulla tenetur iste obcaecati.
            </h2>
          </Link>
          <div className="w-full flex justify-end gap-1 flex-wrap">
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
      </div>
    </div>
  );
};

export default FullImgCard;
