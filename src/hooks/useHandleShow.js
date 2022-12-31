import React, { useState } from "react";

export const useHandleShow = () => {
  const [show, setShow] = useState(false);

  const handleChange = () => {
    setShow(!show);
  };

  const handleClose = () => {
    setShow(false);
  };

  return {
    show,
    handleChange,
    handleClose,
  };
};
