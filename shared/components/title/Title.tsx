'use client';

import { useMemo } from 'react';
import styles from './Title.module.css';

type Size = 'small' | 'medium' | 'large';

interface Props {
  text: string;
  size?: Size;
}

function Title({ size, text }: Props): JSX.Element {
  const customSize = useMemo(() => {
    switch (size) {
      case 'small':
        return '1.2rem';
      case 'medium':
        return '2rem';
      case 'large':
        return '3rem';
      default:
        return '1.2rem';
    }
  }, [size]);

  return (
    <h1 style={{ fontSize: customSize }} className={styles.title}>
      {text}
    </h1>
  );
}
export default Title;
