import { projectData } from '../data/projectData';
import {
  childVariants,
  grandchildVariants,
  parentVariants,
} from '../helpers/variants';
import ProjectItems from './ProjectItems';
import { motion } from 'framer-motion';

const colors = [
  'from-gray-800 via-gray-600 to-gray-500',
  'from-violet-600 via-violet-400 to-cyan-300',
  'from-amber-900 via-cyan-900 to-violet-900',
];

function Projects() {
  return (
    <motion.section
      variants={parentVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      id="work"
      className="w-full section py-2 space-y-5"
    >
      <div className="md:py-20 px-10 p-5">
        <motion.h1 variants={childVariants} className="section_header ">
          <span className="heading">A small selection of my work.</span>
        </motion.h1>
      </div>
      <motion.div
        variants={childVariants}
        className="w-fit flex flex-wrap justify-center gap-10 py-5 "
      >
        {projectData.map((data, i) => (
          <motion.div variants={grandchildVariants} key={i}>
            <ProjectItems data={data} bgGradient={colors[i]} />
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}

export default Projects;
