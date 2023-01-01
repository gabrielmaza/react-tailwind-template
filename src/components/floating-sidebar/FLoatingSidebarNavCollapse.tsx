import { BanIcon } from "@heroicons/react/solid";
import React from "react";
import { Link } from "react-router-dom";
import { useHandleShow } from "../../hooks/useHandleShow";
import "./floating-sidebar.css";

interface FloatingSidebarNavCollapseProps {
  label: string;
  icon?: any;
  collapseContent?: any;
  btnLinkUrl?: any;
  btnLinkTitle?: string;
}

export const FloatingSidebarNavCollapse = ({
  label,
  icon,
  collapseContent,
  btnLinkUrl,
  btnLinkTitle,
}: FloatingSidebarNavCollapseProps) => {
  const { show, handleChange } = useHandleShow();
  return (
    <>
      {collapseContent ? (
        <div
          className="floating-sidebar_nav-collapse"
          onClick={handleChange}
          aria-hidden
        >
          <div className="floating-sidebar_nav-collapse-item">
            <div className="floating-sidebar_nav-collapse-label">
              {icon}
              <span className="floating-sidebar_nav-collapse-span">
                {label}
              </span>
            </div>
            <span className="floating-sidebar_nav-collapse-icon">
              <svg
                className={!show ? "rotate-0" : "rotate-180"}
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
          {/* Subnav */}
          {collapseContent && (
            <ul
              className={`floating-sidebar_nav-collapse-content ${
                !show ? "h-0 opacity-0" : "h-auto opacity-100 fade-in-top"
              }`}
            >
              {collapseContent.map((item) => (
                <div
                  className="floating-sidebar_nav-collapse-content-item"
                  key={item.title}
                >
                  <a
                    href={item.url}
                    title={item.title}
                    className="floating-sidebar_nav-collapse-content-link"
                  >
                    <span className="floating-sidebar_nav-collapse-content-link-span">
                      {item.label}
                    </span>
                  </a>
                </div>
              ))}
            </ul>
          )}
        </div>
      ) : (
        <Link
          className="floating-sidebar_nav-btn-link"
          to={btnLinkUrl}
          title={btnLinkTitle}
        >
          {icon}
          <span className="floating-sidebar_nav-btn-link-span">{label}</span>
        </Link>
      )}
    </>
  );
};
