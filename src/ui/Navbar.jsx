import { useLocation } from 'react-router-dom';
import { IoHomeOutline, IoPersonOutline } from 'react-icons/io5';
import { RiFolderUserLine } from 'react-icons/ri';
import { FaRegFilePdf } from 'react-icons/fa6';
import { SiBlueprint } from 'react-icons/si';

import { scrollToSection } from '../../helpers/scrollIntoView';

function Navbar() {
  const location = useLocation();
  const datas = [
    {
      icon: <IoHomeOutline />,
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

  return (
    <ul className="h-[90vh] flex flex-col  justify-center gap-5 my-5 p-5 ">
      {datas.map((data) => (
        <li
          className=" flex items-center gap-2 rounded-full p-2 cursor-pointer group "
          onClick={() => {
            scrollToSection(data.id);
            if (data.id === 'resume')
              window.open(
                'https://drive.google.com/file/d/1DS4wxCPe9r5l5S0Bm66-EHQ6YOahcHgr/view',
                '_blank'
              );
          }}
          key={data.id}
        >
          <h1
            className={` p-4 xl:h-14 text-2xl flex justify-center items-center gap-2 transition-all duration-75 ease-linear rounded-full hover:bg-blue-600 hover:text-gray-100 group ${
              location.hash === '#' + data.id
                ? 'bg-blue-600 text-gray-100 '
                : 'bg-gray-200 text-blue-700 '
            }`}
          >
            <span className="">{data.icon}</span>
            <span className="hidden text-lg group-hover:block">
              {data.name}
            </span>
          </h1>
        </li>
      ))}
    </ul>
    // </div>
  );
}

export default Navbar;
