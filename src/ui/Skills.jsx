import {
  IoLogoJavascript,
  IoLogoReact,
  IoLogoGithub,
  IoLogoNodejs,
} from 'react-icons/io5';
import { IoLogoHtml5 } from 'react-icons/io5';
import { IoLogoCss3 } from 'react-icons/io5';
import {
  SiRedux,
  SiTailwindcss,
  // SiStyledcomponents,
  // SiReactrouter,
  SiReactquery,
  SiMui,
  SiSupabase,
  SiMongodb,
  SiExpress,
  SiAxios,
} from 'react-icons/si';
import { TbCloudCog } from 'react-icons/tb';

import { motion } from 'framer-motion';

import SkillCard from './SkillCard';
import {
  childVariants,
  grandchildVariants,
  parentVariants,
} from '../helpers/variants';

const frontendData = [
  {
    icon: <IoLogoJavascript />,
    title: 'javascript',
    iconColor: '#facc15',
  },
  {
    icon: <IoLogoReact />,
    title: 'react',
    iconColor: '#38bdf8',
  },
  {
    icon: <IoLogoHtml5 />,
    title: 'HTML',
    iconColor: '#ea580c',
  },
  {
    icon: <IoLogoCss3 />,
    title: 'CSS',
    iconColor: '#254bdd',
  },
  {
    icon: <SiRedux />,
    title: 'redux',
    iconColor: '#764abc',
  },
  {
    icon: <SiReactquery />,
    title: 'react query',
    iconColor: '#000',
  },

  {
    icon: <SiTailwindcss />,
    title: 'tailwind CSS',
    iconColor: '#26b5f2',
  },
  {
    icon: <SiMui />,
    title: 'material ui',
    iconColor: '#016f9e',
  },
];

const backendData = [
  {
    icon: <IoLogoNodejs />,
    title: 'node js',
    iconColor: '#089756',
  },
  {
    icon: <SiExpress />,
    title: 'express js',
    iconColor: '#002f1a',
  },
  {
    icon: <SiMongodb />,
    title: 'mongoDb',
    iconColor: '#058e51',
  },
  {
    icon: <SiSupabase />,
    title: 'supabase',
    iconColor: '#40D08F',
  },
  {
    icon: <TbCloudCog />,
    title: 'RESTful API',
    iconColor: '#00c0ec',
  },
];

const toolsData = [
  {
    icon: <IoLogoGithub />,
    title: 'git',
    iconColor: '#0d1117',
  },

  {
    icon: <SiAxios />,
    title: 'axios',
    iconColor: '#4a06af',
  },
];

function Skills() {
  return (
    <motion.section
      id="skills"
      variants={parentVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ delayChildren: 0.01, staggerChildren: 0.01 }}
      className="grid items-center   place-content-center space-y-5 container"
    >
      <div className="md:py-20 px-10 p-5">
        <motion.h1 variants={childVariants} className="section_header ">
          <span className="heading">Skills Snapshot</span>
        </motion.h1>
      </div>
      <div className="space-y-5 flex flex-col  ">
        <div className="flex flex-col  items-center justify-center gap-5">
          <div className=" text-xl font-semibold p-4 ">Frontend</div>
          <div className="flex items-center  gap-4 flex-wrap w-[80%] justify-center">
            {frontendData.map((data) => (
              <motion.div variants={grandchildVariants} key={data.title}>
                <SkillCard data={data} />
              </motion.div>
            ))}
          </div>
        </div>
        <div className="flex flex-col  items-center justify-center gap-5">
          <div className="text-xl font-semibold p-4">Backend</div>
          <div className="flex items-center  gap-4 flex-wrap w-[80%] justify-center">
            {backendData.map((data) => (
              <motion.div variants={grandchildVariants} key={data.title}>
                <SkillCard data={data} />
              </motion.div>
            ))}
          </div>
        </div>
        <div className="flex flex-col  items-center justify-center gap-5">
          <div className="text-xl font-semibold p-4">Tools</div>
          <div className="flex items-center  gap-4 flex-wrap w-[80%] justify-center">
            {toolsData.map((data) => (
              <motion.div variants={grandchildVariants} key={data.title}>
                <SkillCard data={data} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default Skills;
