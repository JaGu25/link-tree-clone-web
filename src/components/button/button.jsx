import React from "react";
import styles from "./Button.module.css";

const Button = ({ text, variant = "primary", ...props }) => {
  const buttonClass = `${styles.btn} ${styles[variant]}`;

  return (
    <button className={buttonClass} {...props}>
      {text}
    </button>
  );
};

export default Button;
