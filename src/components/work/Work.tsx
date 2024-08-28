"use client";
import React from "react";
import { workData, educationData } from "./index";
import Image from "next/image";

const Work = () => {
  return (
    <div className="custom-screen p-8">
      <div className="flex flex-col md:flex-col max-w-3xl mx-auto ">
        <h1 className="text-2xl font-bold">Work Experience</h1>
        <p className="text-gray-400 mt-2">My professional work journey.</p>
        <div className="mt-8 mb-10">
          {workData.map((job, index) => (
            <div className="group relative flex gap-x-5" key={index}>
              <div className="relative group-last:after:hidden after:absolute after:top-8 after:bottom-2 after:start-4 after:w-px after:-translate-x-[0.5px] after:bg-gray-200">
                <div className="relative z-10 size-8 flex justify-center items-center">
                  {/* <Image
                    className="w-32 sm:w-48 h-full absolute inset-0 object-cover rounded-s-lg"
                    src={job.imageUrl}
                    alt={`${job.company} Image`}
                    height={500}
                    width={300}
                  /> */}
                </div>
              </div>
              <div className="grow pb-8 group-last:pb-0">
                <h3 className="mb-1 text-sm text-gray-600">{job.date}</h3>
                <p className="font-semibold text-md text-gray-800">
                  {job.position}{" "}
                  <span className="text-blue-500 text-md md:text-md">
                    @ {job.company}
                  </span>
                </p>
                <ul className="list-disc ms-6 mt-3 space-y-1.5">
                  {job.achievements.map((achievement, i) => (
                    <li className="ps-1 text-md text-gray-600" key={i}>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col md:flex-col max-w-3xl mx-auto ">
        <h1 className="text-2xl font-bold">Education</h1>
        <div className="grid flex-col md:flex-row mt-8 mb-10 gap-3">
          {educationData.map((edu, index) => (
            <div className="p-4 border border-gray-200 rounded-lg" key={index}>
              {/* {edu.svgIcon} */}

              <h3 className="mb-1 text-sm text-gray-600">{edu.date}</h3>
              <p className="font-semibold text-md text-gray-800">
                {edu.degree}
              </p>
              <p className="mt-1 text-md text-gray-600">{edu.institute}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
