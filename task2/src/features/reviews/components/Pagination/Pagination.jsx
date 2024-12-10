import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPagination } from '../../reviewsSlice';
import { Button } from '../../components'
import styles from './Pagination.module.css';

export const Pagination = () => {
  const { currentPage, pageSize } = useSelector((state) => state?.reviews?.pagination);
  const totalReviews = useSelector((state) => state?.reviews?.tempReviews?.length);
  const totalPages = Math.ceil(totalReviews / pageSize);
  const dispatch = useDispatch();

  const handlePageChange = (page) => {
    dispatch(setPagination({ currentPage: page }));
  };

  return (
    <div className={styles.pagination}>
      {Array.from({ length: totalPages }).map((_, index) => (
        <Button
          key={index}
          disabled={currentPage === index + 1}
          onClick={() => handlePageChange(index + 1)}
          title={index + 1}
        />
      ))}
    </div>
  );
};
