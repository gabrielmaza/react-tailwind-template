import { BellIcon } from "@heroicons/react/solid";
import React, { useState } from "react";
import BreadCrumb from "../../../components/breadcrumb/BreadCrumb";
import NotificationCard from "../../../components/cards/NotificationCard";
import TextOnlyCard from "../../../components/cards/TextOnlyCard";
import Footer from "../../../components/footer/Footer";
import MyModal from "../../../components/modal/modal";
import ModalChildrenContent from "../../../components/modal/ModalChildrenContent";
import Navbar from "../../../components/navbar/Navbar";
import PageTitle from "../../../components/page-title/PageTitle";

const MyNotifications = [
  {
    id: 1,
    img: "./src/assets/img/products/image-2.jpg",
    title: "Notification title",
    date: "12/07/2023",
    hour: "19:30",
    comment:
      "Aliquam lobortis mattis est sed varius. Ipsum eleifend, et gravida est blandit. Aliquam pulvinar, metus eget aliquam elementum.",
  },
  {
    id: 2,
    img: "./src/assets/img/products/image-2.jpg",
    title: "Notification title",
    date: "12/07/2023",
    hour: "19:30",
    comment:
      "Donec sit amet nibh nibh. Ut viverra lacus ut ipsum eleifend, et gravida est blandit. Aliquam pulvinar, metus eget aliquam elementum.",
  },
  {
    id: 3,
    img: "./src/assets/img/products/image-2.jpg",
    title: "Notification title",
    date: "12/07/2023",
    hour: "19:30",
    comment:
      "Aliquam lobortis mattis est sed varius. Donec sit amet nibh nibh. Ut viverra lacus ut ipsum eleifend, et gravida est blandit. Aliquam pulvinar, metus eget aliquam elementum.",
  },
  {
    id: 4,
    img: "./src/assets/img/products/image-2.jpg",
    title: "Notification title",
    date: "12/07/2023",
    hour: "19:30",
    comment:
      "Aliquam lobortis mattis est sed varius. Donec sit amet nibh nibh. Ut viverra lacus ut ipsum eleifend, et gravida est blandit. Aliquam pulvinar, metus eget aliquam elementum.",
  },
  {
    id: 5,
    img: "./src/assets/img/products/image-2.jpg",
    title: "Notification title",
    date: "12/07/2023",
    hour: "19:30",
    comment:
      "Aliquam lobortis mattis est sed varius. Donec sit amet nibh nibh. Ut viverra lacus ut ipsum eleifend, et gravida est blandit. Aliquam pulvinar, metus eget aliquam elementum.",
  },
  {
    id: 6,
    img: "./src/assets/img/products/image-2.jpg",
    title: "Notification title",
    date: "12/07/2023",
    hour: "19:30",
    comment:
      "Aliquam lobortis mattis est sed varius. Donec sit amet nibh nibh. Ut viverra lacus ut ipsum eleifend, et gravida est blandit. Aliquam pulvinar, metus eget aliquam elementum.",
  },
  {
    id: 7,
    img: "./src/assets/img/products/image-2.jpg",
    title: "Notification title",
    date: "12/07/2023",
    hour: "19:30",
    comment:
      "Aliquam lobortis mattis est sed varius. Donec sit amet nibh nibh. Ut viverra lacus ut ipsum eleifend, et gravida est blandit. Aliquam pulvinar, metus eget aliquam elementum.",
  },
];

const Notifications = () => {
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
      <Navbar navbarMenu navbarUserAvatar navbarLangSwitcher />
      <div className="py-6 px-4 flex flex-col gap-6 container-100vh-180">
        <div className="flex flex-col-reverse gap-6 lg:flex-row">
          <div className="main-container">
            <BreadCrumb />
            <PageTitle label="Notifications" />
            {MyNotifications.map(({ id, date, hour, title, comment }) => (
              <div key={id} onClick={handleChange} aria-hidden>
                <TextOnlyCard
                  icon={<BellIcon />}
                  data1={date}
                  data2={hour}
                  span1={title}
                  comment={comment}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
      {/* NOTIFICATION MODAL */}
      {MyNotifications.map(({ id, date, hour, title, comment }) => (
        <div key={id}>
          <MyModal show={showModal} closeFunction={handleClose}>
            <ModalChildrenContent
              data1={date}
              data2={hour}
              span1={title}
              closeFunction={handleClose}
            >
              <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                {comment}
              </p>
            </ModalChildrenContent>
          </MyModal>
        </div>
      ))}
    </>
  );
};

export default Notifications;
