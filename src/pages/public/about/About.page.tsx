import { ArrowNarrowRightIcon } from "@heroicons/react/solid";
import React from "react";
import ButtonLink from "../../../components/button/ButtonLink";
import Footer from "../../../components/footer/Footer";
import Navbar from "../../../components/navbar/Navbar";
import "./about.css";

const About = () => {
  return (
    <>
      <Navbar />
      <div className="about-wrapp">
        <div className="about-wrapp_main-section">
          <div className="w-full h-full flex items-center">
            <div className="p-4 flex flex-col justify-center gap-6 w-full md:max-w-[600px] h-full overflow-hidden">
              <div className="flex flex-col">
                <span className="about-wrapp_main-title amin1">
                  We put the best
                </span>
                <span className="about-wrapp_main-title amin2">
                  digital art
                </span>
                <span className="about-wrapp_main-title amin3">
                  in your hands
                </span>
              </div>
              <div className="overflow-y-hidden">
                <p className="about-wrapp_main-subtitle">
                  Search and compare the best digital products. Find the best
                  prices for art pieces with which you always dream.
                </p>
              </div>
              <ButtonLink
                label="Explore"
                title="Link title"
                url="/"
                color="pink"
                icon={<ArrowNarrowRightIcon />}
                customClass="px-6 py-3 fade-in-left"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
