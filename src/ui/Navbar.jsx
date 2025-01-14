import { useState } from 'react';
import { motion } from 'framer-motion';

const navs = [
  {
    nav: 'Work',
    id: 'work',
  },
  {
    nav: 'Skills',
    id: 'skills',
  },
  {
    nav: 'About',
    id: 'about',
  },
];

function Navbar() {
  const [activeNav, setActiveNav] = useState('');

  return (
    <ul className="flex items-center gap-5 text-accent font-[Nunito-Sans] tracking-wider font-bold">
      {navs.map((nav) => (
        <a href={`#${nav.id}`} key={nav.id} className="relative">
          <li
            className="relative px-3 py-1"
            onClick={() => setActiveNav(nav.nav)}
          >
            {activeNav === nav.nav && (
              <motion.div
                layoutId="active-nav"
                className="absolute bg-accent inset-0 "
                style={{ borderRadius: 9999 }}
                transition={{ type: 'spring', duration: 0.3 }}
              />
            )}
            <span
              className={`z-20 mix-blend-screen  ${
                activeNav === nav.nav ? 'text-primary' : ''
              }`}
            >
              {nav.nav}
            </span>
          </li>
        </a>
      ))}
    </ul>
  );
}

export default Navbar;
