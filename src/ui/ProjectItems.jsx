import ProjectDetails from './ProjectDetails';
import { projectData } from '../data/projectData';
import { motion } from 'framer-motion';
import { useMouseMove } from '../hooks/mouseMoveAnimation';
import { useState } from 'react';
import Modal from './Modal';

function ProjectItems({ data, bgGradient }) {
  const [details, setDetails] = useState({});

  function handleDetails(detail) {
    setDetails(detail);
  }

  const { ref, transform, handleMouseLeave, handleMouseMove } = useMouseMove();

  const [isModalOpen, setIsModalOpen] = useState(false);
  function toggleModal() {
    setIsModalOpen(!isModalOpen);
  }

  const { coverImage, title } = data || {};
  const project = projectData.find((item) => item.title === details.title);
  return (
    <>
      <motion.div
        className={`rounded-2xl ${bgGradient} bg-gradient-to-tr relative group cursor-pointer`}
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transformStyle: 'preserve-3d',
          transform,
        }}
        onClick={() => {
          toggleModal();
          handleDetails(data);
        }}
      >
        <div className="w-full h-fit md:w-[35rem] lg:w-[38rem] rounded-2xl shadow-none  ">
          <img
            src={coverImage}
            alt={title}
            className=" w-full h-full object-cover p-5 pb-0 md:p-8 md:pb-0 rounded-none group-hover:p-0 group-hover:pb-0 group-hover:rounded-2xl transition-all duration-150"
          />
        </div>

        <h4 className="p-4 text-lg md:text-xl font-medium text-center text-white">
          {title}
        </h4>
      </motion.div>
      <Modal closeModal={toggleModal} isModalOpen={isModalOpen}>
        <ProjectDetails project={project} gradient={bgGradient} />
      </Modal>
    </>
  );
}

export default ProjectItems;
