import type { ISkill } from '@/shared/interfaces';
// Components & Styles
import styles from './List.module.css';
import { SkillCard } from '..';

interface Props {
  data: ISkill[];
}

function SkillsList({ data }: Props) {
  return (
    <ul className={styles['skills-list']}>
      {data.map((skill, i) => (
        <SkillCard key={i} imagePath={skill.pathIcon} name={skill.name} />
      ))}
    </ul>
  );
}
export default SkillsList;
