import NextImage from 'next/image';
import { forwardRef } from 'react';
import type { IProject } from '@/shared/interfaces';
// Components & Styles
import styles from './Projects.module.css';
import { BadgeImage, CustomText, Separator, Title } from '@/shared/components';
import { Braces, MoveUpRight } from 'lucide-react';

type Position = 'previous' | 'active' | 'next';

interface Props {
  page: number;
  project: IProject;
  technologies: Record<string, string>;
  index: number;
  selectedIndex: number;
  totalItems: number;
}

function Project({ page, project, technologies, index, selectedIndex, totalItems }: Props) {
  const positionStyle = () => {
    if (index === selectedIndex) return styles['project--active'];
    if (selectedIndex - 1 === index || (selectedIndex === 0 && index === totalItems - 1))
      return styles['project--previous'];
    return styles['project--next'];
  };

  return (
    <div className={`${styles.project} ${positionStyle()}`}>
      <div className={styles.project__detail}>
        <p className={styles.project__number}>{(page + 1).toString().padStart(2, '0')}</p>
        <Title text={project.name} size='large' />
        <CustomText text={project.description} textStyles={{ fontSize: '1.1rem' }} />
        <div className={styles['project__badges']}>
          {project.tags.map((tag) => (
            <BadgeImage key={tag} imagePath={technologies[tag.toLowerCase()]} />
          ))}
        </div>
        <Separator />
        <div className={styles.project__actions}>
          <a className={styles['project-link']} href={project.demo} target='_blank'>
            <MoveUpRight /> Demo
          </a>
          <a className={styles['project-link']} href={project.code} target='_blank'>
            <Braces /> Code
          </a>
        </div>
      </div>
      <div className={styles.project__image}>
        <NextImage
          fill
          src={project.image}
          alt={project.name}
          sizes='(min-width: 0px) 100vw, (min-width: 768px) 50vw'
          priority
        />
      </div>
    </div>
  );
}

export default Project;
