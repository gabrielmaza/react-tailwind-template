import React from "react";

const SubscribeBanner = () => {
  return (
    <a
      href="#"
      className="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-full hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
    >
      <img
        className="object-cover w-full h-96 rounded-t-lg md:h-[200px] md:w-[300px] md:rounded-none md:rounded-l-lg"
        src="./src/assets/img/image-1.jpg"
        alt=""
      />
      <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-lg md:text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
          Subscribe to our newsletter
        </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Be the first to find out about the best products and offers published
          on the internet.
        </p>
      </div>
    </a>
  );
};

export default SubscribeBanner;
