import NextImage from 'next/image';
// Components & Styles
import styles from './Cards.module.css';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/shared/components';

interface Props {
  imagePath: string;
  name: string;
}

function SkillCard({ imagePath, name }: Props): JSX.Element {
  return (
    <li className={styles['skill-card-container']}>
      <div className={styles['skill-card-inner']}>
        <div className={styles['skill-card']}>
          <NextImage src={imagePath} alt='skill' width={80} height={80} />
        </div>
        <div className={styles['skill-card--back']}>
          <p>{name}</p>
        </div>
      </div>
    </li>
  );
}
export default SkillCard;

/* 
      <TooltipProvider delayDuration={300}>
        <Tooltip>
          <TooltipTrigger asChild>
            <li className={styles['skill-card']}>
              <NextImage src={imagePath} alt='skill' width={80} height={80} />
            </li>
          </TooltipTrigger>
          <TooltipContent>
            <p>{name}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
*/
