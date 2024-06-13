'use client';

import { CSSProperties, useState } from 'react';
// Components & Styles
import styles from './Pagination.module.css';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Props {
  initValue: number;
  maxPage?: number;
  page: (value: number) => void;
  paginationStyles?: CSSProperties;
}

function Pagination({ initValue, page, maxPage = 10, paginationStyles }: Props): JSX.Element {
  const [currentPage, setCurrentPage] = useState(initValue < 1 ? 1 : initValue);

  const previousPage = () => {
    let newPage = Math.max(0, currentPage - 1);
    if (newPage === 0) newPage = maxPage;
    setCurrentPage(newPage);
    page(newPage);
  };

  const nextPage = () => {
    let newPage = Math.min(maxPage + 1, currentPage + 1);
    if (newPage === maxPage + 1) newPage = 1;
    setCurrentPage(newPage);
    page(newPage);
  };

  return (
    <div className={styles.pagination} style={paginationStyles}>
      <button type='button' name='left' onClick={previousPage}>
        <ChevronLeft />
      </button>
      <button type='button' name='right' onClick={nextPage}>
        <ChevronRight />
      </button>
    </div>
  );
}
export default Pagination;
