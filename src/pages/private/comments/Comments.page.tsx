import React from "react";
import BreadCrumb from "../../../components/breadcrumb/BreadCrumb";
import Footer from "../../../components/footer/Footer";
import Navbar from "../../../components/navbar/Navbar";
import PageTitle from "../../../components/page-title/PageTitle";
import TabContentComments from "../../../components/tabs/TabContentComments";
import Tabs from "../../../components/tabs/Tabs";

const MycommentsContent = [
  {
    id: 1,
    userName: "Jhon Doe",
    date: "12/07/2023",
    hour: "19:30",
    comment:
      "Aliquam lobortis mattis est sed varius. Donec sit amet nibh nibh. Ut viverra lacus ut ipsum eleifend, et gravida est blandit. Aliquam pulvinar, metus eget aliquam elementum.",
    productName: "The magical product",
  },
  {
    id: 2,
    userName: "Jhon Doe",
    date: "12/07/2023",
    hour: "19:30",
    comment:
      "Aliquam lobortis mattis est sed varius. Donec sit amet nibh nibh. Ut viverra lacus ut ipsum eleifend, et gravida est blandit. Aliquam pulvinar, metus eget aliquam elementum.",
    productName: "The magical product",
  },
  {
    id: 3,
    userName: "Jhon Doe",
    date: "12/07/2023",
    hour: "19:30",
    comment:
      "Aliquam lobortis mattis est sed varius. Donec sit amet nibh nibh. Ut viverra lacus ut ipsum eleifend, et gravida est blandit. Aliquam pulvinar, metus eget aliquam elementum.",
    productName: "The magical product",
  },
  {
    id: 4,
    userName: "Jhon Doe",
    date: "12/07/2023",
    hour: "19:30",
    comment:
      "Aliquam lobortis mattis est sed varius. Donec sit amet nibh nibh. Ut viverra lacus ut ipsum eleifend, et gravida est blandit. Aliquam pulvinar, metus eget aliquam elementum.",
    productName: "The magical product",
  },
  {
    id: 5,
    userName: "Jhon Doe",
    date: "12/07/2023",
    hour: "19:30",
    comment:
      "Aliquam lobortis mattis est sed varius. Donec sit amet nibh nibh. Ut viverra lacus ut ipsum eleifend, et gravida est blandit. Aliquam pulvinar, metus eget aliquam elementum.",
    productName: "The magical product",
  },
  {
    id: 6,
    userName: "Jhon Doe",
    date: "12/07/2023",
    hour: "19:30",
    comment:
      "Aliquam lobortis mattis est sed varius. Donec sit amet nibh nibh. Ut viverra lacus ut ipsum eleifend, et gravida est blandit. Aliquam pulvinar, metus eget aliquam elementum.",
    productName: "The magical product",
  },
  {
    id: 7,
    userName: "Jhon Doe",
    date: "12/07/2023",
    hour: "19:30",
    comment:
      "Aliquam lobortis mattis est sed varius. Donec sit amet nibh nibh. Ut viverra lacus ut ipsum eleifend, et gravida est blandit. Aliquam pulvinar, metus eget aliquam elementum.",
    productName: "The magical product",
  },
];

const FromUsersCommentsContent = [
  {
    id: 1,
    userName: "Joe Doakes",
    date: "12/07/2023",
    hour: "19:30",
    comment:
      "Ut viverra lacus ut ipsum eleifend, et gravida est blandit. Aliquam pulvinar, metus eget aliquam elementum.",
    productName: "The magical product",
  },
  {
    id: 2,
    userName: "Joe Doakes",
    date: "12/07/2023",
    hour: "19:30",
    comment:
      "Ut viverra lacus ut ipsum eleifend, et gravida est blandit. Aliquam pulvinar, metus eget aliquam elementum.",
    productName: "The magical product",
  },
  {
    id: 3,
    userName: "Joe Doakes",
    date: "12/07/2023",
    hour: "19:30",
    comment:
      "Aliquam lobortis mattis est sed varius. Donec sit amet nibh nibh. Ut viverra lacus ut ipsum eleifend, et gravida est blandit. Aliquam pulvinar, metus eget aliquam elementum.",
    productName: "The magical product",
  },
];

const Comments = () => {
  return (
    <>
      <Navbar />
      <div className="py-6 px-4 flex flex-col gap-6 container-100vh-180">
        <div className="flex flex-col-reverse gap-6 lg:flex-row">
          <div className="main-container">
            <BreadCrumb />
            <PageTitle label="Comments" />
            <Tabs
              tab1Title="My comments"
              tab1Content={<TabContentComments data={MycommentsContent} />}
              tab2Title="From others"
              tab2Content={
                <TabContentComments data={FromUsersCommentsContent} />
              }
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Comments;
