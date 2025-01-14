import { motion } from 'framer-motion';

function Animation({ children }) {
  const animationDurations = [
    11, 12, 24, 10, 14, 23, 18, 16, 19, 20, 23, 18, 21, 13, 15, 26, 17, 13, 28,
  ];

  return (
    <>
      <section className="fixed w-full h-screen overflow-hidden -z-10">
        <div className="relative flex">
          {Array.from({ length: 100 }).map((_, i) => (
            <motion.span
              key={i}
              className="relative min-w-8 h-8 bg-teal-600 even:bg-accent opacity-15"
              initial={{
                y: '100vh',
                scale: 0.2,
                borderRadius: '50%',
                rotate: 0,
              }}
              animate={{
                y: '-10vh',
                scale: 0.8,
                borderRadius: ['0%', '50%', '0%', '50%', '0%'],
                rotate: [0, 360, 270, 40, 0],
              }}
              transition={{
                duration: animationDurations[i % animationDurations.length],
                repeat: Infinity,
              }}
            />
          ))}
        </div>
      </section>
      {children}
    </>
  );
}

export default Animation;
