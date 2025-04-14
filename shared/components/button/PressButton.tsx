"use client";

import styles from "./Button.module.css";

interface Props {
  children: React.ReactNode;
  onClick: () => void;
  textColor?: string;
  bgColor?: string;
  baseColor?: string;
}

function PressButton({
  children,
  onClick,
  textColor = "white",
  bgColor = "black",
  baseColor = "grey",
}: Props): React.ReactElement {
  return (
    <div className={styles["button-container"]}>
      <button
        style={{ backgroundColor: bgColor, color: textColor }}
        className={styles["button-press"]}
        type="button"
        onClick={onClick}
      >
        {children}
      </button>
      <div style={{ backgroundColor: baseColor }} className={styles["button-base"]} />
    </div>
  );
}
export default PressButton;
