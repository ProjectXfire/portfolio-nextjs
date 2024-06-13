'use client';

import { useState } from 'react';
import type { IProject } from '@/shared/interfaces';
import { technologies } from '@/shared/data';
// Components & Styles
import styles from './Projects.module.css';
import { Pagination } from '@/shared/components';
import Project from './Project';

interface Props {
  projects: IProject[];
}

function Projects({ projects }: Props): JSX.Element {
  const [currentPage, setCurrentPage] = useState(0);

  const onChangePage = (value: number) => {
    setCurrentPage(value - 1);
  };

  return (
    <div className={styles['project-container']}>
      <Pagination
        initValue={1}
        maxPage={projects.length}
        page={onChangePage}
        paginationStyles={{ alignSelf: 'flex-end' }}
      />
      <div className={styles.projects}>
        {projects.map((proj, index) => (
          <Project
            key={index}
            page={currentPage}
            project={proj}
            technologies={technologies}
            index={index}
            selectedIndex={currentPage}
            totalItems={projects.length}
          />
        ))}
      </div>
    </div>
  );
}
export default Projects;
