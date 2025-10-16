import { useState } from 'react';
import Logo from './Logo';
import Navbar from './Navbar';
import { HiBars3BottomRight } from 'react-icons/hi2';
import Drawer from './Drawer';
import MobileNavbar from './MobileNavbar';

function Header() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <div className="flex items-center justify-between w-full py-2 md:py-3 sticky top-0 backdrop-blur-xl z-20 px-2 sm:px-5">
      <Logo />
      <div className="max-sm:hidden">
        <Navbar />
      </div>
      <button
        className="sm:hidden p-1 text-neutral/95 border rounded-full border-neutral/20"
        onClick={() => setIsDrawerOpen(!isDrawerOpen)}
      >
        <HiBars3BottomRight size={22} />
      </button>
      <button
        className="text-xs md:text-sm max-sm:hidden tracking-widest font-semibold text-accent"
        onClick={() =>
          window.open(
            'https://drive.google.com/file/d/1YxEMpRZssZQWkgmHfyAYiMB27tptSZZF/view?usp=sharing',
            '_blank'
          )
        }
      >
        Resume
      </button>
      <Drawer
        isOpen={isDrawerOpen}
        position="left"
        onClose={() => setIsDrawerOpen(false)}
      >
        <MobileNavbar onClose={() => setIsDrawerOpen(false)} />
      </Drawer>
    </div>
  );
}

export default Header;
