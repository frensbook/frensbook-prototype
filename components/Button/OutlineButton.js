import buttonstyles from "../../styles/Button.module.css";
import React from "react";

const OutlineButton = ({ children }) => {
  return (
    <div>
      <button className={buttonstyles.outlinebutton}>{children}</button>
    </div>
  );
};

export default OutlineButton;
