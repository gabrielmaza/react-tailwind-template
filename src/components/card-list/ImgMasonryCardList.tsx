import React, { ReactNode } from "react";
import "./card-list.css";
interface ImgMasonryCardListProps {
  children?: ReactNode;
}

const ImgMasonryCardList = ({ children }: ImgMasonryCardListProps) => {
  return <div className="full-img-card-list">{children}</div>;
};

export default ImgMasonryCardList;
