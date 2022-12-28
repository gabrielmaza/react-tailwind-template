import React from "react";

export const SidebarNav = () => {
  return (
    <ul>
      <div className="menu-collapse">
        <div
          className="menu-collapse-item mb-2"
          style={{
            alignItems: "center",
            borderRadius: ".375rem",
            cursor: "pointer",
            display: "flex",
            fontWeight: "600",
            height: "2.5rem",
            justifyContent: "space-between",
            paddingLeft: ".75rem",
            paddingRight: ".75rem",
            userSelect: "none",
          }}
        >
          <div className="flex items-center">
            <span className="text-2xl ltr:mr-2 rtl:ml-2">
              <svg
                stroke="currentColor"
                fill="none"
                stroke-width="0"
                viewBox="0 0 24 24"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                ></path>
              </svg>
            </span>
            <span>Project</span>
          </div>
          <span className="text-lg mt-1" style={{ transform: "rotate(0deg)" }}>
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 20 20"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </span>
        </div>
        <ul
          className="ml-5"
          style={{
            opacity: "1",
            height: "0px",
            overflow: "hidden",
          }}
        >
          <div
            className="menu-item"
            style={{
              height: "40px",
              alignItems: "center",
              borderRadius: ".375rem",
              columnGap: ".5rem",
              cursor: "pointer",
              display: "flex",
              fontWeight: 600,
              paddingLeft: ".75rem",
              paddingRight: ".75rem",
              whiteSpace: "nowrap",
              width: "100%",
            }}
          >
            <a href="..." className="h-full w-full flex items-center">
              <span>Dashboard</span>
            </a>
          </div>
        </ul>
      </div>
    </ul>
  );
};
