import {
  ArrowNarrowRightIcon,
  ArrowRightIcon,
  BadgeCheckIcon,
  LogoutIcon,
} from "@heroicons/react/solid";
import React from "react";
import { Link } from "react-router-dom";
import Button from "../../../components/button/Button";
import ButtonLink from "../../../components/button/ButtonLink";
import Footer from "../../../components/footer/Footer";
import InputCheckbox from "../../../components/inputs/checkbox/InputCheckbox";
import InputText from "../../../components/inputs/text/InputText";
import Navbar from "../../../components/navbar/Navbar";
import PageTitle from "../../../components/page-title/PageTitle";

const RegisterForm = () => {
  return (
    <>
      <Navbar navbarLogBtn />
      <div className="py-20 px-4 flex flex-col gap-6 container-100vh-180">
        <div className="flex flex-col gap-6">
          {/* PASO 1 */}
          <div className="w-full max-w-lg mx-auto flex flex-col gap-6">
            <PageTitle label="Sign in" />
            <form>
              <div className="mb-6">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Your email
                </label>

                <input
                  type="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@flowbite.com"
                  required
                />
              </div>
              <div className="mb-6">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Your password
                </label>
                <input
                  type="password"
                  id="password"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div>
              <div className="mb-6">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Repeat your password
                </label>
                <input
                  type="password"
                  id="password"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div>

              <InputCheckbox>
                I accept the{" "}
                <Link
                  to="/privacy-policy"
                  title="términos y política de privacidad"
                  target="_blank"
                  className="hover:underline"
                >
                  terms and privacy policy
                </Link>
                .
              </InputCheckbox>

              <div className="flex justify-end">
                <Button
                  type="submit"
                  label="Sign in"
                  icon={<ArrowNarrowRightIcon />}
                  color="green"
                  customClass="px-6 py-3"
                />
              </div>
            </form>
          </div>
          {/* PASO 2 */}
          <div className="w-full max-w-lg mx-auto flex flex-col items-center gap-6">
            <PageTitle label="Confirm your email" />
            <div className="mb-5 text-center">
              <h2 className="truncate mb-2 text-lg text-center md:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Enter the token that we send to your email
              </h2>
              <div className="flex justify-center gap-4 py-5">
                <InputText
                  placeholder="_"
                  customClass="font-bold text-lg text-center max-w-[48px]"
                  required
                  type="number"
                />
                <InputText
                  placeholder="_"
                  customClass="font-bold text-lg text-center max-w-[48px]"
                  required
                  type="number"
                />
                <InputText
                  placeholder="_"
                  customClass="font-bold text-lg text-center max-w-[48px]"
                  required
                  type="number"
                />
                <InputText
                  placeholder="_"
                  customClass="font-bold text-lg text-center max-w-[48px]"
                  required
                  type="number"
                />
              </div>
            </div>
          </div>
          {/* PASO 2 OPTION 2*/}
          <div className="w-full max-w-lg mx-auto flex flex-col items-center gap-6">
            <PageTitle label="Confirm your email" />
            <div className="mb-5 text-center">
              <h2 className="truncate mb-2 text-lg text-center md:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Enter your email platform and confirm.
              </h2>
            </div>
          </div>
          {/* PASO 3 */}
          <div className="w-full max-w-lg mx-auto flex flex-col items-center gap-6">
            <BadgeCheckIcon className="w-16 h-16 " />
            <PageTitle label="Email verified!" />
            <div className="mb-5 text-center">
              <h2 className="truncate mb-2 text-lg text-center md:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                You can now log in.
              </h2>
              <div className="flex justify-center gap-4 py-5">
                <ButtonLink
                  url="/login"
                  label="Log in"
                  color="green"
                  customClass="px-5 py-3"
                  title="Ingresar"
                  icon={<ArrowRightIcon />}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default RegisterForm;
