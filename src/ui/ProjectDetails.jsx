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
          className={`text-3xl sm:text-[3.2rem] xl:text-[3.5rem] 2xl:text-[7rem] text-center drop-shadow-lg font-[Raleway] tracking-wider font-medium max-sm:pt-5 p-1 text-neutral`}
        >
          {project?.title}
        </motion.h1>
        <motion.p
          variants={childVariants}
          className="lg:w-1/2 text-center text-sm 2xl:text-2xl px-2 md:text-md text-secondary/90 tracking-wide"
        >
          {project?.description}
        </motion.p>

        <CTABtns project={project} />
      </motion.div>

      {/* HighLights */}
      <Features project={project} gradient={project?.gradient} />

      {/* Tech Stacks */}
      <TechStack techStack={project?.techStacks} gradient={project?.gradient} />

      <div
        className={`grid lg:grid-cols-2 gap-4 md:px-5 px-3  ${project?.gradient} rounded-2xl mx-2 sm:mx-4 my-10 py-5 scroll-smooth pb-10 border-2`}
      >
        <OtherFeatures otherFeatures={project?.otherFeatures || []} />
        <MyRole role={project?.myRole || []} />
      </div>
      {/* Footer btns */}
      <motion.footer
        variants={parentVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="sm:py-10 max-sm:pb-10"
      >
        <div className="flex justify-center md:justify-between flex-wrap items-end w-full gap-5 px-3">
          <motion.h3
            variants={childVariants}
            className="text-2xl font-medium sm:font-semibold text-neutral/90 "
          >
            {project?.title}
            {'  '}
          </motion.h3>
          <CTABtns project={project} />
        </div>
      </motion.footer>
    </div>
  );
}

function CTABtns({ project }) {
  return (
    <motion.div
      className="text-md flex items-center gap-2 justify-between md:justify-center "
      variants={childVariants}
    >
      <NavLink to={project?.gitUrl} target="_blank">
        <motion.button
          variants={childVariants}
          className="flex items-center justify-center md:gap-2 bg-accent/95 px-2 py-1.5 gap-0.5 md:p-2 font-medium tracking-wider text-white rounded-lg text-sm sm:text-md"
        >
          <IoLogoGithub />
          <span className="">View code</span>
        </motion.button>
      </NavLink>
      <NavLink to={project?.url} target="_blank">
        <motion.button
          variants={childVariants}
          className="group flex items-center justify-center md:gap-2 bg-accent px-2 py-1.5 gap-0.5 md:p-2 font-medium tracking-wider text-white rounded-lg text-sm sm:text-md"
        >
          <span className="">Open live site</span>
          <HiOutlineExternalLink
            className="group-hover:scale-105 group-hover:translate-x-1 group-hover:transition-transform duration-300 ease-out"
            // size={18}
          />
        </motion.button>
      </NavLink>
    </motion.div>
  );
}

function Features({ project, gradient }) {
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
        className="text-3xl md:text-[2.5rem] xl:text-[2.75rem] relative text-center py-5 lg:py-10 text-neutral/95 drop-shadow-2xl"
      >
        A Few highlights
      </motion.h1>
      {project?.features.map((feature, i) => (
        <motion.div
          variants={parentVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-3 md:gap-1 overflow-hidden py-2 lg:py-5"
          key={i}
        >
          <motion.div
            variants={childVariants}
            className={`${
              (i + 1) % 2 === 0 ? 'lg:order-2' : 'lg:order-1'
            } p-3 md:p-10 space-y-2 md:space-y-5 place-content-center`}
          >
            <motion.h1
              variants={grandchildVariants}
              className="text-xl sm:text-2xl md:text-[1.8rem] lg:text-[2rem] font-normal md:font-medium text-secondary drop-shadow-md"
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
            className={`h-full max-[345px]:h-55 max-[550px]:h-60 max-[640px]:h-75 w-full sm:h-90 lg:h-96 rounded-2xl ${gradient} bg-size-[200%_200%] animate-text-shine bg-radial-[at_0%_100%] ${
              (i + 1) % 2 === 0
                ? 'lg:order-1 -translate-x-10 md:-translate-x-5 bg-linear-to-tr'
                : 'lg:order-2 translate-x-10 md:translate-x-20 bg-linear-to-tl '
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

function TechStack({ techStack, gradient = '' }) {
  return (
    <div className="z-50 mx-2">
      <h1 className="text-3xl md:text-[2.5rem] xl:text-[2.75rem] relative text-center py-5 lg:py-10 text-neutral/95 drop-shadow-2xl">
        Tech Stack
      </h1>
      <div
        className={`grid sm:place-content-center sm:justify-items-center max-md:gap-5 md:px-5 px-3 pt-3 sm:pt-5 rounded-2xl mx-2 py-2 md:py-5 scroll-smooth pb-10 bg-size-[200%_200%] animate-text-shine bg-radial-[at_0%_100%] ${gradient} `}
      >
        {techStack?.map((tech, i) => (
          <motion.div
            variants={parentVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className={`grid gap-2 sm:gap-3 sm:grid-cols-3 w-full space-y-2 md:space-y-4 items-center text-white place-items-center place-content-center sm:place-items-start`}
            key={i}
          >
            <h2 className="text-lg md:text-normal max-[350px]:text-center">
              {tech.part}
            </h2>
            <div className="flex max-sm:justify-center items-center flex-wrap gap-2 sm:col-span-2 max-md:text-sm text-md">
              {tech?.tech?.map((t, i) => (
                <motion.div key={t + '_' + i} variants={grandchildVariants}>
                  <TechCard tech={t} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function TechCard({ tech }) {
  return (
    <motion.div
      className={`w-fit rounded-lg flex items-center relative overflow-hidden px-2 text-center gap-3 bg-gray-200/80 text-black border border-gray-700/50`}
    >
      <div className="w-1 h-1 rounded-full bg-black" />
      <h2 className="z-10 text-center">{tech}</h2>
    </motion.div>
  );
}

function OtherFeatures({ otherFeatures }) {
  return (
    <motion.div
      variants={parentVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <motion.h6
        variants={grandchildVariants}
        className="md:py-10 text-3xl md:text-[2.5rem] xl:text-[2.75rem] relative text-center py-5 lg:py-10 text-neutral/95 drop-shadow-2xl"
      >
        Other Features
      </motion.h6>
      <div className="flex items-center flex-col justify-center">
        <motion.ul className="space-y-1">
          {otherFeatures?.map((feature, i) => (
            <motion.li
              className="flex items-center gap-1.5 "
              key={'other_feature' + i}
            >
              <div className="w-1 h-1 bg-secondary rounded-full" />
              <span className="text-secondary/90 text-md">{feature}</span>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </motion.div>
  );
}

function MyRole({ role = [] }) {
  return (
    <motion.div
      variants={parentVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <motion.h6
        variants={grandchildVariants}
        className="  md:py-10 text-3xl md:text-[2.5rem] xl:text-[2.75rem] relative text-center py-5 lg:py-10 text-neutral/95 drop-shadow-2xl"
      >
        My Role
      </motion.h6>
      <div className="flex items-center flex-col justify-center">
        <motion.ul className="space-y-1">
          {role?.map((r, i) => (
            <motion.li
              className="flex items-center gap-1.5 "
              key={'my_role_' + i}
            >
              <div className="w-1 h-1 bg-secondary rounded-full" />
              <span className="text-secondary/90 text-md">{r}</span>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </motion.div>
  );
}

export default ProjectDetails;
