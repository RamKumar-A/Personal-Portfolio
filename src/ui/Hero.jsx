import HeroContent from './HeroContent';
import { motion } from 'framer-motion';

function Hero() {
  return (
    <motion.section
      className="flex lg:py-36 items-center justify-center py-5 sm:gap-7 flex-col gap-5 section z-10  "
      id="home"
    >
      <HeroContent />
      <div className="xl:w-[30rem] xl:h-[30rem] w-64 h-64 md:w-72 md:h-72  flex items-center justify-center relative rounded-full bg-primary lg:hidden p-2 shadow-xl">
        <img
          src="/Ram_Profile_1-removebg.png"
          alt="ProfileImg"
          className=" h-full w-full object-cover object-top shadow-inner pt-3 rounded-full bg-accent/15"
        />
        <div className="absolute w-full h-full  z-10 blur-3xl " />
      </div>
    </motion.section>
  );
}

export default Hero;
