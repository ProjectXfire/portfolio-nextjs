import styles from './PersonalInfo.module.css';

interface Props {
  keyData: string;
  data: string;
}

function InfoBlock({ keyData, data }: Props) {
  return (
    <div className={styles['info-block']}>
      <p>{keyData}</p>
      <p>{data}</p>
    </div>
  );
}
export default InfoBlock;
