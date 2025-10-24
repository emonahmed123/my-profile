const ExperienceData = [
  {
    id: 1,
    position: "Frontend Developer Intern",
    company: "UiHut",
    year: "September 2023 - December 2023",
    description:
      "Implemented UI optimization, clean code, and caching strategies on every single theme, resulting in lightning-fast loading times",
  },
  {
    id: 2,
    position: "Theme Developer",
    company: "SwipePages",
    year: "May 2023 - August 2023",
    description:
      "Worked collaboratively with Figma designers to adapt complex elements and refine landing page designs for optimal implementation within SwipePages drag-and-drop builder",
  },
];

const Experience = () => {
  return (
    <section className="py-[60px] md:py-[80px] font-poppe" id="experience">
      <div className="max-w-[1170px] px-5 xl:px0 mx-auto">
        <h2 className="text-3xl pb-5 text-center font-bold text-white">
          MY{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
            EXPERIENCE
          </span>{" "}
        </h2>
        <div className="grid grid-cols-1 gap-5">
          {ExperienceData.map((exp) => (
            <div
              key={exp.id}
              className="w-full border px-4 py-4 rounded-[9px] border-purple-400"
            >
              <h2 className="text-[20px] leading-[30px] font-semibold text-white">
                {exp?.position}
              </h2>
              <h3 className="text-[18px] leading-[30px] text-[#d8d8d8]">
                @{exp.company}
              </h3>
              <p className="text-[15px] leading-[30px] text-[#d8d8d8]">
                {exp.year}
              </p>

              <p className="text-[12px] leading-[20px]  text-[#d8d8d8]    tracking-[00.1em]">
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
