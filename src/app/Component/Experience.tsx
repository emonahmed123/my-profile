const Experience = [
  {
    id: 1,
    position: "Frontend Developer Intern",
    company: "Ui Hut",
    year: "September 2023 - December 2023",
    Description:
      "Implemented UI optimization, clean code, and caching strategies on every single theme, resulting in lightning-fast loadingtimes",
  },
];

const Experience = () => {
  return (
    <section className="py-[60px] md:py-[80px]">
      <div className="max-w-[1170px] px-5 xl:px0 mx-auto">
        <div className="grid grid-cols-1 gap-2">
          <div>
            <h2 className="text-[24px] leading-[34px]">Postion</h2>
            <h3 className="text-[20px] leading-[30px]">company Name</h3>
            <p className="text-[16px] leading-[26px]">Year</p>

            <p className="text-[14px] leading-[24px]">Description</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
