import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5';
import { SiGmail } from 'react-icons/si';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

const linkInfo = [
  {
    to: 'https://mail.google.com/mail/?view=cm&fs=1&to=ramk41934@gmail.com',
    icon: <SiGmail className="p-0.5" />,
    id: 'email',
  },
  {
    to: 'https://www.linkedin.com/in/ramkumar001/',
    icon: <IoLogoLinkedin className="p-0.5" />,
    id: 'linkedin',
  },
  {
    to: 'https://github.com/RamKumar-A/RamKumar-A/',
    icon: <IoLogoGithub className="p-0.5" />,
    id: 'github',
  },
];

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      when: 'beforeChildren',
      ease: 'linear',
    },
  },
};

const linkVariants = {
  hidden: {
    scale: 0,
  },
  visible: {
    scale: 1,
  },
};

function SocialMediaLinks() {
  return (
    <motion.ul
      className="flex items-center justify-center py-3 text-xl sm:text-2xl gap-5"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {linkInfo.map((link) => (
        <motion.li
          key={link.id}
          className="w-10 h-10 bg-accent text-primary cursor-pointer flex items-center justify-center rounded-full p-2 "
          whileHover={{
            rotate: '360deg',
            transition: { duration: 0.5 },
          }}
          variants={linkVariants}
        >
          <NavLink to={link.to}>{link.icon}</NavLink>
        </motion.li>
      ))}
    </motion.ul>
  );
}

export default SocialMediaLinks;
