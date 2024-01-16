import "../App.css";
import Navbar from "../Components/Navbar";
import Banner from "../Components/Banner";
import {
  UserGroupIcon,
  VariableIcon,
  LocationMarkerIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  
} from "@heroicons/react/outline";
import React, { useEffect, useCallback } from "react";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import AutoHeight from "embla-carousel-auto-height";
// import { WheelGesturesPlugin } from "embla-carousel-wheel-gestures";



export default function Publications(props) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay(),
    AutoHeight(),
    // WheelGesturesPlugin(),
  ]);

  useEffect(() => {
    if (emblaApi) {
      console.log(emblaApi.slideNodes()); // Access API
    }
  }, [emblaApi]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div
      className={
        (props.dark ? "dark" : "") +
        " min-h-screen bg-slate-100 dark:bg-gray-900 duration-150 "
      }
    >
      <Navbar page="meme" dark={props.dark} setDark={props.setDark} />

      <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="md:grid-cols-6 flex-col flex md:grid gap-6">
          <div className="drop-shadow-lg md:col-span-2 flex justify-end items-end border border-gray-200 dark:border-gray-800 rounded-xl bg-center bg-cover bg-[url('/public/meme/hero.jpg')]">
            <img
              src="/favicon.png"
              className="w-12 mt-36 md:mt-0 sm:w-24 m-4"
              alt="Logo"
            />
          </div>
          <div className="flex flex-col md:col-span-4 text-gray-900 dark:text-gray-200 gap-4">
            <div className="inline font-extrabold text-3xl lg:border-l-[10px] lg:pl-3 border-indigo-600 dark:border-indigo-600">
              Publications
            </div>
            <div className="border border-b-2 border-t-0 border-x-0  dark:border-gray-800 duration-150"></div>
            <div className="relative">
              <div className="w-4 absolute  overflow-hidden   inline-block">
                <div className="h-16 bg-indigo-600 dark:bg-indigo-700 rotate-45 transform origin-top-left"></div>
              </div>
              <div className="ml-6 flex gap-4 text-gray-800 lg:items-center dark:text-gray-200 border-2 border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-800 rounded-xl p-4">
                <div className="flex items-center justify-center p-4 h-16 w-20 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-lg text-white">
                  <UserGroupIcon className="h-8 w-8" aria-hidden="true" />
                </div>
                <div>
                  Throughout the past few years,
                  Sailors Learning has posted a number of
                  various publications regarding updates in 
                  virtual learning and educational methods.
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="w-4 absolute  overflow-hidden   inline-block">
                <div className=" h-16 bg-indigo-600 dark:bg-indigo-700 rotate-45 transform origin-top-left"></div>
              </div>
              <div className="ml-6 flex gap-4 text-gray-800 lg:items-center dark:text-gray-200 border-2  border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-800 rounded-xl p-4">
                <div className="flex items-center justify-center p-4 h-16 w-20 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-lg text-white">
                  <VariableIcon className="h-8 w-8" aria-hidden="true" />
                </div>
                <div>
                  These include advancements in math and science that have
                  the potential to revolutionize online methods of learning as we 
                  know it.
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="w-4 absolute  overflow-hidden   inline-block">
                <div className=" h-16 bg-indigo-600 dark:bg-indigo-700 rotate-45 transform origin-top-left"></div>
              </div>
              <div className="ml-6 flex gap-4 text-gray-800 lg:items-center dark:text-gray-200 border-2  border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-800 rounded-xl p-4">
                <div className="flex items-center justify-center p-4 h-16 w-20 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-lg text-white">
                
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v16.5c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Zm3.75 11.625a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                </svg>

                </div>
                <div>
                  At Sailors Learning, we aim to stay 
                  on top of the latest innovations in learning and
                  incorporate them into our style of teaching for the best
                  experience for our students.
                </div>
              </div>
            </div>
          </div>
          <div className="md:col-span-6 text-gray-800 dark:text-gray-400 border-2 border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-800 rounded-xl p-4 ">
            <div className=" text-gray-800 dark:text-gray-200">
              <p className="font-extrabold text-3xl  pb-2">Artificial Intelligence is Transforming Modern Education</p>
              <p className="mb-3">
                <i>Sanjay Adhikesaven, Abyan Das, Monish Muralicharan, Archit Kumar<br></br></i><br></br>


                Artificial Intelligence (AI) has a pivotal role in many K-12 educational systems, providing benefits for both students teachers. To best utilize AI’s potential, it is key for governments to implement policies conducive to AI’s adoption within classrooms. We discuss the benefits and limitations AI provides to education as well as the steps needed to responsible use AI in education in the future. 

                <br></br><b>Published as Editor’s Pick at Towards Data Science!</b> <br></br><br></br>

                <u>Read now: <a href="https://towardsdatascience.com/artificial-intelligence-is-transforming-modern-education-d95bf8d19acd">towardsdatascience.com</a></u>
              </p>
              
            </div>
          </div>


          <div className="md:col-span-6 text-gray-800 dark:text-gray-400 border-2 border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-800 rounded-xl p-4 ">
            <div className=" text-gray-800 dark:text-gray-200">
              <p className="font-extrabold text-3xl  pb-2">Machine Learning-Based Multivariate Regression Analysis of United States' Educational Outcomes</p>
              <p className="mb-3">
                <i>Sanjay Adhikesaven, Abyan Das, Monish Muralicharan, Archit Kumar<br></br></i><br></br>


                Educational achievement, an important indicator of future success, is at the forefront of American policy-making. Effective policy must target specific factors which have a high impact on student educational outcomes. Our study uses machine learning to show which variables are connected with educational achievement. We evaluate educational achievement with a student’s ELA test score since a strong ELA score allows students to succeed in other areas where reading and writing are required. Using machine learning multivariate regression models to analyze data from over 10,000 counties across the United States, we show that the pupil-teacher ratio in schools, percent of 5-17 year olds that are in poverty, 50/10 income ratio, percent of people unemployed, and percent of students that get free lunch are the top five most important determining factors for a student’s ELA score. These results can be used by policymakers to create effective educational policy targeting these specific factors.<br>
                </br>
                <b>We presented at Elsevier Information Processing and Management Conference 2022.</b><br></br><br></br>


                <u>Read our poster <a href="https://d3ijlhudpq9yjw.cloudfront.net/9cc8a30e-b65c-45df-b1ad-bdc8e0098262.pdf">linked here.</a></u>
              </p>
              
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}