import React from 'react';
import { useDispatch } from 'react-redux';
import { setFilters, setSort } from '../../reviewsSlice';
import styles from './Filters.module.css';

export const Filters = () => {
  const dispatch = useDispatch();

  const handlePlatformChange = (e) => {
    dispatch(setFilters({ platform: e.target.value || null }));
  };

  const handleRatingChange = (e) => {
    const [min, max] = e.target.value.split('-').map(Number);
    dispatch(setFilters({ ratingRange: [min, max] }));
  };

  const handleSortChange = (e) => {
    const [field, order] = e.target.value.split('-');
    dispatch(setSort({ field, order }));
  };

  return (
    <div className={styles.filters}>
      <select onChange={handlePlatformChange}>
        <option value="">Все платформы</option>
        <option value="Google">Google</option>
        <option value="Яндекс">Яндекс</option>
        <option value="2ГИС">2ГИС</option>
      </select>
      <select onChange={handleRatingChange}>
        <option value="1-5">Все рейтинги</option>
        <option value="4-5">4-5</option>
        <option value="1-3">1-3</option>
      </select>
      <select onChange={handleSortChange}>
        <option value="date-desc">Дата: новые сначала</option>
        <option value="date-asc">Дата: старые сначала</option>
        <option value="rating-desc">Рейтинг: высокий → низкий</option>
        <option value="rating-asc">Рейтинг: низкий → высокий</option>
      </select>
    </div>
  );
};
