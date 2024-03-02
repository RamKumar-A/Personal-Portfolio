import { NavLink } from 'react-router-dom';
import { HiOutlineExternalLink } from 'react-icons/hi';
import { IoLogoGithub } from 'react-icons/io5';

import Carousel from './Carousel';

function ProjectDetails({ project }) {
  // const project = projectData.find((item) => item.title === details.title);
  const btnClass =
    'p-2  sm:px-3 flex items-center justify-center gap-2 uppercase sm:tracking-widest bg-gray-200 font-semibold rounded-lg active:translate-y-0.5 shadow-lg border border-gray-200 shadow-gray-400 hover:shadow-lg hover:shadow-gray-500 hover:transition-all duration-300 ease-out ';

  return (
    <>
      {/* <Fade> */}
      <div className="grid sm:grid-rows-[1fr_1fr] lg:grid-rows-none lg:grid-cols-[1fr_1fr] h-full gap-3 justify-items-center place-items-center text-sm font-[Raleway]">
        <div
          className={`w-full h-52 md:h-[24rem] lg:w-[35rem] lg:h-[20rem] xl:w-[55rem] xl:h-[30rem] flex items-center justify-center `}
        >
          <Carousel
            className=" p-1 sm:p-2 w-full h-full shadow-xl shadow-gray-500 "
            images={project?.carouselImg}
          />
        </div>
        <div className="px-3 h-full md:h-[20rem] lg:h-[30rem] xl:h-full lg:overflow-auto">
          <h1 className="text-2xl text-center font-bold pt-3">
            {project?.title}
          </h1>
          <div className="py-2 pb-6">
            <h2 className="text-xl font-medium ">Overview</h2>
            <div className="pt-2">
              <p className=" leading-6 font-[Raleway]">{project?.overview}</p>
              <div className="flex gap-3 pt-5 sm:text-sm items-center justify-center sm:justify-start">
                <NavLink to={project?.gitUrl} target="_blank">
                  <button className={btnClass}>
                    <IoLogoGithub />
                    Github Code
                  </button>
                </NavLink>
                <NavLink to={project?.url} target="_blank">
                  <button className={`${btnClass} group  `}>
                    <span className="">View site</span>
                    <HiOutlineExternalLink className="group-hover:scale-110 group-hover:translate-x-0.5 group-hover:transition-transform duration-300 ease-out" />
                  </button>
                </NavLink>
              </div>
            </div>
          </div>
          <div className="pb-6">
            <h1 className="text-xl font-medium">Tech Stack</h1>
            <div className="flex flex-wrap items-center justify-start font-medium gap-3 p-1 pt-4">
              {project?.techStack.map((tech, i) => (
                <p
                  className="p-1 border border-blue-500 rounded-md bg-blue-700 text-gray-50 px-2 shadow-lg shadow-gray-500"
                  key={i}
                >
                  {tech}
                </p>
              ))}
            </div>
          </div>
          <div className="py-2 pb-6 ">
            <h2 className="text-xl font-medium capitalize ">stack overview</h2>
            <p className=" py-3 tracking-wide leading-6">
              {project?.stackOverview}
            </p>
          </div>
        </div>
      </div>
      {/* </Fade> */}
    </>
  );
}

export default ProjectDetails;

/* <img
            src={zenlist}
            alt="zenlist"
            className="object-contain p-1 sm:p-2 w-full h-full"
          /> */
