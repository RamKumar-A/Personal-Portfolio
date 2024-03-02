import { cloneElement, createContext, useContext, useState } from 'react';
import { Fade } from 'react-awesome-reveal';
import { createPortal } from 'react-dom';
import { HiXMark } from 'react-icons/hi2';

const ModalContext = createContext();

function Modal({ children }) {
  const [openName, setOpenName] = useState('');
  const close = () => setOpenName('');
  const open = setOpenName;
  return (
    <ModalContext.Provider value={{ close, open, openName }}>
      {children}
    </ModalContext.Provider>
  );
}

function Open({ opensWindowName, children }) {
  const { open } = useContext(ModalContext);
  return cloneElement(children, { onClick: () => open(opensWindowName) });
}

function Window({ name, children }) {
  const { openName, close } = useContext(ModalContext);
  if (openName !== name) return null;

  return createPortal(
    <div className="fixed w-full bg-gray-900 h-full  top-0 left-0 py-5 px-5 z-50 ">
      <button
        onClick={close}
        className="absolute top-0.5 right-0.5 z-[100] xl:top-2 xl:right-2 text-lg p-0.5 sm:p-1 bg-blue-700 text-gray-300 rounded-full"
      >
        <HiXMark className="hover:rotate-[360deg] hover:transition-transform duration-500 ease-in-out" />
      </button>
      <Fade>
        <div className="flex items-center justify-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[95%] h-[90%] bg-gray-50 z-50 p-2 overflow-auto shadow-2xl shadow-gray-700 rounded ">
          <div className="h-full ">
            {cloneElement(children, {
              onCloseModal: close,
            })}
          </div>
        </div>
      </Fade>
    </div>,
    document.body
  );
}

Modal.Open = Open;
Modal.Window = Window;

export default Modal;
