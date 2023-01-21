import React, { useEffect, useState } from "react";
import BreadCrumb from "../../../components/breadcrumb/BreadCrumb";
import Footer from "../../../components/footer/Footer";
import Navbar from "../../../components/navbar/Navbar";
import PageTitle from "../../../components/page-title/PageTitle";
import "../../../components/tabNav/tabs.css";
import TabMenu from "../../../components/tabNav/TabMenu";
import TextOnlyCard from "../../../components/cards/TextOnlyCard";
import { TabNav } from "../../../components/tabNav/TabNav";
import { TabContent } from "../../../components/tabNav/TabContent";
import { TabNavItem } from "../../../components/tabNav/TabNavItem";
import { TabNavContentItem } from "../../../components/tabNav/TabNavContentItem";
import MyModal from "../../../components/modal/modal";
import ModalChildrenContent from "../../../components/modal/ModalChildrenContent";
import { useTranslation } from "react-i18next";

const CommentsContent = [
  {
    id: 1,
    userName: "Jhon Doe",
    date: "12/07/2023",
    hour: "19:30",
    comment:
      "Aliquam lobortis mattis est sed varius. Donec sit amet nibh nibh. Ut viverra lacus ut ipsum eleifend, et gravida est blandit. Aliquam pulvinar, metus eget aliquam elementum.",
    productName: "The magical product",
    imgUrl: "./src/assets/img/products/image-2.jpg",
  },
  {
    id: 2,
    userName: "Jhon Doe",
    date: "12/07/2023",
    hour: "19:30",
    comment:
      "Aliquam lobortis mattis est sed varius. Donec sit amet nibh nibh. Ut viverra lacus ut ipsum eleifend, et gravida est blandit. Aliquam pulvinar, metus eget aliquam elementum.",
    productName: "The magical product",
    imgUrl: "./src/assets/img/products/image-2.jpg",
  },
  {
    id: 3,
    userName: "Jhon Doe",
    date: "12/07/2023",
    hour: "19:30",
    comment:
      "Aliquam lobortis mattis est sed varius. Donec sit amet nibh nibh. Ut viverra lacus ut ipsum eleifend, et gravida est blandit. Aliquam pulvinar, metus eget aliquam elementum.",
    productName: "The magical product",
    imgUrl: "./src/assets/img/products/image-2.jpg",
  },
  {
    id: 4,
    userName: "Jhon Doe",
    date: "12/07/2023",
    hour: "19:30",
    comment:
      "Aliquam lobortis mattis est sed varius. Donec sit amet nibh nibh. Ut viverra lacus ut ipsum eleifend, et gravida est blandit. Aliquam pulvinar, metus eget aliquam elementum.",
    productName: "The magical product",
    imgUrl: "./src/assets/img/products/image-2.jpg",
  },
  {
    id: 5,
    userName: "Jhon Doe",
    date: "12/07/2023",
    hour: "19:30",
    comment:
      "Aliquam lobortis mattis est sed varius. Donec sit amet nibh nibh. Ut viverra lacus ut ipsum eleifend, et gravida est blandit. Aliquam pulvinar, metus eget aliquam elementum.",
    productName: "The magical product",
    imgUrl: "./src/assets/img/products/image-2.jpg",
  },
  {
    id: 6,
    userName: "Jhon Doe",
    date: "12/07/2023",
    hour: "19:30",
    comment:
      "Aliquam lobortis mattis est sed varius. Donec sit amet nibh nibh. Ut viverra lacus ut ipsum eleifend, et gravida est blandit. Aliquam pulvinar, metus eget aliquam elementum.",
    productName: "The magical product",
    imgUrl: "./src/assets/img/products/image-2.jpg",
  },
  {
    id: 7,
    userName: "Jhon Doe",
    date: "12/07/2023",
    hour: "19:30",
    comment:
      "Aliquam lobortis mattis est sed varius. Donec sit amet nibh nibh. Ut viverra lacus ut ipsum eleifend, et gravida est blandit. Aliquam pulvinar, metus eget aliquam elementum.",
    productName: "The magical product",
    imgUrl: "./src/assets/img/products/image-2.jpg",
  },
];

const Comments = () => {
  // TabNav
  const [toggleState, setToggleState] = useState(1);

  const handleTab = (index) => {
    setToggleState(index);
  };

  // Modal actions
  const [showModal, setShowModal] = useState(false);
  const handleChange = () => {
    setShowModal(!showModal);
  };
  const handleClose = () => {
    setShowModal(false);
  };

  // TabNav counter
  const [commentsCounter, setCommentsCounter] = useState("");
  useEffect(() => {
    let counter = CommentsContent.length;
    const handleCommentsCounter = () => {
      setCommentsCounter(counter.toString());
    };

    handleCommentsCounter();

    return () => {
      counter;
    };
  }, []);

  //Translation
  const { t, i18n } = useTranslation("global");

  return (
    <>
      <Navbar navbarMenu navbarUserAvatar navbarLangSwitcher />
      <div className="py-6 px-4 flex flex-col gap-6 container-100vh-180">
        <div className="flex flex-col-reverse gap-6 lg:flex-row">
          <div className="main-container">
            <BreadCrumb />
            <PageTitle label="Comments" />
            <TabMenu>
              <TabNav>
                <TabNavItem
                  toggleState={toggleState}
                  index={1}
                  handleTab={handleTab}
                  label={t("page.comments.tab-nav-title-1")}
                  counter={commentsCounter}
                />
                <TabNavItem
                  toggleState={toggleState}
                  index={2}
                  handleTab={handleTab}
                  label={t("page.comments.tab-nav-title-2")}
                  counter={commentsCounter}
                />
              </TabNav>
              <TabContent>
                <TabNavContentItem toggleState={toggleState} index={1}>
                  {CommentsContent.map(
                    ({
                      id,
                      userName,
                      date,
                      hour,
                      comment,
                      productName,
                      imgUrl,
                    }) => (
                      <div key={id} onClick={handleChange} aria-hidden>
                        <TextOnlyCard
                          img={imgUrl}
                          data1={date}
                          data2={hour}
                          span1={userName}
                          span2={productName}
                          comment={comment}
                        />
                      </div>
                    )
                  )}
                </TabNavContentItem>
                <TabNavContentItem toggleState={toggleState} index={2}>
                  {CommentsContent.map(
                    ({
                      id,
                      userName,
                      date,
                      hour,
                      comment,
                      productName,
                      imgUrl,
                    }) => (
                      <div key={id} onClick={handleChange} aria-hidden>
                        <TextOnlyCard
                          img={imgUrl}
                          data1={date}
                          data2={hour}
                          span1={userName}
                          span2={productName}
                          comment={comment}
                        />
                      </div>
                    )
                  )}
                </TabNavContentItem>
              </TabContent>
            </TabMenu>
          </div>
        </div>
      </div>
      <Footer />
      {/* COMMENTS MODAL */}
      {CommentsContent.map(({ id, date, hour, productName, comment }) => (
        <div key={id}>
          <MyModal show={showModal} closeFunction={handleClose}>
            <ModalChildrenContent
              data1={date}
              data2={hour}
              span1={productName}
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

export default Comments;
