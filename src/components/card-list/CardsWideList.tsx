import React, { ReactNode } from "react";
import "./card-list.css";

interface CardsWideListProps {
  title: string;
  children: ReactNode;
}

const CardsWideList = ({ title, children }: CardsWideListProps) => {
  const horizontalScroll = (event) => {
    const delta = Math.max(
      -2,
      Math.min(2, event.nativeEvent.wheelDelta || -event.nativeEvent.detail)
    );
    event.currentTarget.scrollLeft -= delta * 10;
    event.preventDefault;
  };

  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
        {title}
      </h3>
      <div className="p-0 w-full h-auto">
        <div className="product-sm-card-list" onWheel={horizontalScroll}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default CardsWideList;
