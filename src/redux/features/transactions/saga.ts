import { call, put, takeLatest } from "redux-saga/effects";
import axios from "axios";
import {
  fetchRecentTransactionsRequest,
  fetchRecentTransactionsSuccess,
  fetchRecentTransactionsFailure,
} from "./slice";

export function* fetchTransaction() {
  try {
    const response = yield call(axios.get, "/api/transactions/recent");
    yield put(fetchRecentTransactionsSuccess(response.data));
  } catch (error: any) {
    yield put(fetchRecentTransactionsFailure(error.message));
  }
}

export function* watchTransaction() {
  yield takeLatest(fetchRecentTransactionsRequest.type, fetchTransaction);
}
