import styles from "./FadeInContainer.module.css";

interface Props {
  children: React.ReactNode;
}

function FadeInContainer({ children }: Props): React.ReactElement {
  return <div className={styles["fadein-container"]}>{children}</div>;
}
export default FadeInContainer;
