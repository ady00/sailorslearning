import "../App.css";
import React from "react";

export default function Profile(props) {
  return (
    <div role="listitem" className="flex relative mt-4 mb-4 w-full">
      <div className="rounded-2xl overflow-hidden shadow-md bg-white dark:bg-gray-800">
        <div className="px-6 mt-7 overflow-auto">
          <h1 className=" text-gray-800 dark:text-slate-100 text-2xl font-extrabold text-center mb-1">
            {props.member.name}
          </h1>
          <p className="text-gray-800 dark:text-gray-300  font-semibold  text-md text-center">
            {props.member.role}
          </p>
          <div className = "my-2 text-center">
            {props.member.subjects && props.member.subjects.length > 0 && (
              <p className = "text-gray-800 dark:text-gray-300"><span className = "text-gray-800 dark:text-gray-300  font-semibold text-md">
                Subjects: </span>{props.member.subjects.map(subject => subject).join(', ')}</p>
            )}
          </div>
          <div className="bg-gray-50 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-base rounded-lg border dark:border-gray-700 overflow-hidden my-6">
            <p className="shadow-inner max-h-64 overflow-auto pt-3 font-normal pb-6  px-5 scrollbar">
            {props.member.bio}
            </p>
          </div>
          {/* <div className="w-full flex self-end justify-center inset-x-0 bottom-0  pt-5 pb-5">
          <a href="javascript:void(0)" className="mx-5">
            <div aria-label="Github" role="img">
              <img
                src="https://tuk-cdn.s3.amazonaws.com/can-uploader/gray-bg-with-description-svg1.svg"
                alt="github"
              />
            </div>
          </a>
          <a href="javascript:void(0)" className="mx-5">
            <div aria-label="Twitter" role="img">
              <img
                src="https://tuk-cdn.s3.amazonaws.com/can-uploader/gray-bg-with-description-svg2.svg"
                alt="twitter"
              />
            </div>
          </a>
          <a href="javascript:void(0)" className="mx-5">
            <div aria-label="Instagram" role="img">
              <img
                src="https://tuk-cdn.s3.amazonaws.com/can-uploader/gray-bg-with-description-svg3.svg"
                alt="instagram"
              />
            </div>
          </a>
        </div> */}
        </div>
      </div>
    </div>
  );
}
