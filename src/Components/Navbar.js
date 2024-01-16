import "../App.css";
import { Disclosure } from "@headlessui/react";
import {
  MenuIcon,
  XIcon,
  ChevronDownIcon,
  SunIcon,
  MoonIcon,
} from "@heroicons/react/outline";
import React, { useState } from "react";

const navigation = [
  { name: "Home", href: "/", current: true, page: "main" },
  { name: "Staff", href: "/staff", current: true, page: "staff" },
  { name: "Donate", href: "https://www.paypal.com/donate/?cmd=_donations&business=SZJ8WBPGSXNJJ&currency_code=USD&Z3JncnB0=", current: true},
  // {
  //   name: "Leaderboard",
  //   href: "/leaderboard",
  //   current: true,
  //   page: "leaderboard",
  // },

  // { name: "Portal", href: "/portal", current: true, page: },
  // { name: "Retreival", href: "/retreival", current: true, page: },
];



const mobileNavigation = [
  { name: "Home", href: "/", current: true, page: "main" },
  { name: "Staff", href: "/staff", current: true, page: "staff" },
  { name: "Donate", href: "https://www.paypal.com/donate/?cmd=_donations&business=SZJ8WBPGSXNJJ&currency_code=USD&Z3JncnB0=", current: true},
  // {
  //   name: "Leaderboard",
  //   href: "/leaderboard",
  //   current: true,
  //   page: "leaderboard",
  // },
  

  // { name: "Portal", href: "/portal", current: true, page: },
  // { name: "Retreival", href: "/retreival", current: true, page: },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar(props) {
  const [dropdown, dropController] = useState(false);

  return (
    <Disclosure
      as="nav"
      className="relative bg-gray-900 border-0  border-b-indigo-700 border-b-8 z-20 transition-height duration-300 ease-in-out"
    >
      {({ open }) => (
        <>
          <div className="max-w-7xl py-3 mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16 ">
              {/* Mobile menu button*/}
              <div className="absolute inset-y-0 left-0 flex items-center lg:hidden ">
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white transform duration-150 ease-in-out ">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-10 w-10" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-10 w-10" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center lg:items-stretch lg:justify-start ">
                <a
                  href="/"
                  className="flex-shrink-0 ml-6 lg:ml-0 flex items-center select-none transform duration-150 ease-in-out hover:scale-105 "
                >
                  
                  <div className="ml-2 my-2">
                    <span className="text-2xl font-[900] text-white dark:text-transparent bg-clip-text bg-gradient-to-r dark:from-indigo-600 dark:via-indigo-600 dark:to-indigo-600 ">
                      Sailors Learning
                    </span>
                    
                  </div>
                </a>
                <div className="hidden my-auto lg:block md:ml-4 lg:ml-10 select-none">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.page === props.page
                            ? " text-white  border-0 border-y-2 border-b-indigo-700 border-t-gray-900 transform duration-150 ease-in-out "
                            : "text-gray-300 hover:bg-gray-800 hover:text-white rounded-t-md transform duration-150 ease-in-out border-indigo-800 border-t-2 border-t-gray-900 hover:border-b-2 hover:border-b-indigo-700",
                          "px-[10px] lg:px-3 py-2 text-xs md:text-sm lg:text-base font-medium rounded-t-md"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                    
                  </div>
                </div>
                <div className=" flex-shrink-0 ml-auto hidden lg:flex justify-self-end items-center select-none">
                  <button
                    className="flex bg-gray-800 rounded-xl px-1 py-1 hover:bg-gray-700 duration-150 ease-in-out text-gray-400 hover:text-yellow-500"
                    onClick={() => props.setDark(!props.dark)}
                  >
                    <div className="h-9 w-9 flex items-center justify-center">
                      {props.dark ? (
                        <MoonIcon className="h-6 w-6  text-indigo-600"></MoonIcon>
                      ) : (
                        <SunIcon className="h-6 w-6 "></SunIcon>
                      )}
                    </div>
                  </button>
                </div>
              </div>

              <div className="mr-2 flex-shrink-0 ml-auto flex lg:hidden justify-self-end items-center select-none">
                <button
                  className="flex bg-gray-800 rounded-xl px-1 py-1 hover:bg-gray-700 duration-150 ease-in-out text-gray-400 hover:text-gray-300"
                  onClick={() => props.setDark(!props.dark)}
                >
                  <div className="h-9 w-9 flex items-center justify-center">
                    {props.dark ? (
                      <MoonIcon className="h-6 w-6  text-indigo-600"></MoonIcon>
                    ) : (
                      <SunIcon className="h-6 w-6 "></SunIcon>
                    )}
                  </div>
                </button>
              </div>
            </div>
          </div>
          <Disclosure.Panel className="lg:hidden ">
            <div className="px-2 pt-2 pb-3 space-y-1 ">
              {mobileNavigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.page === props.page
                      ? " text-white  border-t-0 border-b-0 border-r-0 rounded border-l-4 border-indigo-700 bg-gradient-to-r from-gray-800 to-gray-900"
                      : "text-gray-300 hover:bg-gray-800 hover:text-white",
                    "block px-3 py-2 text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
