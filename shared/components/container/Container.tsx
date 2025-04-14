import styles from "./Container.module.css";

interface Props {
  children: React.ReactNode;
}

function Container({ children }: Props): React.ReactElement {
  return <main className={styles.container}>{children}</main>;
}
export default Container;
