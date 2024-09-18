import React from "react";
import ServiceCard from "./ServiceCard";
import { FaLayerGroup, FaServer } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { FaLaptopCode } from "react-icons/fa";

const Services = () => {
  const serviceIProvide = [
    {
      id: 1,
      title: "Mern Development",
      description:
        "I'm a MERN Developer.I can build your full stack website with MongoDB, ExpressJS, ReactJS, NodeJS. I can be your Mern Developer",
      icon: (
        <>
          <FaLayerGroup />
        </>
      ),
    },
    {
      id: 2,
      title: "Frontend Development",
      description:
        "I'm A Frontend specialist. I have created many Website With Fancy Frontend. I can be your frontend Engineer.",
      icon: (
        <>
          <FaLaptopCode />
        </>
      ),
    },
    {
      id: 3,
      title: "Backend Development",
      description:
        "I'm A Backend Developer. I have created many projects Server Side Api Endpoint. I can be your Backend Developer.",
      icon: (
        <>
          <FaServer />
        </>
      ),
    },
    {
      id: 4,
      title: "React Development",
      description:
        "I'm A React Developer.I have created many single page application using React.JS. I can be your React Developer.",
      icon: (
        <>
          <FaReact />
        </>
      ),
    },
    {
      id: 5,
      title: "Nextjs Development",
      description:
        "I'm a Nextjs Developer. I have created many website using Nextjs. I can be your Javascript Developer.",
      icon: (
        <>
          <RiNextjsFill />
        </>
      ),
    },
  ];

  return (


    <section id='Service' className="py-[60px] lg:py-[80px]">


      <div id="services" className="max-w-[1170px] mx-auto px-5 xl:px-0  ">
        <div className="mb-5 md:mb-10">
          <h2 className="text-3xl  mb-2 font-bold uppercase text-center text-white">Ser<span className="bg-gradient-to-r text-transparent bg-clip-text from-[#42A6E3] to-[#FF56F6]  font-primary hover:from-accent hover:to-[#42A6E3] ">vices</span></h2>
          <p className=" font-bold   text-white text-5xl   text-center">
            What  I  Do
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-2">
          {serviceIProvide.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>

  );
};

export default Services;