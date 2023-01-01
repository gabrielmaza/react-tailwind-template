import React from "react";
import ButtonLink from "../button/ButtonLink";
import "./navbar.css";

export const NavbarLogBtn = () => {
  return (
    <>
      <ButtonLink
        label="Log in"
        title="Log in"
        color="transparent"
        url="/login"
        customClass="py-3 px-4"
      />
      <ButtonLink
        label="Sign in"
        title="Sign in"
        color="transparent-bordered"
        url="/register-form"
        customClass="py-3 px-4"
      />
    </>
  );
};
