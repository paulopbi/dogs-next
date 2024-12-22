import React from "react";
import styles from "./Button.module.css";

type ButtonType = React.ButtonHTMLAttributes<HTMLButtonElement>;

function Button({ children, ...props }: ButtonType) {
  return (
    <button className={styles.button} {...props}>
      {children}
    </button>
  );
}

export default Button;
