import { NavLink } from 'react-router-dom';
import { HiOutlineExternalLink } from 'react-icons/hi';

import Modal from '../Context/Modal';
import ProjectDetails from './ProjectDetails';
import { projectData } from '../data/projectData/data';

function ProjectItems({ img, title, data, handleDetails, details, className }) {
  const project = projectData.find((item) => item.title === details.title);

  return (
    <div
      className={
        className +
        ' my-3 mx-2 shadow-xl rounded-xl hover:shadow-xl hover:shadow-gray-600  '
      }
    >
      <div
        className="w-full md:w-[35rem] lg:w-full xl:w-full h-full grid grid-rows-[1fr_auto_auto] place-items-center bg-gray-200 gap-2  p-5 rounded-xl "
        onClick={() => handleDetails(data)}
      >
        <Modal.Open opensWindowName="project-details">
          <div className=" md:h-64 lg:h-56 xl:h-80 md:w-full xl:w-[35rem] bg-gray-200 cursor-pointer  ">
            <img
              src={img}
              alt={title}
              className=" md:p-2 xl:p-0 h-full w-full "
            />
          </div>
        </Modal.Open>
        <Modal.Open opensWindowName="project-details">
          <div className="px-2 text-left grid cursor-pointer">
            <h2 className="xl:text-xl font-semibold uppercase pt-3 tracking-widest  ">
              {title}
            </h2>
          </div>
        </Modal.Open>
        <div className="flex items-center pt-5 gap-5 lg:text-lg">
          <Modal.Open opensWindowName="project-details">
            <button className=" uppercase text-sm font-semibold tracking-widest">
              View Details
            </button>
          </Modal.Open>
          <div className="h-4 w-0.5 bg-gray-400"></div>
          <NavLink to={project?.url} target="_blank">
            <button
              className="flex items-center gap-2 uppercase text-sm font-semibold tracking-widest"
              onClick={() => handleDetails(data)}
            >
              View Site <HiOutlineExternalLink />{' '}
            </button>
          </NavLink>
        </div>
      </div>
      <Modal.Window name="project-details">
        <ProjectDetails project={project} />
      </Modal.Window>
    </div>
  );
}

export default ProjectItems;
