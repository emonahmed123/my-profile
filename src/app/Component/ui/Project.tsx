/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */

import React from 'react';
import { FaRegCircleDot } from "react-icons/fa6";
import './Projects.css'
import Link from 'next/link';
import { MdLiveTv } from 'react-icons/md';
const Project = ({ project }: any) => {

  const { live, image, _id } = project;


  return (
    <>

      <div className="portfolio-card p-[0.9rem]  md:p-[2rem] max-w-[375px] text-accent hover:text-white border  border-[#A740CD]" >
        <div className="text-left  image-content">
          <div className=" flex justify-center">
            <img className='w-[300px] h-[200px]   md:w-[500px] md:h-[300px]' src={image} alt="project" />
          </div>

          <div className="button-content flex text-white justify-between mt-5">
            <Link href={`/projects/${_id}`}
              className=" font-poppe gap-x-1   px-2 py-2 rounded-[5px] flex justify-center items-center btn text-white  text-[10px] lg:text-[12px]"

            >
              <FaRegCircleDot />
              View Details
            </Link>
            <a
              href={live}
              target="_blank"
              rel="noreferrer"
              className="font-poppe gap-x-1  px-2 py-2 rounded-[5px] flex justify-center items-center btn text-white  text-[10px] lg:text-[12px]"
            >

              <MdLiveTv />

              View Live
            </a>
          </div>
        </div>
      </div>





    </>
  );
};

export default Project;