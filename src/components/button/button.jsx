import React from "react";
import styles from "./button.module.css";

const Button = ({ text, variant = "primary", ...props }) => {
  const classNames = `${styles.btn} ${styles[variant]}`;

  return (
    <button className={classNames} {...props}>
      {text}
    </button>
  );
};

export default Button;
    