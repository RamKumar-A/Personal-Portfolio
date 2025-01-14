import {
  motion,
  AnimatePresence,
  useMotionValueEvent,
  useScroll,
} from 'framer-motion';
import { useState } from 'react';
import { HiArrowUp } from 'react-icons/hi2';

function ScrolltoTop() {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollY } = useScroll();

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  useMotionValueEvent(scrollY, 'change', (latest) => {
    if (latest >= 400) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  });

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          onClick={scrollToTop}
          className="fixed bottom-2 right-2 xl:bottom-5 xl:right-5 bg-accent/90 p-2 lg:p-3 z-20 lg:text-2xl  text-gray-50 cursor-pointer rounded-full scrollToTop"
          whileHover={{
            transform: 'translateY(-10px)',
            boxShadow:
              '0 7px 0 -1px rgb(245 0 79 / 0.3), 0 15px 0 -3px rgb(245 0 79 / 0.3), 0 21px 0 -5px rgb(245 0 79 / 0.2)',
          }}
          initial={{ y: -70, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 50, opacity: 0 }}
        >
          <HiArrowUp size={20} fontWeight="900" className="" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default ScrolltoTop;
