import { motion } from 'framer-motion';
import {
  childVariants,
  grandchildVariants,
  parentVariants,
} from '../helpers/variants';

function About() {
  return (
    <motion.section
      id="about"
      variants={parentVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="flex items-center rounded-2xl gap-5 justify-center px-2 py-5 sm:px-5 sm:py-10 h-full w-full"
    >
      <div className="sm:p-5 p-2 rounded-2xl xl:h-[20rem] lg:w-1/2 grid place-content-between content-center gap-5 max-lg:border max-lg:bg-white ">
        <div className="md:max-lg:p-8 py-5">
          <motion.h1
            variants={childVariants}
            className="section_header w-fit max-lg:w-full max-lg:text-center text-left"
          >
            <span className="heading">My Exploration.</span>
          </motion.h1>
        </div>
        <motion.p
          variants={grandchildVariants}
          className=" text-md md:text-[1rem] h-full leading-8 text-left max-lg:sm:text-center md:font-medium "
        >
          Hi there! I'm a 21-year-old frontend developer passionate about
          creating user-friendly designs. Working with various scripting
          languages and frameworks, I've set high standards for web
          applications.
          <br /> My focus is not just on making products enjoyable but also
          ensuring the code is easy to maintain and understand.
          {/* I've had the
            chance to build memorable, user-friendly projects that showcase the
            perfect blend of creativity and functionality. */}
          <br />
          Check out my portfolio to see the simplicity and effectiveness of my
          work!
        </motion.p>
      </div>
      <div className="xl:w-[30rem] xl:h-[30rem] w-[25rem] h-[25rem] items-center justify-center p-5 pb-0 bg-accent/15 relative hidden lg:flex rounded-t-3xl">
        <img
          src="/Ram_Profile_1-removebg.png"
          alt="ProfileImg"
          className="h-full w-full object-cover z-30 object-top p-2 pb-0 rounded-t-3xl drop-shadow-2xl"
        />
      </div>
    </motion.section>
  );
}

export default About;
