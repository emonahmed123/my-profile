/* eslint-disable @typescript-eslint/no-explicit-any */
import { FaGithub } from "react-icons/fa";
import { MdLiveTv } from "react-icons/md";
import "../../Component/ui/Projects.css";
const ProjectsDetails = async ({ params }: { params: any }) => {
  const res = await fetch(
    `https://sports-facility-booking-platform-sable.vercel.app/api/slots/project/${params.id}`
  );
  // console.log(params)
  const project = await res.json();
  const projects = project?.data;
  return (
    <section className="py-[60px]  lg:py-[80px]">
      <div className="max-w-[1170px] mx-auto px-5 xl:px-0">
        <div>
          <div className="inside-detail flex flex-col lg:flex-row justify-center items-start gap-8 lg:h-[500px] text-left mb-6 font-poppe bg-gradient-to-r from-[#4E2CD7]  to-[#4C205D]">
            <div className="   image-detail w-full h-80 lg:w-1/2 lg:h-full rounded-xl overflow-hidden">
              <img src={projects?.image} alt="" />
            </div>
            <div className="w-full lg:w-1/2 flex flex-col h-96 justify-center">
              <div>
                <h2 className=" font-bold text-xl my-4 text-white">
                  {projects?.name}
                </h2>
                <div className="my-5">
                  <h3 className=" text-secondary mb-2 ">Project Overview</h3>

                  <p className="text-[12px] italic">{projects?.description}</p>
                </div>
                <div className="my-5">
                  <h3 className=" text-secondary mb-2">Technology used</h3>
                  <div className="flex flex-wrap gap-4 text-para tracking-tighter text-[12px]">
                    <p className="tracking-tighter ">
                      {" "}
                      {projects?.tecnology?.split(",").join(" , ")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" flex justify-center">
            <div className="flex gap-5">
              {projects.server && (
                <a
                  className="bg-gradient-to-r from-[#4E2CD7]  to-[#4C205D] flex gap-2 px-5 py-3 text-white font-semibold rounded-[9px] items-center"
                  href={projects?.server}
                  target="_blank"
                  rel="noreferrer"
                >
                  Server
                  <div>
                    <FaGithub />
                  </div>
                </a>
              )}
              <a
                className="bg-gradient-to-r from-[#4E2CD7]  to-[#4C205D] px-5 py-3 text-white font-semibold rounded-[9px] flex gap-2 items-center"
                href={projects?.client}
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                Client
                <div>
                  <FaGithub />
                </div>
              </a>
              <a
                className="bg-gradient-to-r from-[#4E2CD7]  to-[#4C205D] flex gap-2 px-5 py-3 text-white font-semibold rounded-[9px]  items-center"
                href={projects?.live}
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                Live
                <div>
                  <MdLiveTv />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsDetails;
