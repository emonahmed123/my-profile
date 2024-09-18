/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";

import javascripticon from "../../assets/Skillimgae/javascript.png";
import reactscripticon from "../../assets/Skillimgae/react.png";
import Mongodbicon from "../../assets/Skillimgae/mongodb.png";
import nodejsicon from "../../assets/Skillimgae/node.png";
import html from "../../assets/Skillimgae/html.png";
import css from "../../assets/Skillimgae/css.png";
import fire from "../../assets/Skillimgae/firebase.png";
import Git from "../../assets/Skillimgae/git.png";
import figma from "../../assets/Skillimgae/figma.png";
import redux from "../../assets/Skillimgae/redux.png";
import tailwind from "../../assets/Skillimgae/tailwind.png";
import ts from "../../assets/Skillimgae/ts.png.png";
import Image from "next/image";
// import { motion } from 'framer-motion';
// import './Skill.css'
const Myskills = () => {
    const SKills = [
        {
            id: 1,
            name: "HTML",
            img: html,
        },
        {
            id: 2,
            name: "CSS",
            img: css,
        },
        {
            id: 3,
            name: "Git",
            img: Git,
        },
        {
            id: 4,
            name: "Firebase",
            img: fire,
        },
        {
            id: 5,
            name: "JavaScript",
            img: javascripticon,
        },
        {
            id: 6,
            name: "React ",
            img: reactscripticon,
        },
        {
            id: 7,
            name: "MongDB",
            img: Mongodbicon,
        },

        {
            id: 8,
            name: "Nodejs",
            img: nodejsicon,
        },
        {
            id: 9,
            name: "Figma",
            img: figma,
        },
        {
            id: 10,
            name: "Redux",
            img: redux,
        },
        {
            id: 11,
            name: "Taliwind",
            img: tailwind,
        },
        {
            id: 12,
            name: "TypeScript",
            img: ts,
        },
    ];

    return (
        <section className="py-[60px] lg:py-[80px]">
            <div className="max-w-[1170px] mx-auto px-5 xl:px-0">
                <h2 className="text-3xl pb-5 text-center font-bold text-white">
                    MY{" "}
                    <span className="bg-gradient-to-r text-transparent bg-clip-text from-[#42A6E3] to-[#FF56F6]  font-primary hover:from-accent hover:to-[#42A6E3]">
                        SKILL
                    </span>{" "}
                </h2>

                <div className="grid grid-cols-4 sm:grid-cols-6  gap-3 md:grid-cols-8  lg:grid-cols-9 xl:grid-cols-10 md:gap-5 place-itmes-center justify-items-center">
                    {SKills?.map((skill) => (
                        <div
                            className="w-[80px] lg:w-[100px] border relative top-0   hover:top-[-10px] border-accent px-2 py-2 rounded-[9px] transition-all ease-in-out duration-500  cursor cursor-pointer "
                            key={skill.id}
                        >
                            <div>
                                <Image
                                    width={40}
                                    height={40}
                                    className=" mx-auto mt-2  "
                                    src={skill.img}
                                    alt=""
                                />
                                <div className="card-body">
                                    <h2 className=" text-para font-bold text-center text-[12px] leading-[22px] lg:text-[16px] lg:leading-[26px]">
                                        {skill.name}
                                    </h2>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Myskills;
