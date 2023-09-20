import React, { useEffect } from "react";
import classes from "./Modal.module.css";
import gif1 from "../../Assets/gif7.gif";
import gif2 from "../../Assets/gif2.gif";
import gif4 from "../../Assets/gif4.gif"; // Add more GIF imports as needed
import gif3 from "../../Assets/gif6.gif"; // Add more GIF imports as needed

function Modal({ closeModal, title }) {
  useEffect(() => {
    // Add a click event listener on the document to close the modal when clicking outside of it
    const handleOutsideClick = (e) => {
      if (e.target === document.querySelector(`.${classes["modal"]}`)) {
        closeModal();
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [closeModal]);

  // Use a switch case to select the appropriate GIF based on the title
  let gifSrc = "";
  switch (title) {
    case "Insight Stock":
      gifSrc = gif1;
      break;
    case "Profinder":
      gifSrc = gif2;
      break;
    case "tradingbot":
      gifSrc = gif3;
      break;
    case "Food":
      gifSrc = gif4;
      break;
    default:
      gifSrc = "gif1"; // Provide a default GIF or leave it empty if none
      break;
  }

  return (
    <div className={classes["modal"]}>
      <div className={classes["modal-content"]}>
        <h2>{title}</h2>
        <img src={gifSrc} alt={title} style={{ maxWidth: '100%' }} />
        <button className={classes["modal-close"]} onClick={closeModal}>
          Close
        </button>
      </div>
    </div>
  );
}

export default Modal;
