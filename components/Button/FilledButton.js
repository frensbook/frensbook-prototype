import buttonstyles from "../../styles/Button.module.css";
import React from "react";

const FilledButton = ({ children }) => {
  return (
    <div>
      <button className={buttonstyles.filledbutton}>{children}</button>
    </div>
  );
};

export default FilledButton;
