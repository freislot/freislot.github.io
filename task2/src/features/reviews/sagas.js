import { call, put, takeLatest } from 'redux-saga/effects';
import { setReviews, setLoading } from './reviewsSlice';
import { fetchCount } from './reviewsAPI';

function* fetchReviews() {
  try {
    yield put(setLoading(true));
    const reviews = yield call(fetchCount);
    yield put(setReviews(reviews));
  } finally {
    yield put(setLoading(false));
  }
}

export default function* reviewsSaga() {
  yield takeLatest('reviews/fetchReviews', fetchReviews);
}
