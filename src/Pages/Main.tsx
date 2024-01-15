import "../App.css";

import {
  ClockIcon,
  UserIcon,
  GiftIcon,
  UsersIcon,
  ArrowSmRightIcon,
  BookOpenIcon,
  LightningBoltIcon,
  UserGroupIcon,
  LinkIcon,
} from "@heroicons/react/outline";




import Navbar from "../Components/Navbar";
import Banner from "../Components/Banner";
import React from "react";

export default function Main(props) {
  return (
    <div
      className={
        (props.dark ? "dark" : "") +
        " min-h-screen overflow-hidden dark:bg-gray-900 duration-150"
      }
    >
      <Navbar page="main" dark={props.dark} setDark={props.setDark} />
      <Banner />

      <section className="relative duration-150">
        <div className="max-w-7xl mx-auto ">
          <div className="relative z-10 pb-8 bg-white dark:bg-gray-900 duration-150 2xl:pb-20 lg:pb-12 lg:max-w-[44rem] lg:w-full ">
            <svg
              className="hidden lg:block absolute right-0 inset-y-0 h-full w-56 text-white  duration-150 dark:text-gray-900 transform translate-x-1/2"
              fill="currentColor"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <polygon points="50,0 100,0 50,100 0,100" />
            </svg>

            <div className="relative pt-1 px-4 sm:px-6 lg:px-8 "></div>

            <section className="mt-4 mx-auto max-w-7xl px-4 sm:px-6 2xl:mt-14 lg:mt-6 lg:px-8 py-3">
              <div className="relative">
                <h1 className="tracking-tight font-extrabold text-gray-900 dark:text-transparent  sm:text-6xl sm:pb-3">
                  <span className=" duration-150 tiny:text-[3rem] text-4xl sm:text-6xl inline lg:border-l-[10px] lg:pl-3 border-indigo-700 dark:border-indigo-700 bg-clip-text bg-gradient-to-l from-indigo-600 via-indigo-700 to-indigo-700">
                    Online learning, {" "}
                  </span>
                  <span className="text-[rem] tiny:text-[3.5rem] sm:text-5xl font-[900] text-transparent bg-clip-text bg-gradient-to-r from-indigo-700 dark:from-indigo-600 to-indigo-700 dark:to-indigo-600  inline ">
                   Reimagined.
                  </span>
                  <div className="w-24 absolute h-40 ml-8 overflow-hidden tiny:hidden inline-block">
                    <div className=" h-24 bg-indigo-700 -rotate-45 transform origin-top-right"></div>
                  </div>
                </h1>
                <div className="border border-b-2 border-t-0 border-x-0 mt-3 mb-6 dark:border-gray-800 duration-150"></div>
                <p className=" duration-150 pb-4 md:pb-0 mt-3 text-gray-500 dark:text-gray-400  z-10 relative sm:mt-5 text-md 2xl:text-lg  sm:mx-auto md:mt-5 lg:mx-0">
                  <div className="w-4 absolute  overflow-hidden   inline-block">
                    <div className=" h-16 bg-indigo-600 dark:bg-indigo-700 rotate-45 transform origin-top-left"></div>
                  </div>
                  <div className="ml-6 mb-4  duration-150 lg:mr-6 bg-gray-100 border-2 border-gray-200 dark:border-[#182133] dark:bg-[#1d263a]  rounded-xl p-2">
                    <span className="dark:text-gray-300 font-semibold  duration-150">
                      Sailors Learning
                    </span>
                    , is a 501c3 accredited nonprofit organization which aims to
                    give students from K-8 an
                    exciting and engaging way to develop their academic skills.{" "}
                  </div>
                  <div className="w-4 absolute  overflow-hidden   inline-block">
                    <div className=" h-16 bg-indigo-600 dark:bg-indigo-700 rotate-45 transform origin-top-left"></div>
                  </div>
                  <div className="ml-6  duration-150 lg:mr-6 bg-gray-100 border-2 border-gray-200 dark:border-[#182133] dark:bg-[#1d263a] rounded-xl p-2 ">
                  In an increasingly virtual learning environment, Sailors Learning is here to engage and inspire through one-on-one tutoring 
                  and extracurricular classes. With sessions held entirely online, your child can get quality education from home — for free!


                  </div>
                </p>
                <div className="mt-8 py-2 sm:mt-12 sm:flex ">
                  <div className="sm:mr-4 hover:scale-105 transform duration-150 ease-in-out ">
                    <a
                      href="https://docs.google.com/forms/u/0"
                      className="flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium 
                      rounded-xl shadow text-white bg-gradient-to-r from-indigo-700 to-indigo-800 md:py-4 md:text-lg select-none"
                    >
                      Sign up today!{" "}
                      <ArrowSmRightIcon className="h-5 w-5 my-auto ml-2"></ArrowSmRightIcon>
                    </a>
                  </div>
                  
                </div>
              </div>
            </section>
          </div>
        </div>
        <div className="relative lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 bg-gray-900 ">
          <div className="w-11 absolute overflow-hidden lg:hidden inline-block">
            <div className="h-16 bg-white dark:bg-gray-900 rotate-45 transform origin-top-right"></div>
          </div>
          <img
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full select-none lg:dark:opacity-60 "
            src="https://wallpaperaccess.com/full/931292.png"
            alt="Formulas"
            loading="lazy"
          />

          <div className="absolute left-0 right-0 lg:right-1/2 xl:right-3/4 top-0 bottom-0 inset-0 opacity-[10%] transform-gpu animate-blob1 rounded-full blur-2xl bg-indigo-900 "></div>
          <div className="w-11 absolute right-0 bottom-0 overflow-hidden lg:hidden inline-block">
            <div className=" h-16  bg-slate-100 dark:bg-[#182133] rotate-45 transform origin-bottom-left"></div>
          </div>
        </div>
      </section>



      <section className="py-12 bg-slate-100 dark:bg-[#182133] relative z-20 duration-150">
        <div className="w-4 absolute ml-[-5px] overflow-hidden lg:hidden inline-block">
          <div className=" h-16 bg-indigo-700 rotate-45 transform origin-top-left"></div>
        </div>
        <div className="justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
          <div className="lg:grid grid-cols-4">
            <div>
              <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase ">
                About Us
              </h2>
              <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-gray-300 sm:text-4xl">
                Who are we?
              </p>
              <p className="mt-4 mb-3 max-w-2xl text-xl text-gray-500 dark:text-gray-400 ">
                We are Sailors Learning, and your child's success is our priority.
              </p>
            </div>
            
            <div className="mt-8 bg-[#fcfeff] dark:bg-[#222d41] rounded-xl pr-2 py-3 md:ml-5">
              <h2 className="font-bold ml-8 text-xl pb-2 tracking-tight text-gray-900 dark:text-gray-300 sm:text-xl">One-on-One Tutoring</h2>

              <p className=" ml-7 max-w-2xl text-[20px] text-gray-500 dark:text-gray-400 pr-2">
              for all K-12 subjects, in a variety of backgrounds.
              </p>
            </div>
            <div className="mt-8 bg-[#fcfeff] dark:bg-[#222d41] rounded-xl pr-2 py-3 md:ml-5">
              <h2 className="font-bold ml-8 text-xl pb-2 tracking-tight text-gray-900 dark:text-gray-300 sm:text-xl">Class Variety</h2>

              <p className=" ml-7 max-w-2xl text-[20px] text-gray-500 dark:text-gray-400 pr-2">
              Our tutors are certified in a variety of fields, ranging from STEM to the humanities.
              </p>
            </div>
            <div className="mt-8 bg-[#fcfeff] dark:bg-[#222d41] rounded-xl pr-2 py-3 md:ml-5">
              <h2 className="font-bold ml-8 text-xl pb-2 tracking-tight text-gray-900 dark:text-gray-300 sm:text-xl">Global Reach</h2>

              <p className=" ml-7 max-w-2xl text-[20px] text-gray-500 dark:text-gray-400 pr-2">
              Sailors Learning boasts students from across the world from a variety of backgrounds.
              </p>
            </div>
          </div>
        </div>
      </section>



      <section className="md:flex place-content-center">
        <div className="py-12 self-center md:mt-2 mb-2">
          <div className="w-4 absolute ml-[-5px] overflow-hidden lg:hidden inline-block">
            <div className=" h-16 bg-indigo-700 rotate-45 transform origin-top-left"></div>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="self-center ">
              <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
                Timeline
              </h2>
              <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl dark:text-gray-300 ">
                Our History
              </p>
              <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto dark:text-gray-400 ">
                <div className="md:mr-12">
                  Sailors Learning was initially started in the midst of the Coronavirus pandemic 
                  to provide critical learning opportunities to misplaced students. Since then, we've exponentially
                  grown in our reach to help as many students learn virtually as possible. 
                </div>
              </p>
            </div>
          </div>
        </div>
        <main className="md:flex place-content-center">
          <div className=" self-center max-w-7xl mx-auto md:pt-6 pb-6 px-6 lg:px-8">
            <ol className="relative border-l-2 border-gray-200 dark:border-gray-600 my-6">
              
              <li className="mb-10 ml-4 text-white bg-gray-100 dark:bg-[#1d263a] border-2 border-gray-200 dark:border-[#182133] rounded-xl p-2">
                <div className="absolute w-3 h-3 bg-gray-300 rounded-full mt-1.5 -left-[0.415rem] border border-white dark:border-gray-900 "></div>
                <time className="mb-1 text-sm font-normal leading-none text-indigo-700 dark:text-indigo-600">
                  May 2020
                </time>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-300 ">
                  Sailors Learning Begins
                </h3>
                <p className="mb-2 text-base font-normal text-gray-500 dark:text-gray-400">
                  We initially planned on helping students learn in the midst of virtual learning.
                </p>
              </li>
              <li className="mb-10 ml-4 text-white bg-gray-100 dark:bg-[#1d263a] border-2 border-gray-200 dark:border-[#182133] rounded-xl p-2">
                <div className="absolute w-3 h-3 bg-gray-300 rounded-full mt-1.5 -left-[0.415rem] border border-white dark:border-gray-900 "></div>
                <time className="mb-1 text-sm font-normal leading-none text-indigo-700 dark:text-indigo-600">
                  April 2021
                </time>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-300 ">
                  XYZ Thing happens
                </h3>
                <p className="mb-2 text-base font-normal text-gray-500 dark:text-gray-400">
                  Archit -- tell me what to put here
                </p>
              </li>
              <li className="mb-10 ml-4 text-white bg-gray-100 dark:bg-[#1d263a] border-2 border-gray-200 dark:border-[#182133] rounded-xl p-2">
                <div className="absolute w-3 h-3 bg-gray-300 rounded-full mt-1.5 -left-[0.415rem] border border-white dark:border-gray-900 "></div>
                <time className="mb-1 text-sm font-normal leading-none text-indigo-700 dark:text-indigo-600">
                  July 2022
                </time>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-300 ">
                  Something happens
                </h3>
                <p className="mb-2 text-base font-normal text-gray-500  dark:text-gray-400">
                  Archit what do I put here
                </p>
              </li>
              <li className="ml-4">
                <div className="absolute w-3 h-3 bg-indigo-700 rounded-full mt-1.5 -left-[0.415rem] border border-white dark:border-gray-900  "></div>
                <h3 className="text-lg font-semibold text-white bg-gradient-to-tr from-indigo-500 to-indigo-700 dark:from-indigo-700 dark:to-indigo-800 rounded-xl inline py-1 px-2">
                  Today!
                </h3>
              </li>
            </ol>
          </div>
        </main>
      </section>
      <section className="py-12 bg-slate-100 dark:bg-[#182133] align-center duration-150">
        <div className="w-4 absolute ml-[-5px] overflow-hidden lg:hidden inline-block">
          <div className=" h-16 bg-indigo-700 rotate-45 transform origin-top-left"></div>
        </div>
        <div className="justify-center lg:grid lg:grid-cols-5 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 gap-8">
          <div className="md:flex mb-5 col-span-1">
            <div className="lg:self-center">
              <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
                Join
              </h2>
              <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-gray-300 sm:text-4xl">
                Join Us!
              </p>
            </div>
          </div>

          <div className="mt-8 md:mt-5 col-span-2 rounded-xl bg-[#fcfeff] dark:bg-[#212c42] p-3">
            <div>
              <h1 className = "text-center mt-2 text-2xl font-bold dark:text-gray-300">
                Join as a Student
              </h1>
            </div>
            <p className="ml-7 max-w-2xl  text-gray-500 dark:text-gray-400">
            <ul className="list-disc list-inside">
              <li>Available to K-8 students</li>
              <li>Fill out the sign-up form</li>
              <li>Get matched with a fit tutor</li>
              <li>Receive an individualized study plan</li>
            </ul>
            </p>
          </div>
          <div className="mt-8 md:mt-5 col-span-2 rounded-xl bg-[#fcfeff] dark:bg-[#212c42] p-3">
            <div>
              <h1 className = "text-center mt-2 text-2xl font-bold dark:text-gray-300">
                Join as a Tutor
              </h1>
            </div>
            <p className="ml-7 max-w-2xl  text-gray-500 dark:text-gray-400">
            <ul className="list-disc list-inside">
              <li>Available to high-school or college students</li>
              <li>Fill out the sign-up form</li>
              <li>Get matched with a student</li>
              <li>Use your strengths to help students</li>
            </ul>
            </p>
          </div>
        </div>

      </section>
    </div>
  );
}
