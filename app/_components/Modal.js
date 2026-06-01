"use client";

import { cloneElement, createContext, useContext, useState } from "react";
import { createPortal } from "react-dom";
import { XMarkIcon } from "@heroicons/react/24/solid";

import ModalOverlay from "./ModalOverlay";
import ModalPanel from "./ModalPanel";

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

  if (name !== openName) return null;

  return createPortal(
    <ModalOverlay>
      <ModalPanel>
        <button
          className="absolute top-4 right-5 cursor-pointer"
          onClick={close}
        >
          <XMarkIcon className="h-5 w-5 text-primary-600" />
        </button>
        <div className="bg-primary-900">
          {cloneElement(children, { onCloseModal: close })}
        </div>
      </ModalPanel>
    </ModalOverlay>,
    document.body,
  );
}

Modal.Open = Open;
Modal.Window = Window;

export default Modal;
