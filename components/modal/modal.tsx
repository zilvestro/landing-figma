import { motion } from "framer-motion";
import ReactDom from "react-dom";
import styles from "./modal.module.scss";
import { crossIcon } from "../../base/SVG";
import { MouseEvent } from "react";

interface ModalProps {
  setModal: (value: null) => void;
}

const Modal = ({ setModal }: ModalProps) => {
  const closeFunc = (e: MouseEvent<HTMLDivElement | HTMLButtonElement>) => {
    if (e.currentTarget === e.target) setModal(null);
  };

  // Handle server-side rendering
  if (typeof window === "undefined") {
    return null;
  }

  const portalTarget = document.getElementById("popups");

  if (!portalTarget) {
    console.error("No element with ID 'popups' found in the DOM.");
    return null;
  }

  return ReactDom.createPortal(
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      exit={{ opacity: 0 }}
      className={styles.modal}
      onClick={closeFunc}
    >
      <motion.div
        initial={{ opacity: 0, x: 0 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4 }}
        exit={{ opacity: 0, x: 0 }}
        className={styles["modal__inner"]}
      >
        <button
          onClick={closeFunc}
          type="button"
          className={styles["modal__head-close"]}
          aria-label="Close modal"
        >
          {crossIcon}
        </button>
        <div className={styles["modal__video"]}>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/8_0AWApjYHE?si=ISMvd7BZyNDT-Oar"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </motion.div>
    </motion.div>,
    portalTarget
  );
};

export { Modal };
