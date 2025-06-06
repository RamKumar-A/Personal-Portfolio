import { motion } from 'framer-motion';
import { useMouseMove } from '../hooks/mouseMoveAnimation';

function SkillCard({ data }) {
  const { ref, handleMouseLeave, handleMouseMove, transform } = useMouseMove();
  return (
    <motion.div
      className="p-0.5 sm:p-2 md:p-2.5 bg-primary/10 rounded-2xl cursor-pointer shadow-2xl shadow-secondary/10"
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transformStyle: 'preserve-3d', transform }}
    >
      <motion.div
        className="w-28 h-28 min-[370px]:w-[8.5rem]  sm:h-32 flex flex-col items-center flex-wrap justify-center gap-1 text-center rounded-2xl  z-30 bg-primary/90 shadow-lg shadow-secondary/10"
        style={{ transform: 'translateZ(75px)', transformStyle: 'preserve-3d' }}
      >
        <span
          className="text-4xl sm:text-5xl text-center drop-shadow-md"
          style={{
            color: data.iconColor,
            transform: 'translateZ(75px)',
            transformStyle: 'preserve-3d',
          }}
        >
          {data.icon}
        </span>
        <h1 className="text-xs lg:text-[0.82rem] tracking-widest capitalize pt-1 text-accent font-semibold">
          {data.title}
        </h1>
      </motion.div>
    </motion.div>
  );
}

export default SkillCard;
