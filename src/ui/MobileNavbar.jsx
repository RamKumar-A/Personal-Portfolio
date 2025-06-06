import { useLocation } from 'react-router-dom';
import { IoPersonOutline } from 'react-icons/io5';
import { RiFolderUserLine } from 'react-icons/ri';
import { SiBlueprint } from 'react-icons/si';
import { HiXMark } from 'react-icons/hi2';
import Logo from './Logo';

function MobileNavbar({ onClose }) {
  const location = useLocation();
  const datas = [
    {
      icon: <RiFolderUserLine />,
      id: 'work',
      name: 'Work',
    },
    { icon: <SiBlueprint />, id: 'skills', name: 'Skills' },
    { icon: <IoPersonOutline />, id: 'about', name: 'About' },
  ];

  return (
    <div className="px-5 bg-primary h-screen relative sm:hidden">
      <button
        className="absolute right-2 top-2 bg-accent p-2 rounded-full text-white"
        onClick={onClose}
      >
        <HiXMark />
      </button>
      <ul className="flex flex-col items-center justify-center gap-5 text-md h-full w-full">
        <a href="#home" className="pb-5" onClick={onClose}>
          <Logo />
        </a>
        {datas.map((data) => (
          <a
            href={'#' + data.id}
            key={data.id}
            className="max-sm:w-3/4 cursor-pointer items-center"
            onClick={onClose}
          >
            <li
              className={`flex items-center gap-2 p-3 justify-left rounded-full border  ${
                location.hash === '#' + data.id
                  ? 'bg-accent/10 border-transparent text-accent'
                  : ' border-accent/15 text-accent/80'
              }`}
            >
              <span className="text-xl p-0.5">{data.icon}</span>
              <h1 className="">{data.name}</h1>
            </li>
          </a>
        ))}
      </ul>
      <div className="p-5 absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4">
        <button
          className="text-xs md:text-sm tracking-widest font-semibold bg-accent w-full text-white p-3 rounded-sm"
          onClick={() => {
            window.open(
              'https://drive.google.com/file/d/1uz84XtTx8mEyLgxgpLbsGkHxrShzb_TE/view?usp=sharing',
              '_blank'
            );
            onClose();
          }}
        >
          <span>Resume</span>
        </button>
      </div>
    </div>
  );
}

export default MobileNavbar;
