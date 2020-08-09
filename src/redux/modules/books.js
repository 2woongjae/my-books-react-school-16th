import { createActions, handleActions, createAction } from 'redux-actions';
import BookService from '../../services/BookService';
import { put, delay, select, call, takeEvery } from 'redux-saga/effects';

const prefix = 'my-books/books';

const { start, success, fail } = createActions(
  {
    SUCCESS: (books) => ({ books }),
  },
  'START',
  'FAIL',
  { prefix },
);

// initial state
const initialState = {
  loading: false,
  books: [],
  error: null,
};

// reducer
const reducer = handleActions(
  {
    START: () => ({
      loading: true,
      books: [],
      error: null,
    }),
    SUCCESS: (state, action) => ({
      loading: false,
      books: action.payload.books,
      error: null,
    }),
    FAIL: (state, action) => ({
      loading: false,
      books: [],
      error: action.error,
    }),
  },
  initialState,
  { prefix },
);
export default reducer;

// saga
const START_GET_BOOKS = `${prefix}/START_GET_BOOKS`;

export const startGetBooksActionCreator = createAction(START_GET_BOOKS);

function* startGetBooksSaga() {
  try {
    yield put(start());
    yield delay(2000);
    const token = yield select((state) => state.auth.token);
    const books = yield call(BookService.getBooks, token);
    yield put(success(books));
  } catch (error) {
    yield put(fail(error));
  }
}

export function* booksSaga() {
  yield takeEvery(START_GET_BOOKS, startGetBooksSaga);
}
