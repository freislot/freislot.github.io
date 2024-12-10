import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { 
  Button, 
  Loader,
  ReviewsTable,
  Filters,
  SearchBar,
  Pagination
} from './components';

export const Reviews = () => {
  const { isLoading, reviews } = useSelector((state) => state?.reviews);
  const dispatch = useDispatch();

  return (
    <>
      {!reviews?.length &&
        <Button
          onClick={() => dispatch({ type: 'reviews/fetchReviews' })}
          title="Загрузить список отзывов"
          customStyles={{
            marginBottom: '32px'
          }}
        />
      }
      
      {isLoading && <Loader />}
      {!!reviews?.length && (
        <>
          <SearchBar />
          <Filters />
          <ReviewsTable />
          <Pagination />
        </>
      )}
    </>
  );
}
