import NextImage from 'next/image';
// Components & styles
import styles from './IconsAnimation.module.css';

interface Props {
  imgPath: string;
  imgName: string;
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
}

function IconAnimated({ bottom, left, right, top, imgPath, imgName }: Props): JSX.Element {
  return (
    <div
      style={{
        top: top && `${top}px`,
        left: left && `${left}px`,
        right: right && `${right}px`,
        bottom: bottom && `${bottom}px`,
      }}
      className={styles['icon-box']}
    >
      <NextImage src={imgPath} alt={imgName} width={80} height={80} />
    </div>
  );
}
export default IconAnimated;
