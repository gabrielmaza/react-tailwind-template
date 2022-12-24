import React from "react";
import BreadCrumb from "../../../components/breadcrumb/BreadCrumb";
import NotificationCard from "../../../components/cards/NotificationCard";
import Footer from "../../../components/footer/Footer";
import Navbar from "../../../components/navbar/Navbar";
import PageTitle from "../../../components/page-title/PageTitle";
import TabContentComments from "../../../components/tabs/TabContentComments";
import Tabs from "../../../components/tabs/Tabs";

const Notifications = () => {
  return (
    <>
      <Navbar />
      <div className="py-6 px-4 flex flex-col gap-6 container-100vh-180">
        <div className="flex flex-col-reverse gap-6 lg:flex-row">
          <div className="main-container">
            <BreadCrumb />
            <PageTitle label="Notifications" />
            <div>
              <NotificationCard />
              <NotificationCard />
              <NotificationCard />
              <NotificationCard />
              <NotificationCard />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Notifications;
