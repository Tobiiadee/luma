import React from "react";
import { createPortal } from "react-dom";
import Backdrop from "./backdrop";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  const portalElement = document.getElementById("overlay");

  if (!portalElement) {
    console.error("Overlay container not found.");
    return null;
  }

  return (
    <>
      {createPortal(
        <Backdrop isOpen={isOpen} closeModal={onClose} />,
        portalElement
      )}
      {isOpen && <div className="modal-content">{children}</div>}
    </>
  );
};

export default Modal;
