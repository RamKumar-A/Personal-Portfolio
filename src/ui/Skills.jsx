import { IoLogoJavascript, IoLogoReact, IoLogoGithub } from 'react-icons/io5';
import { IoLogoHtml5 } from 'react-icons/io5';
import { IoLogoCss3 } from 'react-icons/io5';
import {
  SiRedux,
  SiTailwindcss,
  SiStyledcomponents,
  SiReactrouter,
} from 'react-icons/si';

import SkillCard from './SkillCard';

function Skills() {
  const datas = [
    {
      icon: <IoLogoHtml5 />,
      title: 'HTML',
    },
    {
      icon: <IoLogoCss3 />,
      title: 'CSS',
    },
    {
      icon: <IoLogoJavascript />,
      title: 'javascript',
    },
    {
      icon: <IoLogoReact />,
      title: 'react',
    },
    {
      icon: <SiRedux />,
      title: 'redux',
    },
    {
      icon: <IoLogoGithub />,
      title: 'git',
    },
    {
      icon: <SiTailwindcss />,
      title: 'tailwind css',
    },
    {
      icon: <SiStyledcomponents />,
      title: 'styled components',
    },
    {
      icon: <SiReactrouter />,
      title: 'react router',
    },
  ];

  return (
    <div
      id="skills"
      className="grid items-center mb-2 justify-items-center py-10  place-content-center section "
    >
      <h1 className="section_header pb-5">Skills Snapshot</h1>
      <div className="flex items-center justify-center m-2 gap-4 flex-wrap py-5">
        {datas.map((data) => (
          <SkillCard icons={data.icon} title={data.title} key={data.title} />
        ))}
      </div>
    </div>
  );
}

export default Skills;

/* <h1 className="text-2xl md:text-[1.6rem]  w-full text-center xl:text-3xl font-medium flex items-center justify-center   bg-clip-text mb-5 uppercase tracking-widest  p-5 py-3"> */
