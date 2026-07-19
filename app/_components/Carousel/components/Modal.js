"use client";

import {
  cloneElement,
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { createPortal } from "react-dom";
import { XMarkIcon } from "@heroicons/react/24/solid";

import keepOpenSwiperClasses from "@/app/_utils/constants/keepOpenSwiperClasses";

const modalContext = createContext();

function Modal({ children }) {
  const [openName, setOpenName] = useState("");

  const open = setOpenName;
  const close = () => setOpenName("");

  return (
    <modalContext.Provider value={{ openName, open, close }}>
      {children}
    </modalContext.Provider>
  );
}

function Open({ children, opens: opensWindowName }) {
  const { open } = useContext(modalContext);

  return cloneElement(children, {
    onClick: () => open(opensWindowName),
  });
}

function Window({ children, name }) {
  const { openName, close } = useContext(modalContext);
  const ref = useRef(null);

  useEffect(() => {
    function handleClick(e) {
      if (!ref?.current?.contains(e.target)) return;

      if (!keepOpenSwiperClasses.some((c) => e.target.classList.contains(c)))
        close();
    }

    document.addEventListener("click", handleClick, true);

    return () => document.removeEventListener("click", handleClick, true);
  }, []);

  if (name !== openName) return null;

  return createPortal(
    <div
      ref={ref}
      className="fixed top-0 left-0 w-full h-screen backdrop-blur-lg z-1000 transition-all duration-500"
    >
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg px-14 py-16 transition-all duration-500 fade-div">
        <button
          className="absolute top-4 right-5 cursor-pointer"
          onClick={close}
        >
          <XMarkIcon className="h-10 w-10 text-accent-600" />
        </button>
        <div>{cloneElement(children, { onCloseModal: close })}</div>
      </div>
    </div>,
    document.body,
  );
}

Modal.Open = Open;
Modal.Window = Window;

export default Modal;
