import { ArrowNarrowRightIcon } from "@heroicons/react/solid";
import React from "react";
import Button from "../../../components/button/Button";
import Footer from "../../../components/footer/Footer";
import InputText from "../../../components/inputs/text/InputText";
import Navbar from "../../../components/navbar/Navbar";
import PageTitle from "../../../components/page-title/PageTitle";

const Login = () => {
  return (
    <>
      <Navbar />
      <div className="py-20 px-4 flex flex-col gap-6 container-100vh-180">
        <div className="flex flex-col-reverse gap-6 lg:flex-row">
          <div className="w-full max-w-lg mx-auto flex flex-col gap-6">
            <PageTitle label="Login" />
            <form>
              <div className="mb-6">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Your email
                </label>
                <InputText
                  type="email"
                  id="email-input"
                  placeholder="name@reactmarket.com"
                />
              </div>
              <div className="mb-6">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Your password
                </label>
                <InputText
                  type="password"
                  id="password"
                  placeholder="Password"
                />
                {/* <input
                  type="password"
                  id="password"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                /> */}
              </div>
              <div className="flex items-start mb-6">
                <div className="flex items-center h-5">
                  <input
                    id="remember"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                    required
                  />
                </div>
                <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Remenber me
                </label>
              </div>
              <div className="flex justify-end">
                <Button
                  type="submit"
                  label="Log in"
                  icon={<ArrowNarrowRightIcon />}
                  color="purple"
                  customClass="px-6 py-3"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
