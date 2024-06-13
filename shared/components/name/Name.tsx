import styles from './Name.module.css';

interface Props {
  name: string;
}

function Name({ name }: Props): JSX.Element {
  return (
    <div className={styles['name-container']}>
      <p className={styles.name}>
        {name}
        <span className={styles.dot}>.</span>
      </p>
    </div>
  );
}
export default Name;
