import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

import { ArrowNarrowRightIcon } from "@heroicons/react/solid";
import Button from "../../../components/button/Button";
import Footer from "../../../components/footer/Footer";
import Navbar from "../../../components/navbar/Navbar";
import PageTitle from "../../../components/page-title/PageTitle";
import Alert from "../../../components/alert/Alert";

interface FormInput {
  contactEmail: string;
  contactMessage: string;
}

const Contact = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<FormInput>();

  const onSubmit: SubmitHandler<FormInput> = (data) => console.log(data);

  return (
    <>
      <Navbar navbarLogBtn />
      <div className="py-20 px-4 flex flex-col gap-6 container-100vh-180">
        <div className="flex flex-col-reverse gap-6 lg:flex-row">
          <div className="w-full max-w-lg mx-auto flex flex-col gap-6">
            <PageTitle label="Send us a message" />

            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-6">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Your email
                </label>
                <input
                  placeholder="Type your email..."
                  type="email"
                  {...register("contactEmail", {
                    required: "Email is required",
                    pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i,
                    maxLength: 25,
                  })}
                />
                <span className="text-red-600 dark:text-red-400">
                  {errors.contactEmail?.message}
                </span>
              </div>
              <div className="mb-6">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Your message
                </label>
                <textarea
                  placeholder="Type your message..."
                  {...register("contactMessage", {
                    required: "A message is required",
                    pattern: /^[A-Za-z]+$/i,
                    maxLength: 1000,
                  })}
                />
                <span className="text-red-600 dark:text-red-400">
                  {errors.contactMessage?.message}
                </span>
              </div>
              <div className="flex justify-end">
                <Button
                  type="submit"
                  label="Send"
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

export default Contact;
