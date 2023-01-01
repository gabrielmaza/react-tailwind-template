import React from "react";
import Button from "../button/Button";
import InputText from "../inputs/text/InputText";

const CommentsSection = () => {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
        Comments
      </h3>

      <form className="flex gap-3">
        <div className="w-9/12">
          <InputText placeholder="Leave comment..." required />
        </div>
        <div className="w-3/12">
          <Button
            color="transparent-bordered"
            type="submit"
            label="Send"
            customClass="py-3 rounded-lg w-full"
          />
        </div>
      </form>

      <div className="overflow-y-auto scroll-smooth scroll-m-0 py-4 h-auto max-h-[560px] flex flex-col gap-4">
        <ol>
          <li className="mb-4 p-0">
            <div className="p-4 bg-white rounded-lg border border-gray-200 shadow-sm dark:bg-gray-700 dark:border-gray-600">
              <div className="justify-between items-center mb-3 sm:flex">
                <time className="mb-1 text-xs font-normal text-gray-400 sm:order-last sm:mb-0">
                  2 hours ago
                </time>
                <div className="text-sm font-normal text-gray-500 lex dark:text-gray-300">
                  @jack_dorsey
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <div className="p-3 text-xs italic font-normal text-gray-500 bg-gray-50 rounded-lg border border-gray-200 dark:bg-gray-600 dark:border-gray-500 dark:text-gray-300">
                  Hi ya'll! I wanted to share a webinar zeroheight is having
                  regarding how to best measu.
                </div>
                <div className="text-sm font-normal text-gray-500 lex dark:text-gray-300">
                  Reply
                </div>
                <div className="p-3 text-xs italic font-normal text-gray-500 bg-gray-50 rounded-lg border border-gray-200 dark:bg-gray-600 dark:border-gray-500 dark:text-gray-300">
                  Hi ya'll! I wanted to share a webinar zeroheight is having
                  regarding how to best measure your desi.
                </div>
              </div>
            </div>
          </li>
          <li className="mb-4 p-0">
            <div className="p-4 bg-white rounded-lg border border-gray-200 shadow-sm dark:bg-gray-700 dark:border-gray-600">
              <div className="justify-between items-center mb-3 sm:flex">
                <time className="mb-1 text-xs font-normal text-gray-400 sm:order-last sm:mb-0">
                  2 hours ago
                </time>
                <div className="text-sm font-normal text-gray-500 lex dark:text-gray-300">
                  @elon_musk
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <div className="p-3 text-xs italic font-normal text-gray-500 bg-gray-50 rounded-lg border border-gray-200 dark:bg-gray-600 dark:border-gray-500 dark:text-gray-300">
                  Hi ya'll! I wanted to share a webinar zeroheight is having
                  regarding how to best measure your.
                </div>
                <div className="text-sm font-normal text-gray-500 lex dark:text-gray-300">
                  Waiting answer...
                </div>
              </div>
            </div>
          </li>
          <li className="mb-4 p-0">
            <div className="p-4 bg-white rounded-lg border border-gray-200 shadow-sm dark:bg-gray-700 dark:border-gray-600">
              <div className="justify-between items-center mb-3 sm:flex">
                <time className="mb-1 text-xs font-normal text-gray-400 sm:order-last sm:mb-0">
                  2 hours ago
                </time>
                <div className="text-sm font-normal text-gray-500 lex dark:text-gray-300">
                  @mark_zuckerberg
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <div className="p-3 text-xs italic font-normal text-gray-500 bg-gray-50 rounded-lg border border-gray-200 dark:bg-gray-600 dark:border-gray-500 dark:text-gray-300">
                  Hi ya'll! I wanted to share a webinar zeroheight.
                </div>
                <div className="p-2 font-normal text-gray-500 bg-gray-50 rounded-lg border border-gray-200 dark:bg-gray-600 dark:border-gray-500 dark:text-gray-300">
                  <form className="flex gap-3">
                    <div className="w-9/12">
                      <InputText placeholder="Reply..." required />
                    </div>
                    <div className="w-3/12">
                      <Button
                        color="transparent-bordered"
                        type="submit"
                        label="Reply"
                        customClass="p-3 rounded-lg w-full"
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default CommentsSection;
