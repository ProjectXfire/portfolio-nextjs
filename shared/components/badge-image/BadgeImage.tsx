import NextImage from 'next/image';
// Components & Styles
import styles from './BadgeImage.module.css';

interface Props {
  imagePath: string;
}

function BadgeImage({ imagePath }: Props): JSX.Element {
  return (
    <NextImage
      className={styles['badge-image']}
      src={imagePath}
      alt='image'
      width={50}
      height={50}
    />
  );
}
export default BadgeImage;
