import "../App.css";
import React, { useState } from "react";
import {
  XIcon,
  ExternalLinkIcon,
  SpeakerphoneIcon,
} from "@heroicons/react/outline";

export default function Banner() {
  const [banner, setBanner] = useState(false);

  return (
    <div
      className={`bg-indigo-700 drop-shadow-lg  w-full transition duration-[95ms] ease-in-out z-10  ${
        banner ? "absolute -translate-y-full " : " translate-y-0 "
      }`}
    >
      <div className="max-w-7xl mx-auto pt-1 pb-3 px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between flex-wrap">
          <div className="w-0 flex-1 flex items-center">
            <span className="flex p-2 rounded-lg bg-indigo-900 ">
              <SpeakerphoneIcon
                className="h-6 w-6 text-white hover:rotate-180 transition duration-150 ease-in-out"
                aria-hidden="true"
              />
            </span>
            <p className="ml-3 font-medium text-white truncate">
              <span className="md:hidden">Announcing a new website!</span>
              <span className="hidden md:inline">
                Sailors Learning has a new website!
              </span>
            </p>
          </div>
          <div className="order-3 grid grid-cols-2 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto sm:flex sm:flex-row">
            
           
          </div>
          <div className="order-2 flex-shrink-0 sm:order-3 sm:ml-3">
            <button
              type="button"
              className="-mr-1 flex p-2 rounded-md duration-150 hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2"
            >
              <span className="sr-only ">Dismiss</span>
              <XIcon
                onClick={() => setBanner(true)}
                className="h-6 w-6 text-white z-10"
                aria-hidden="true"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
