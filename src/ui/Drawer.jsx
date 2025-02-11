"use client";
import { useEffect } from "react";
import { createPortal } from "react-dom";

function Drawer({ open, onClose, children }) {
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) onClose();
    };

    window.addEventListener("resize", handleResize);

    if (window.innerWidth >= 1024) onClose();

    return () => window.removeEventListener("resize", handleResize);
  }, [onClose]);

  return createPortal(
    <>
      <div
        className={`backdrop-blur-sm fixed inset-0 w-full h-screen bg-secondary-800 bg-opacity-30 ${
          open ? "block" : "pointer-events-none hidden"
        }`}
        onClick={onClose}
      ></div>

      <div
        className={`fixed top-0 right-0 w-[250px] h-full transition-transform transform ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        onClick={(event) => {
          event.preventDefault();
          event.stopPropagation();
        }}
      >
        <div className="bg-secondary-0 max-h-full overflow-auto">
          {children}
        </div>
      </div>
    </>,
    document.body
  );
}

export default Drawer;
