import { useState } from 'react';
import { HiMiniBars3BottomRight, HiOutlineXMark } from 'react-icons/hi2';

import Navbar from './Navbar';
import Logo from './Logo';
import NavbarModal from './NavbarModal';

function Header() {
  const [toggleNav, setToggleNav] = useState(false);
  function handleToggle() {
    setToggleNav(!toggleNav);
  }

  return (
    <div className="lg:my-2 xl:h-full  ">
      <div className="fixed lg:flex lg:flex-col items-center lg:justify-center justify-between py-2 sm:h-auto z-20 hidden">
        <Navbar />
      </div>
      <div className="lg:hidden fixed flex justify-between items-center py-2 px-3 text-xl bg-gray-100 w-full z-20 ">
        <Logo />
        <div
          className="rounded-full w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center cursor-pointer "
          onClick={handleToggle}
        >
          {toggleNav ? (
            <span className="bg-blue-700 text-gray-100 p-2 rounded-full transition-all duration-200  ">
              <HiOutlineXMark className=" " />
            </span>
          ) : (
            <span className="p-2 transition-all duration-200  ">
              <HiMiniBars3BottomRight className="" />
            </span>
          )}
        </div>
      </div>
      <NavbarModal toggleNav={toggleNav} handleToggle={handleToggle} />
    </div>
  );
}

export default Header;
