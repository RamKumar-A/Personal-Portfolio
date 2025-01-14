import { IoLogoJavascript, IoLogoReact, IoLogoGithub } from 'react-icons/io5';
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
} from 'react-icons/si';

import { motion } from 'framer-motion';

import SkillCard from './SkillCard';
import {
  childVariants,
  grandchildVariants,
  parentVariants,
} from '../helpers/variants';

const datas = [
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
    icon: <IoLogoGithub />,
    title: 'git',
    iconColor: '#0d1117',
  },
  {
    icon: <SiTailwindcss />,
    title: 'tailwind CSS',
    iconColor: '#38bdf8',
  },
  {
    icon: <SiMui />,
    title: 'material ui',
    iconColor: '#0686bd',
  },
  {
    icon: <SiSupabase />,
    title: 'supabase',
    iconColor: '#40D08F',
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
      className="grid items-center justify-items-center  place-content-center section space-y-5 "
    >
      <div className="md:py-20 px-10 p-5">
        <motion.h1 variants={childVariants} className="section_header ">
          <span className="heading">Skills Snapshot</span>
        </motion.h1>
      </div>
      <div className="flex items-center justify-center gap-4 flex-wrap w-[80%] ">
        {datas.map((data) => (
          <motion.div variants={grandchildVariants} key={data.title}>
            <SkillCard data={data} />
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

export default Skills;
