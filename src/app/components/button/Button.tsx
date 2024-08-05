import React from "react";
import styles from "./button.module.scss";

interface ButtonProps {
  className?: string;
  size?: "small" | "medium" | "large";
  onClick: () => void;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  className = "",
  size = "medium",
  onClick,
  iconLeft = null,
  iconRight = null,
  children,
}) => {
  let sizeClass = "";

  switch (size) {
    case "small":
      sizeClass = styles.btnSmall;
      break;
    case "medium":
      sizeClass = styles.btnMedium;
      break;
    case "large":
      sizeClass = styles.btnLarge;
      break;
  }

  return (
    <button
      className={`${styles.btn} ${sizeClass} ${className}`}
      onClick={onClick}
    >
      {iconLeft && <span className={styles.iconLeft}>{iconLeft}</span>}
      {children}
      {iconRight && <span className={styles.iconRight}>{iconRight}</span>}
    </button>
  );
};

export default Button;
