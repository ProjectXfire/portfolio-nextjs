import NextImage from 'next/image';
// Components & styles
import styles from './Hero.module.css';
import { IconsAnimation, Social } from '..';

function Hero(): JSX.Element {
  return (
    <section className={styles['hero-container']}>
      <div className={styles['hero-info']}>
        <div className={styles['hero-info__title']}>
          <h2>Frontend Developer</h2>
          <Social />
        </div>
        <h1 className={`${styles['hero-info__hi']}`}>Hello I&apos;m</h1>
        <h1 className={`${styles['hero-info__hi']} ${styles['hero-info__hi--color']}`}>
          Gabriel Vargas
        </h1>
        <p className={styles['hero-info__description']}>
          Hi 😄, my name is Gabriel Vargas Bravo, I am a Self-motivated developer, learning about
          this huge world of web development. I have started a few years ago, learning HTML, CSS and
          Javascript.
        </p>
      </div>
      <div className={styles['hero-avatar']}>
        <IconsAnimation />
      </div>
    </section>
  );
}
export default Hero;
