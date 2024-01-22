import { useLocation } from 'react-router-dom';
import { IoHomeOutline, IoPersonOutline } from 'react-icons/io5';
import { RiFolderUserLine } from 'react-icons/ri';
import { FaRegFilePdf } from 'react-icons/fa6';
import { SiBlueprint } from 'react-icons/si';
import { scrollToSection } from '../../helpers/scrollIntoView';

function NavbarModal({ toggleNav, handleToggle }) {
  const location = useLocation();
  const datas = [
    {
      icon: <IoHomeOutline className="font-bold" />,
      id: 'home',
      name: 'Home',
    },
    { icon: <IoPersonOutline />, id: 'about', name: 'About' },
    {
      icon: <RiFolderUserLine />,
      id: 'project',
      name: 'Project',
    },
    { icon: <SiBlueprint />, id: 'skills', name: 'Skills' },
    { icon: <FaRegFilePdf />, id: 'resume', name: 'Resume' },
  ];
  function handleClick(id) {
    scrollToSection(id);
    handleToggle();
  }
  return (
    <div
      className={
        toggleNav
          ? 'z-30 fixed top-0 left-0 w-[80%] md:w-[calc(80%-20rem)] '
          : 'hidden'
      }
    >
      <ul className=" flex flex-col items-center justify-center gap-5 px-5 w-full bg-gray-50  border-r border-gray-400 h-[100vh]">
        {datas.map((data) => (
          <li
            className={`flex items-center w-full p-3 justify-left rounded-full  cursor-pointer  ${
              location.hash === '#' + data.id
                ? 'bg-blue-600 text-gray-100 '
                : 'bg-gray-200 text-blue-700 '
            }`}
            key={data.id}
            onClick={() => handleClick(data.id)}
          >
            <h1
              className={`w-10 flex text-2xl items-center justify-center transition-all duration-75 ease-linear rounded-full `}
            >
              <span className="">{data.icon}</span>
            </h1>
            <h1 className="">{data.name}</h1>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NavbarModal;
