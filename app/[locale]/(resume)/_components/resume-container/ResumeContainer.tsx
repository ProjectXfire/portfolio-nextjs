import styles from "./ResumeContainer.module.css";

interface Props {
  children: React.ReactNode;
}

function ResumeContainer({ children }: Props): React.ReactElement {
  return <div className={styles["resume-container"]}>{children}</div>;
}
export default ResumeContainer;
