import styles from './ResumeBlock.module.css';

interface Props {
  children: React.ReactNode;
}

function ResumeBlock({ children }: Props): JSX.Element {
  return <div className={styles['resume-block']}>{children}</div>;
}
export default ResumeBlock;
