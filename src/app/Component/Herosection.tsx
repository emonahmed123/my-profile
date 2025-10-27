/* eslint-disable react/no-unescaped-entities */
"use client";

import Image from "next/image";
import {
  FaFacebookSquare,
  FaGithub,
  FaJsSquare,
  FaReact,
} from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { RiNextjsFill } from "react-icons/ri";
import TypewriterComponent from "typewriter-effect";
import bg from "../../assets/my-bg2.png";

const Herosection = () => {
  return (
    <section id="home" className="py-[60px] md:py-[80px]">
      <div className=" shink-0  max-w-[1170px] mx-auto flex flex-col-reverse md:flex-row justify-between gap-5 px-5 xl:px-0 ">
        <div className="w-full lg:w-2/3">
          <div>
            <p className="uppercase text-white text-left text-xs lg:text-sm font-blod">
              Welcome To My World
            </p>
            <h1 className="uppercase font-semibold py-7 text-left  text-[30px] leading-[40px] md:text-[48px] md:leading-[58px]  lg:text-[60px] lg:leading-[70px] font-poppe text-white">
              Hi, I'm{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400  font-primary hover:from-accent hover:to-[#42A6E3]">
                EMON AHMED
              </span>
              <br />
              <span className="text-2xl  md:text-4xl">
                <TypewriterComponent
                  options={{
                    strings: [
                      "JUNIOR WEBDEVELOPER",
                      "REACT DEVELOPER",
                      "MERN STACK DEVELOPER",
                    ],
                    deleteSpeed: 50,
                    // pauseFor: 500,
                    autoStart: true,
                    loop: true,
                  }}
                />
              </span>
            </h1>
            <p className="text-left   max-w-[500px] text-para mb-5 md:mb-10  ">
              Hi I am a Junior developer And I can build your website as you
              want.
              <br />
              <br />
              Creative problem solver with demonstrated ability to work on
              multiple projects simultaneously.Positive driven and confident
              individual with an apt for learning new technology.
            </p>
            <div className="flex gap-5 mb-5  md:mb-10">
              <a
                href="https://drive.google.com/file/d/1ZNZpsgB_vYQoDCdxoDiFX72aNy6bP0J-/view?usp=drive_link"
                target="_blank"
                rel="noreferrer"
                className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg hover:from-purple-600 hover:to-pink-600 btn_only_transform font-poppe font-semibold text-white  "
              >
                My Resume
              </a>

              <a
                href="mailto:imonshomon@gmail.com"
                className="px-8 py-3 text-white  font-poppe font-semibold border border-purple-400 rounded-lg hover:bg-purple-400/10 transition-all"
              >
                Hire Me
              </a>
            </div>

            <div className=" flex flex-col sm:flex-row gap-10 lg:gap-0 justify-between pr-0 lg:pr-36">
              <div>
                <h5 className="text-left mb-3 uppercase tracking-wide text-white font-semibold">
                  Find Me
                </h5>
                <div className="flex gap-5">
                  <a
                    href="https://github.com/emonahmed123"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="w-10 h-10 bg-purple-600/20 rounded flex items-center justify-center hover:bg-purple-500 transition-colors cursor-pointer text-white btn_only_transform">
                      <FaGithub />
                    </div>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/emon-ahmed123/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="w-10 h-10 bg-purple-600/20 rounded flex items-center justify-center hover:bg-purple-500 transition-colors cursor-pointer text-white btn_only_transform">
                      <FaLinkedin />
                    </div>
                  </a>
                  <a
                    href="https://www.facebook.com/profile.php?id=100009847200102"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="w-10 h-10 bg-purple-600/20 rounded flex items-center justify-center hover:bg-purple-500 transition-colors cursor-pointer text-white btn_only_transform">
                      {" "}
                      <FaFacebookSquare />
                    </div>
                  </a>
                </div>
              </div>
              <div>
                <h5 className="text-left text-white mb-3 uppercase tracking-wide font-poppe font-semibold">
                  Best skills
                </h5>
                <div className="flex gap-5 ">
                  <div className="w-10 h-10 bg-purple-600/20 rounded flex items-center justify-center hover:bg-purple-500 transition-colors cursor-pointer text-white btn_only_transform">
                    <FaReact />
                  </div>
                  <div className="w-10 h-10 bg-purple-600/20 rounded flex items-center justify-center hover:bg-purple-500 transition-colors cursor-pointer text-white btn_only_transform">
                    <FaJsSquare />
                  </div>
                  <div className="w-10 h-10 bg-purple-600/20 rounded flex items-center justify-center hover:bg-purple-500 transition-colors cursor-pointer text-white btn_only_transform">
                    <RiNextjsFill />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-[10px] w-full sm:w-5/6 md:w-[28rem] lg:w-[32rem] shink-0   h-[30rem] lg:h-[30rem]  flex justify-center items-center  relative lg:mt-0 cursor-pointer bg-gradient-to-br from-purple-500/20 to-pink-500/20  backdrop-blur-sm border border-purple-400/20 ">
          <Image
            className="w-full h-[560px] md:h-[590px] absolute  bottom-0 right-2  left-1 z-20"
            src={bg}
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default Herosection;
