import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5';
import { SiGmail } from 'react-icons/si';
import { NavLink } from 'react-router-dom';

function HeroContent() {
  return (
    <div className="lg:justify-self-center text-center lg:text-left md:px-3">
      <h1 className="text-4xl md:text-5xl xl:text-7xl py-3 ">
        <span className=" tracking-widest font-extrabold xl:font-bold font-[Red+Hat+Display] ">
          Ram Kumar<span className="font-[Montserrat] text-blue-700">.</span>
        </span>{' '}
      </h1>
      <h1 className="text-2xl xl:text-[1.7rem] py-3 font-medium">
        I'm
        <span className="font-[Raleway] text-blue-700 ">
          {' '}
          Front End Developer
        </span>
        <span className="font-[Montserrat]">.</span>
      </h1>
      <p className="py-2 lg:text-lg">
        Welcome to my portfolio! I create clean and responsive web experiences.
      </p>
      <div className="flex items-center justify-center lg:justify-center  py-3 text-lg lg:text-2xl text-gray-800 gap-5  ">
        {/* <div className="h-0.5 w-[40%] bg-gray-500"></div> */}
        <NavLink
          to="https://github.com/RamKumar-A/RamKumar-A/"
          target="_blank"
          className="icon_hover hover:text-gray-100 w-10 h-10 bg-gray-200 shadow-lg shadow-gray-400 hover:bg-blue-700 flex items-center justify-center rounded-full"
        >
          <IoLogoGithub />
        </NavLink>
        <NavLink
          to="https://www.linkedin.com/in/ramkumar001/"
          target="_blank"
          className="icon_hover hover:text-gray-100 w-10 h-10 bg-gray-200 shadow-lg shadow-gray-400 hover:bg-blue-700 flex items-center justify-center rounded-full"
        >
          <IoLogoLinkedin />
        </NavLink>
        <NavLink
          to="https://mail.google.com/mail/?view=cm&fs=1&to=ramk41934@gmail.com"
          target="_blank"
          className="icon_hover hover:text-gray-100 w-10 h-10 bg-gray-200 shadow-lg shadow-gray-400 hover:bg-blue-700 flex items-center justify-center rounded-full"
        >
          <SiGmail />
        </NavLink>
      </div>
      {/* <div></div> */}
    </div>
  );
}

export default HeroContent;
