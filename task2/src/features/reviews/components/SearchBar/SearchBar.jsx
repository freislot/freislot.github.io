import React from 'react';
import { useDispatch } from 'react-redux';
import { setSearchQuery } from '../../reviewsSlice';
import { Input } from '../../components';

export const SearchBar = () => {
  const dispatch = useDispatch();

  const handleSearchChange = (e) => {
    dispatch(setSearchQuery(e.target.value));
  };

  return (
    <Input
      name="search"
      label="Поиск по тексту отзыва"
      placeholder="Поиск по тексту отзыва"
      onChange={handleSearchChange}
    />
  );
};
