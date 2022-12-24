import React, { useEffect, useState } from "react";

const LoadingSpinner = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getItems = async () => {
      await fetch("/");
      setIsLoading(false);
    };
    getItems();
  }, []);

  return <div>LoadingSpinner</div>;
};

export default LoadingSpinner;
