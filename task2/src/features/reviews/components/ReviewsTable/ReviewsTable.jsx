import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './ReviewsTable.module.css';
import { setTempReviews } from '../../reviewsSlice';

export const ReviewsTable = () => {
  const { reviews, filters, searchQuery, sort, pagination } = useSelector((state) => state?.reviews);
  const dispatch = useDispatch();

  const filteredReviews = reviews
    ?.filter((review) => !filters?.platform || review?.platform === filters?.platform)
    ?.filter((review) => review?.rating >= filters?.ratingRange[0] && review?.rating <= filters?.ratingRange[1])
    ?.filter((review) => review?.text?.toLowerCase()?.includes(searchQuery?.toLowerCase()));

    const sortedReviews = [...filteredReviews]?.sort((a, b) => {
      if (sort?.field === 'date') {
        return sort?.order === 'asc' ? new Date(a?.date) - new Date(b?.date) : new Date(b?.date) - new Date(a?.date);
      } else if (sort?.field === 'rating') {
        return sort?.order === 'asc' ? a?.rating - b?.rating : b?.rating - a?.rating;
      }
      return 0;
    });
    

  const paginatedReviews = sortedReviews?.slice(
    (pagination?.currentPage - 1) * pagination?.pageSize,
    pagination?.currentPage * pagination?.pageSize
  );

  useEffect(() => {
    dispatch(setTempReviews(sortedReviews))
  }, [filters, sort])

  return (
    <div className={styles.tableWrapper}>
      <table className={styles?.table}>
        <thead>
          <tr>
            <th>Платформа</th>
            <th>Рейтинг</th>
            <th>Дата</th>
            <th>Текст</th>
          </tr>
        </thead>
        <tbody>
          {paginatedReviews?.map((review) => (
            <tr key={review?.id}>
              <td width="15%">{review?.platform}</td>
              <td width="15%">{review?.rating}</td>
              <td width="30%">{new Date(review?.date)?.toLocaleString()}</td>
              <td width="40%">{review?.text}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
