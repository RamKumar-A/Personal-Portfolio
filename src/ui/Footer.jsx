import { childVariants, parentVariants } from '../helpers/variants';
import SocialMediaLinks from './SocialMediaLinks';
import { motion } from 'framer-motion';

function Footer() {
  return (
    <motion.section
      variants={parentVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="md:pt-20 px-10 p-5"
    >
      <div className="text-center">
        <motion.h1
          variants={childVariants}
          className="text-xl md:text-[1.6rem] xl:text-3xl font-bold py-3 w-full text-center flex items-center justify-center uppercase tracking-wider  "
        >
          Let's create something amazing together!
        </motion.h1>
        <motion.p
          variants={childVariants}
          className="text-md text-center md:text-center xl:text-lg tracking-wider font-medium py-3 pb-5 text-secondary"
        >
          {/* I'm open to collaboration and new opportunities. If you have a project
          in mind or just want to connect, feel free to reach out. */}
          Let's collaborate and turn ideas into reality. If you have a project
          in mind or just want to connect, feel free to reach out.
        </motion.p>
      </div>
      <motion.div variants={childVariants} className="my-5">
        <SocialMediaLinks />
      </motion.div>
    </motion.section>
  );
}

export default Footer;
