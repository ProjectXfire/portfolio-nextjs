'use client';

// Components & Styles
import styles from './Background.module.css';

const blocks = new Array(2500).fill(true);

function Background(): JSX.Element {
  return (
    <>
      <div
        className={`${styles.background} bg-[rgba(224,226,231,0.1)] dark:bg-[rgba(14,25,41,0.1)]`}
      >
        {blocks.map((b, i) => (
          <div className={`${styles.block} bg-white dark:bg-[var(--bg-dark)]`} key={i} />
        ))}
      </div>
      <div
        className={`${styles['block-animated']} bg-[linear-gradient(0deg,_#ffffff_19%,_#d4d9e7_50%,_#ffffff_88%)] dark:bg-[linear-gradient(0deg,_#020817_19%,_#131a2c_50%,_#020817_88%)]`}
      />
    </>
  );
}
export default Background;
