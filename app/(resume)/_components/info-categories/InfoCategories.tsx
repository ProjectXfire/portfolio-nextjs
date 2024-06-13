import { resumeRoutes } from '@/shared/constants';
// Components & styles
import styles from './InfoCategories.module.css';
import { InfoLink, ResumeBlock } from '..';
import { Title } from '@/shared/components';

function InfoCategories(): JSX.Element {
  return (
    <ResumeBlock>
      <Title text='Why hire me?' size='large' />
      <p className={styles['info-categories-text']}>
        I like to code and continually learning new things about it.
      </p>
      <ul className={styles['info-categories-links']}>
        {resumeRoutes.map((route) => (
          <InfoLink key={route.name} name={route.name} url={route.path} />
        ))}
      </ul>
    </ResumeBlock>
  );
}
export default InfoCategories;
