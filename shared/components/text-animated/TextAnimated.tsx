import styles from './TextAnimated.module.css';

interface Props {
  textArray: string[];
}

function TextAnimated({ textArray }: Props): JSX.Element {
  return (
    <div className={styles['animate-text']}>
      {textArray.map((char, i) => {
        if (char === ' ')
          return (
            <span className={styles['text-with-spacer']} key={i}>
              -
            </span>
          );
        return (
          <span style={{ animationDelay: `${0.1 + i / 10}s` }} key={i}>
            {char}
          </span>
        );
      })}
    </div>
  );
}
export default TextAnimated;
