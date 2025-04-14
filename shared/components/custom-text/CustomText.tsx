"use client";

import { CSSProperties } from "react";
import styles from "./CustomText.module.css";

interface Props {
  text: string;
  textStyles?: CSSProperties;
}

function Text({ text, textStyles }: Props): React.ReactElement {
  return (
    <p style={textStyles} className={styles.text}>
      {text}
    </p>
  );
}
export default Text;
