import NextImage from 'next/image';
// Components & Styles
import styles from './BadgeImage.module.css';

interface Props {
  imagePath: string;
  isContainerVisible: boolean;
  index: number;
}

function BadgeImage({ imagePath, isContainerVisible, index }: Props): JSX.Element {
  return (
    <NextImage
      className={`${styles['badge-image']} ${isContainerVisible && styles['badge-image--animate']}`}
      style={{ animationDelay: `${index * 300}ms` }}
      src={imagePath}
      alt='image'
      width={50}
      height={50}
    />
  );
}
export default BadgeImage;
