import React, { useState } from "react";
import TabContentComments from "./TabContentComments";
import "./tabs.css";

interface TabsProps {
  tab1Title: string;
  tab2Title: string;
  tab3Title?: string;
  tab4Title?: string;
  tab5Title?: string;
  tab6Title?: string;
  tab1Content: any;
  tab2Content: any;
  tab3Content?: any;
  tab4Content?: any;
  tab5Content?: any;
  tab6Content?: any;
}

const Tabs = ({
  tab1Title = "The title 1",
  tab2Title = "The title 2",
  tab3Title,
  tab4Title,
  tab5Title,
  tab6Title,
  tab1Content,
  tab2Content,
  tab3Content,
  tab4Content,
  tab5Content,
  tab6Content,
}: TabsProps) => {
  const [contentTab1, setContentTab1] = useState(true);
  const [contentTab2, setContentTab2] = useState(false);
  const [contentTab3, setContentTab3] = useState(false);
  const [contentTab4, setContentTab4] = useState(false);
  const [contentTab5, setContentTab5] = useState(false);
  const [contentTab6, setContentTab6] = useState(false);

  const handleTab1 = () => {
    setContentTab1(true);
    setContentTab2(false);
    setContentTab3(false);
    setContentTab4(false);
    setContentTab5(false);
    setContentTab6(false);
  };
  const handleTab2 = () => {
    setContentTab1(false);
    setContentTab2(true);
    setContentTab3(false);
    setContentTab4(false);
    setContentTab5(false);
    setContentTab6(false);
  };
  const handleTab3 = () => {
    setContentTab1(false);
    setContentTab2(false);
    setContentTab3(true);
    setContentTab4(false);
    setContentTab5(false);
    setContentTab6(false);
  };
  const handleTab4 = () => {
    setContentTab1(false);
    setContentTab2(false);
    setContentTab3(false);
    setContentTab4(true);
    setContentTab5(false);
    setContentTab6(false);
  };
  const handleTab5 = () => {
    setContentTab1(false);
    setContentTab2(false);
    setContentTab3(false);
    setContentTab4(false);
    setContentTab5(true);
    setContentTab6(false);
  };
  const handleTab6 = () => {
    setContentTab1(false);
    setContentTab2(false);
    setContentTab3(false);
    setContentTab4(false);
    setContentTab5(false);
    setContentTab6(true);
  };

  return (
    <div>
      <div className="mb-4 border-b border-gray-200 dark:border-gray-700 relative">
        <ul
          className="flex gap-3 -mb-px text-sm font-medium text-center w-full overflow-x-auto"
          id="myTab"
          data-tabs-toggle="#myTabContent"
          role="tablist"
        >
          <li className="p-0 mr-0 cursor-pointer" role="presentation">
            <span
              className={`inline-block p-4 rounded-t-lg border-b-2 whitespace-nowrap ${
                contentTab1 ? "active-tab" : "disable-tab"
              }`}
              onClick={handleTab1}
              aria-hidden
            >
              {tab1Title}
            </span>
          </li>
          <li className="p-0 mr-0 cursor-pointer" role="presentation">
            <span
              className={`inline-block p-4 rounded-t-lg border-b-2 whitespace-nowrap ${
                contentTab2 ? "active-tab" : "disable-tab"
              }`}
              onClick={handleTab2}
              aria-hidden
            >
              {tab2Title}
            </span>
          </li>
          {tab3Title ? (
            <li className="p-0 mr-0 cursor-pointer" role="presentation">
              <span
                className={`inline-block p-4 rounded-t-lg border-b-2 whitespace-nowrap ${
                  contentTab3 ? "active-tab" : "disable-tab"
                }`}
                onClick={handleTab3}
                aria-hidden
              >
                {tab3Title}
              </span>
            </li>
          ) : (
            ""
          )}

          {tab4Title ? (
            <li className="p-0 mr-0 cursor-pointer" role="presentation">
              <span
                className={`inline-block p-4 rounded-t-lg border-b-2 whitespace-nowrap ${
                  contentTab4 ? "active-tab" : "disable-tab"
                }`}
                onClick={handleTab4}
                aria-hidden
              >
                {tab4Title}
              </span>
            </li>
          ) : (
            ""
          )}
          {tab5Title ? (
            <li className="p-0 mr-0 cursor-pointer" role="presentation">
              <span
                className={`inline-block p-4 rounded-t-lg border-b-2 whitespace-nowrap ${
                  contentTab5 ? "active-tab" : "disable-tab"
                }`}
                onClick={handleTab5}
                aria-hidden
              >
                {tab5Title}
              </span>
            </li>
          ) : (
            ""
          )}
          {tab6Title ? (
            <li className="p-0 mr-0 cursor-pointer" role="presentation">
              <span
                className={`inline-block p-4 rounded-t-lg border-b-2 whitespace-nowrap ${
                  contentTab6 ? "active-tab" : "disable-tab"
                }`}
                onClick={handleTab6}
                aria-hidden
              >
                {tab6Title}
              </span>
            </li>
          ) : (
            ""
          )}
        </ul>
      </div>
      {contentTab1 ? <div>{tab1Content}</div> : null}
      {contentTab2 ? <div>{tab2Content}</div> : null}
      {contentTab3 ? <div>{tab3Content}</div> : null}
      {contentTab4 ? <div>{tab4Content}</div> : null}
      {contentTab5 ? <div>{tab5Content}</div> : null}
      {contentTab6 ? <div>{tab6Content}</div> : null}
    </div>
  );
};

export default Tabs;
