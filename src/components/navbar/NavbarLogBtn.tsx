import React from "react";
import ButtonLink from "../button/ButtonLink";
import "./navbar.css";
import { useTranslation } from "react-i18next";

export const NavbarLogBtn = () => {
  const { t, i18n } = useTranslation("global");
  return (
    <>
      <ButtonLink
        label={t("component.header.login-label")}
        title="Log in"
        color="transparent"
        url="/login"
        customClass="py-3 px-4"
      />
      <ButtonLink
        label={t("component.header.sign-in-label")}
        title="Sign in"
        color="transparent-bordered"
        url="/register-form"
        customClass="py-3 px-4"
      />
    </>
  );
};
