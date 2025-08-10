const About = () => {
  return (
    <section className="py-[60px] md:py-[80px]">
      <div className="max-w-[1170px] mx-auto  px-5 xl:px">
        <h2 className="text-3xl text-center font-bold text-white mb-5 md:mb-10 ">
          ABOUT MY
          <span className="bg-gradient-to-r text-transparent bg-clip-text from-[#42A6E3] to-[#FF56F6]  font-primary hover:from-accent hover:to-[#42A6E3]">
            SEIF
          </span>
        </h2>
        <div className="max-w-[800px] h-full from-[#0d1224] border-[#1b2c68a0] relative rounded-lg border bg-gradient-to-r to-[#0a0d37] mx-auto">
          <div className="flex flex-row">
            <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
            <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
          </div>
          <div className="px-4 lg:px-8 py-5">
            <div className="flex flex-row space-x-2">
              <div className="h-3 w-3 rounded-full bg-red-500"></div>
              <div className="h-3 w-3 rounded-full bg-orange-400"></div>
              <div className="h-3 w-3 rounded-full bg-green-400"></div>
            </div>
          </div>
          <div className="overflow-hidden border-t-[2px] border-indigo-900 px-4 lg:px-8 py-4 lg:py-8">
            <code className="font-mono text-xs md:text-sm lg:text-base">
              <div className="blink">
                <span className="mr-2 text-pink-400">const</span>
                <span className="mr-2 text-violet-400">Emon</span>
                <span className="mr-2 text-pink-400">=</span>
                <span className="text-gray-400">{"{"}</span>
              </div>
              <div className="ml-4 lg:ml-8 mr-2">
                <span className=" text-white">Description:</span>
                <span className="text-gray-400">{`'`}</span>
                <span className="text-green-400 ">
                  I’m Emon, a passionate FullStack Developer with solid
                  experience working with JavaScript,TypeScript, React, Next.js,
                  Node.js, Express, and MongoDB,Mongoose . Over the past six
                  months, I’ve completed multiple projects and internships where
                  I honed my skills in building scalable, efficient web
                  applications. I enjoy writing clean, maintainable code and
                  continuously learning new technologies to improve my craft. My
                  goal is to become a senior full-stack developer within the
                  next five years by solving real-world problems and
                  contributing to impactful projects. Besides coding, I’m
                  interested in playing badminton, going on bike tours, and
                  exploring new challenges in web development.
                </span>
                <span className="text-gray-400">{`',`}</span>
              </div>

              <div>
                <span className="text-gray-400">{`};`}</span>
              </div>
            </code>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
