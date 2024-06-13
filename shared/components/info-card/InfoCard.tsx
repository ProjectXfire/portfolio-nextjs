// Components & Styles
import styles from './InfoCard.module.css';

interface Props {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
}

function InfoCard({ icon, title, subtitle }: Props): JSX.Element {
  return (
    <div className={styles['info-card']}>
      <div className={styles['info-card__icon']}>{icon}</div>
      <div className={styles['info-card__data']}>
        <p>{title}</p>
        <p>{subtitle}</p>
      </div>
    </div>
  );
}
export default InfoCard;
