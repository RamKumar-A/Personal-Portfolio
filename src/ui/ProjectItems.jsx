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
        className={`rounded-2xl ${bgGradient} relative group cursor-pointer bg-size-[200%_200%] animate-text-shine text-transparent bg-radial-[at_0%_100%] `}
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
        <div className="w-full h-fit  md:w-[35rem] lg:w-[38rem] rounded-2xl shadow-none">
          <img
            src={coverImage}
            alt={title}
            className="w-full h-full object-cover px-5 pt-5 md:px-8 md:pt-8 rounded-none group-hover:p-1 group-hover:rounded-2xl transition-all duration-150"
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
