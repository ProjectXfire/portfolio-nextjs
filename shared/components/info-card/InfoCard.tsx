// Components & Styles
import styles from './InfoCard.module.css';

interface Props {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
}

function InfoCard({ icon, title, subtitle }: Props): JSX.Element {
  return (
    <div className={styles['info-card-container']}>
      <div className={`${styles['info-card']} bg-white dark:bg-[var(--bg-dark)]`}>
        <div className={styles['info-card__icon']}>{icon}</div>
        <div className={styles['info-card__data']}>
          <p>{title}</p>
          <p>{subtitle}</p>
        </div>
      </div>
      <div className={styles['info-card-back']} />
    </div>
  );
}
export default InfoCard;
