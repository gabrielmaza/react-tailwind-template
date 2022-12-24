import React, { useEffect, useState } from "react";
import MyModal from "../modal/modal";
import ModalCommentContent from "../modal/ModalCommentContent";

interface CommentCardProps {
  date: any;
  hour: any;
  userName: string;
  productName: string;
  comment: string;
}

const CommentCard = ({
  date,
  hour,
  userName,
  productName,
  comment,
}: CommentCardProps) => {
  // Modal actions
  const [showModal, setShowModal] = useState(false);
  const handleChange = () => {
    setShowModal(!showModal);
  };
  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <>
      <div
        className="p-4 mb-3 bg-gray-50 rounded-lg dark:bg-gray-800 cursor-pointer"
        onClick={handleChange}
        aria-hidden
      >
        <div className="flex flex-wrap items-center gap-3 mb-3">
          <img
            src="./src/assets/img/products/image-2.jpg"
            alt="Product img"
            className="w-7 h-7 object-cover rounded-lg"
          />
          <span className="text-sm font-semibold">
            {date} - {hour}
          </span>
          <span className="text-sm hidden sm:block mx-1">•</span>
          <span className="text-sm">{userName}</span>
          <span className="text-sm hidden sm:block mx-1">•</span>
          <span className="text-sm">{productName}</span>
        </div>
        <p className="text-lg text-gray-500 dark:text-gray-400">{comment}</p>
      </div>
      {/* COMMENT CARD MODAL */}
      <MyModal show={showModal} closeFunction={handleClose}>
        <ModalCommentContent closeFunction={handleClose} />
      </MyModal>
    </>
  );
};

export default CommentCard;
