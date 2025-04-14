import styles from "./ResumeBlock.module.css";

interface Props {
  children: React.ReactNode;
}

function ResumeBlock({ children }: Props): React.ReactElement {
  return <div className={styles["resume-block"]}>{children}</div>;
}
export default ResumeBlock;
