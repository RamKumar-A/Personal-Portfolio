import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5';
import { SiGmail } from 'react-icons/si';
import { NavLink } from 'react-router-dom';

function Footer() {
  return (
    <div className="mt-10 pb-5">
      <div className="text-center">
        <h1 className="text-2xl md:text-[1.6rem] xl:text-3xl font-bold py-3 w-full text-center flex items-center justify-center bg-clip-text mb-5 uppercase tracking-wider  ">
          Let's create something amazing together!
        </h1>
        <p className="xl:text-lg tracking-wider font-medium py-3 pb-5">
          {/* I'm open to collaboration and new opportunities. If you have a project
          in mind or just want to connect, feel free to reach out. */}
          Let's collaborate and turn ideas into reality. If you have a project
          in mind or just want to connect, feel free to reach out.
        </p>
      </div>
      <div className="my-5">
        <div className="flex items-center justify-center gap-5 tracking-widest text-2xl uppercase text-gray-100">
          <NavLink
            to="https://mail.google.com/mail/?view=cm&fs=1&to=ramk41934@gmail.com"
            className=" w-10 h-10 bg-blue-700 hover:bg-blue-500 cursor-pointer flex items-center justify-center rounded-full p-2 icon_hover"
          >
            <SiGmail className="p-0.5" />
          </NavLink>
          <NavLink
            to="https://www.linkedin.com/in/ramkumar001/"
            className=" w-10 h-10 bg-blue-700 hover:bg-blue-500 cursor-pointer flex items-center justify-center rounded-full p-2 icon_hover"
          >
            <IoLogoLinkedin className="p-0.5" />
          </NavLink>
          <NavLink
            to="https://github.com/RamKumar-A/RamKumar-A/"
            className=" w-10 h-10 bg-blue-700 hover:bg-blue-500 cursor-pointer flex items-center justify-center rounded-full p-2 icon_hover"
          >
            {' '}
            <IoLogoGithub className="p-0.5" />
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Footer;
