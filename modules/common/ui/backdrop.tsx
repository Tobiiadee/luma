/** @format */

import React, { useEffect } from "react";

export default function Backdrop({
  closeModal,
  isOpen,
  className
}: {
  closeModal: () => void;
  isOpen: boolean;
  className?: string;
}) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // Cleanup: reset the body overflow when modal is closed/unmounted
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isOpen) return null;
  return (
    <div
      onClick={closeModal}
      className={`w-screen h-screen ${className} backdrop-blur-sm fixed top-0 left-0 z-40 overflow-hidden cursor-pointer`}></div>
  );
}
