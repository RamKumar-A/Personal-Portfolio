import { AnimatePresence, motion } from 'framer-motion';
import { HiXMark } from 'react-icons/hi2';
import { useOutsideClick } from '../hooks/useOutsideClick';
import { createPortal } from 'react-dom';
const containerVariants = {
  initial: {
    scale: 0,
    y: '-100vh',
  },
  animate: {
    scale: 1,
    y: '0',
    transition: {
      delay: 0.05,
      duration: 0.5,
      type: 'spring',
      damping: 25,
      stiffness: 400,
    },
  },
  exit: {
    scale: 0,
    y: '100vh',
  },
};

function Modal({ children, closeModal, isModalOpen }) {
  const ref = useOutsideClick(closeModal);
  return createPortal(
    <AnimatePresence initial={false} mode="wait">
      {isModalOpen && (
        <motion.div className="fixed w-full h-full top-0 left-0 z-30 backdrop-blur-md backdrop-brightness-75 flex items-center justify-center ">
          <motion.div
            variants={containerVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className=" w-[95%] md:w-[80%] lg:w-3/4 h-full bg-primary/95 overflow-auto rounded-t-xl relative mt-2 "
            ref={ref}
          >
            <motion.button
              className="absolute top-1 right-1 z-[100] xl:top-2 xl:right-2 p-1 md:p-2 bg-accent text-gray-50 rounded-full"
              whileHover={{ rotate: '180deg', transition: { duration: 0.1 } }}
              onClick={closeModal}
              whileTap={{ scale: 0.9 }}
            >
              <HiXMark size={20} />
            </motion.button>
            <div className="h-full relative ">{children}</div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}

export default Modal;
