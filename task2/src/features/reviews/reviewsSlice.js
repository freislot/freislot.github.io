import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  reviews: [],
  tempReviews: [],
  isLoading: false,
  filters: {
    platform: null,
    ratingRange: [1, 5],
  },
  searchQuery: '',
  sort: {
    field: 'date',
    order: 'desc',
  },
  pagination: {
    currentPage: 1,
    pageSize: 8,
  },
};

const reviewsSlice = createSlice({
  name: 'reviews',
  initialState,
  reducers: {
    setReviews(state, action) {
      state.reviews = action.payload;
    },
    setTempReviews(state, action) {
      state.tempReviews = action.payload;
    },
    setLoading(state, action) {
      state.isLoading = action.payload;
    },
    setFilters(state, action) {
      state.filters = { ...state.filters, ...action.payload };
    },
    setSearchQuery(state, action) {
      state.searchQuery = action.payload;
    },
    setSort(state, action) {
      state.sort = action.payload;
    },
    setPagination(state, action) {
      state.pagination = { ...state.pagination, ...action.payload };
    },
  },
});

export const {
  setReviews,
  setLoading,
  setFilters,
  setSearchQuery,
  setSort,
  setPagination,
  setTempReviews
} = reviewsSlice.actions;

export default reviewsSlice.reducer;
