import React from "react";
import ProductSmCardList from "../cards/ProductSmCardList";

const SimilarProductsList = () => {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
        Productos similares
      </h3>
      <div className="p-0 w-full h-auto">
        <ProductSmCardList />
      </div>
    </div>
  );
};

export default SimilarProductsList;
