/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import Project from './ui/Project';

const Projects = ({ projects }: any) => {


    return (
        <section className='py-[60px] lg:py-[80px]'>
            <div className=' max-w-[1170px] mx-auto px-5 xl:px-0' id='projects' >
                <div className='font-bold text-center rounded  mb-5 md:mb-10 '>


                    <div className="text-3xl  md:text-[48px] leading-[58px] text-white">My <span className='bg-gradient-to-r text-transparent bg-clip-text from-[#42A6E3] to-[#FF56F6]  font-primary hover:from-accent hover:to-[#42A6E3]'>Projects</span> </div>


                </div>

                <div className='grid sm:grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-7  ]' >
                    {
                        projects.map((project: any) => <Project key={project.id} project={project}></Project>)
                    }

                </div>

            </div>


        </section>
    );
};

export default Projects;