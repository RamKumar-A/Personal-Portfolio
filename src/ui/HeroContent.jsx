import { motion } from 'framer-motion';
import SocialMediaLinks from './SocialMediaLinks';
import {
  childVariants,
  grandchildVariants,
  parentVariants,
} from '../helpers/variants';

const boxVariants = {
  hidden: {
    x: '-100vw',
  },
  visible: {
    x: 0,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.05,
    },
  },
};

const listVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

// className=" animate-text-shine"
//                 color="transparent"
//                 sx={{
//                   backgroundClip: 'text',
//                   backgroundImage:
//                     'radial-gradient(circle, #7182ff 0%, #3cff52 100%)',
//                   backgroundSize: '200% 200%',
//                 }}

function HeroContent() {
  return (
    <div className="md:px-3">
      <motion.div variants={parentVariants} initial="hidden" animate="visible">
        <motion.h1
          className="text-[2.9rem] md:text-6xl lg:text-8xl tracking-widest font-medium md:max-lg:font-semibold font-[Red+Hat+Display] text-center py-3 drop-shadow-lg "
          variants={boxVariants}
        >
          {'Ram'.split('').map((str, i) => (
            <motion.span variants={listVariants} key={i}>
              {str}
            </motion.span>
          ))}{' '}
          {'Kumar'.split('').map((str, i) => (
            <motion.span variants={listVariants} key={i}>
              {str}
            </motion.span>
          ))}
          <motion.span
            variants={listVariants}
            className="font-[Montserrat]  bg-clip-text bg-size-[200%_200%] animate-text-shine text-transparent bg-radial-[at_0%_100%] via-secondary from-accent to-accent lg:text-9xl"
          >
            .
          </motion.span>
        </motion.h1>{' '}
        <motion.h1
          variants={childVariants}
          className="text-2xl text-center sm:text-[1.7rem] py-3 font-medium"
        >
          I'm
          <span className="font-[Raleway] text-secondary drop-shadow-md">
            {' '}
            MERN Stack Developer
          </span>
          <span className="font-[Montserrat]">.</span>
        </motion.h1>
        <motion.p
          variants={grandchildVariants}
          className="py-2 sm:text-lg text-center "
        >
          Welcome to my portfolio! I create clean and responsive web
          experiences.
        </motion.p>
        <SocialMediaLinks />
      </motion.div>
    </div>
  );
}

export default HeroContent;

// bg-[#FF71CD]
