import buttonstyles from "../../styles/Button.module.css";
import React from "react";

const FilledButton = ({ children }) => {
  return (
    <>
      <button className={buttonstyles.filledbutton}>{children}</button>
    </>
  );
};

export default FilledButton;
