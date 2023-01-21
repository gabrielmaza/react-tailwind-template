import { BellIcon } from "@heroicons/react/solid";
import React, { useState } from "react";
import MyModal from "../modal/modal";
import ModalCommentContent from "../modal/ModalCommentContent";
import ModalNotificationContent from "../modal/ModalNotificationContent";

const NotificationCard = () => {
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
        <div className="flex flex-wrap items-center gap-1 mb-3">
          <BellIcon className="w-5 h-5  text-gray-500 dark:text-gray-400" />
          <span className="text-sm font-semibold">21 Jul 2021 - 8:00 p.m.</span>
          <span className="text-sm hidden sm:block mx-1">•</span>
          <span className="text-sm">Text</span>
          <span className="text-sm hidden sm:block mx-1">•</span>
          <span className="text-sm">Text</span>
        </div>
        <p className="text-lg text-gray-500 dark:text-gray-400">
          Lorem ipsum dre
        </p>
      </div>
      {/* COMMENT CARD MODAL */}
      <MyModal show={showModal} closeFunction={handleClose}>
        <ModalNotificationContent closeFunction={handleClose} />
      </MyModal>
    </>
  );
};

export default NotificationCard;
