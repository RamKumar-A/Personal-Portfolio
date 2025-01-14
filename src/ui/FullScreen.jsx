import { createPortal } from 'react-dom';

function FullScreen({ children }) {
  return createPortal(
    <div className="fixed top-0 left-0 h-screen w-screen bg-red-600 z-30">
      {children}
    </div>,
    document.body
  );
}

export default FullScreen;
