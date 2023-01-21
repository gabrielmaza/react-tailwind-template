import React from "react";

interface TextOnlyCardProps {
  img?: any;
  icon?: any;
  data1?: any;
  data2?: any;
  span1?: string;
  span2?: string;
  comment?: string;
}

const TextOnlyCard = ({
  img,
  icon,
  data1,
  data2,
  span1,
  span2,
  comment,
}: TextOnlyCardProps) => {
  return (
    <div className="p-4 mb-3 bg-gray-50 rounded-lg dark:bg-gray-800 cursor-pointer">
      <div className="flex flex-wrap items-center gap-3 mb-3">
        {icon && <div className="w-5 h-5">{icon}</div>}
        {img && (
          <img
            src={img}
            alt="Product img"
            className="w-7 h-7 object-cover rounded-lg"
          />
        )}
        <span className="text-sm font-semibold">
          {data1} | {data2}
        </span>
        {span1 && (
          <>
            <span className="text-sm hidden sm:block mx-1"> </span>
            <span className="text-sm">{span1}</span>
          </>
        )}
        {span2 && (
          <>
            <span className="text-sm hidden sm:block mx-1"> </span>
            <span className="text-sm">{span2}</span>
          </>
        )}
      </div>
      <p className="text-lg text-gray-500 dark:text-gray-400">{comment}</p>
    </div>
  );
};

export default TextOnlyCard;
