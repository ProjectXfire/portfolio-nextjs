import NextImage from 'next/image';
// Components & Styles
import styles from './Hobbies.module.css';

function Hobbies(): JSX.Element {
  return (
    <div className={styles.hobbies}>
      <div className={styles.hobbies__image}>
        <p className={styles['hobbies__image--text']}>
          I like to play video games in my free time.
        </p>
        <NextImage
          fill
          src='/images/hobbie_1.jpg'
          alt='hobbie'
          priority
          sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
        />
      </div>
      <div className={styles.hobbies__image}>
        <p className={styles['hobbies__image--text']}>
          I like learn new songs and playing it, is difficult sometimes, but really exciting when
          you learn it.
        </p>
        <NextImage
          fill
          src='/images/hobbie_2.jpg'
          alt='hobbie'
          priority
          sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
        />
      </div>
    </div>
  );
}
export default Hobbies;
