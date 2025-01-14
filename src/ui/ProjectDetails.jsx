import { NavLink } from 'react-router-dom';
import { HiOutlineExternalLink } from 'react-icons/hi';
import { IoLogoGithub } from 'react-icons/io5';
import { motion } from 'framer-motion';
import {
  childVariants,
  grandchildVariants,
  parentVariants,
} from '../helpers/variants';

function ProjectDetails({ project, gradient }) {
  return (
    <div className="md:py-10 w-full">
      <motion.div
        className="py-5 md:py-10 grid justify-items-center space-y-5 "
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={parentVariants}
      >
        <motion.h1
          variants={grandchildVariants}
          className={`text-3xl sm:text-[3.5rem] text-center drop-shadow-lg font-[Raleway] tracking-wider font-medium p-1  `}
        >
          {project?.title}
        </motion.h1>
        <motion.p
          variants={childVariants}
          className="lg:w-1/2 text-center text-sm px-2 md:text-lg text-secondary/90 tracking-wide"
        >
          {project?.description}
        </motion.p>

        <ViewBtns project={project} />
      </motion.div>

      {/* HighLights */}
      <Highlights project={project} gradient={gradient} />

      {/* Tech Stacks */}
      <ProjectTechStack project={project} gradient={gradient} />

      {/* Footer btns */}
      <motion.footer
        variants={parentVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-10"
      >
        <div className="flex justify-center md:justify-between flex-wrap items-end w-full gap-5 px-5">
          <motion.h3
            variants={childVariants}
            className="text-3xl font-semibold text-neutral/90 "
          >
            {project?.title}
            {'  '}
          </motion.h3>
          <ViewBtns project={project} />
        </div>
      </motion.footer>
    </div>
  );
}

function ViewBtns({ project }) {
  return (
    <motion.div
      className="text-md flex items-center gap-2 justify-between md:justify-center "
      variants={childVariants}
    >
      <NavLink to={project?.gitUrl} target="_blank">
        <motion.button
          variants={childVariants}
          className="flex items-center justify-center md:gap-2 bg-accent/95 px-2 py-1.5 gap-0.5 md:p-2 font-medium tracking-wider text-white rounded-lg"
        >
          <IoLogoGithub size={18} />
          <span>View code</span>
        </motion.button>
      </NavLink>
      <NavLink to={project?.url} target="_blank">
        <motion.button
          variants={childVariants}
          className="group flex items-center justify-center md:gap-2 bg-accent px-2 py-1.5 gap-0.5 md:p-2 font-medium tracking-wider text-white rounded-lg"
        >
          <span className="">Open live site</span>
          <HiOutlineExternalLink
            className="group-hover:scale-105 group-hover:translate-x-1 group-hover:transition-transform duration-300 ease-out"
            size={18}
          />
        </motion.button>
      </NavLink>
    </motion.div>
  );
}

function Highlights({ project, gradient }) {
  return (
    <motion.div
      variants={parentVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="py-5 md:py-10 scroll-smooth"
    >
      <motion.h1
        variants={grandchildVariants}
        className="text-4xl font-semibold md:font-normal md:text-[2.75rem] relative text-center py-5 md:py-10 text-neutral/90 "
      >
        A Few highlights
      </motion.h1>
      {project?.features.map((feature, i) => (
        <motion.div
          variants={parentVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-10 md:gap-1 overflow-hidden py-5"
          key={i}
        >
          <motion.div
            variants={childVariants}
            className={`${
              (i + 1) % 2 === 0 ? 'md:order-2' : 'md:order-1'
            } p-3 md:p-10 space-y-2 md:space-y-5 place-content-center`}
          >
            <motion.h1
              variants={grandchildVariants}
              className="text-2xl md:text-[2rem] font-semibold text-secondary"
            >
              {feature?.heading}
            </motion.h1>
            <motion.p
              variants={grandchildVariants}
              className="text-md md:text-lg text-neutral/75 text-left"
            >
              {feature?.desc}
            </motion.p>
          </motion.div>
          <motion.div
            className={`max-[520px]:h-56 sm:h-80 w-full lg:h-96 rounded-2xl ${gradient} ${
              (i + 1) % 2 === 0
                ? 'md:order-1 -translate-x-10 md:-translate-x-5 bg-gradient-to-tr'
                : 'md:order-2  translate-x-10 md:translate-x-20 bg-gradient-to-tl '
            } `}
          >
            <motion.img
              src={feature?.image}
              className={`w-full h-full p-3 md:p-4 xl:p-4 ${
                feature?.isMobileScreen ? 'object-contain' : 'object-fill'
              }`}
              alt={feature?.heading}
            />
          </motion.div>
        </motion.div>
      ))}
    </motion.div>
  );
}

function ProjectTechStack({ project, gradient }) {
  return (
    <div className="z-50 mx-2">
      <h1 className="text-4xl font-semibold md:font-normal md:text-[2.75rem] text-center py-5 md:py-10 text-neutral/90 ">
        Tech Stack
      </h1>
      <motion.div
        variants={parentVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className={`grid lg:grid-cols-2 gap-4 md:p-5 px-3 py-5 bg-gradient-to-tl ${gradient} rounded-2xl`}
      >
        <motion.div
          className={`relative h-full content-center space-y-2`}
          variants={childVariants}
        >
          <h2 className="text-center text-2xl text-primary">Stack</h2>
          <motion.div className="grid grid-cols-2 gap-3 md:p-4   ">
            {project?.techStack.map((tech, i) => (
              <motion.div key={i} variants={grandchildVariants}>
                <TechCard tech={tech} />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
        <motion.div
          variants={childVariants}
          className="space-y-2 col-span-1 text-primary"
        >
          <motion.h1 variants={childVariants} className="text-2xl">
            Stack Overview
          </motion.h1>
          <motion.p
            variants={grandchildVariants}
            className="text-sm sm:text-md text-primary/80"
          >
            {project?.stackOverview}
          </motion.p>
        </motion.div>
      </motion.div>
    </div>
  );
}

function TechCard({ tech }) {
  return (
    <motion.div
      className={`w-full py-2 md:h-20 rounded-lg flex items-center justify-center relative overflow-hidden bg-neutral/90`}
    >
      <h2 className="text-lg md:text-2xl font-extrabold z-10 text-accent text-center">
        {tech}
      </h2>
    </motion.div>
  );
}

export default ProjectDetails;
