import React, { ReactNode } from "react";
import "./card-list.css";

interface CardListColumnProps {
  children: ReactNode;
}

const CardListColumn = ({ children }: CardListColumnProps) => {
  return <div className="product-card-list">{children}</div>;
};

export default CardListColumn;
