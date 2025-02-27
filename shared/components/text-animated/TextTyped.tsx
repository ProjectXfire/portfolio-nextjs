"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./TextAnimated.module.css";

interface Props {
  text: string;
}

function TextTyped({ text }: Props): React.ReactElement {
  const [textFragnment, setTextFragment] = useState("");
  const timer = useRef<NodeJS.Timeout | null>(null);
  const fragmentSize = useRef<number>(1);

  const awaitToType = (): Promise<null> => {
    return new Promise((resolve) =>
      setTimeout(() => {
        resolve(null);
      }, 1000)
    );
  };

  const handleText = (): void => {
    const fragment = text.slice(0, fragmentSize.current);
    setTextFragment((cv) => {
      if (cv.length >= text.length) clearInterval(timer.current!);
      return fragment;
    });
    fragmentSize.current++;
  };

  useEffect(() => {
    timer.current = setInterval(async () => {
      await awaitToType();
      handleText();
    }, 250);
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, []);

  return (
    <div className={styles.container}>
      <p className={styles.text}>
        {textFragnment}
        <span className={styles.cursor}>|</span>
      </p>
    </div>
  );
}
export default TextTyped;
