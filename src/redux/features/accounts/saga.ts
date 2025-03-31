import { call, put, takeLatest } from "redux-saga/effects";
import axios from "axios";
import {
  fetchAccountsRequest,
  fetchAccountsSuccess,
  fetchAccountsFailure,
} from "./slice";

export function* fetchAccountsSaga() {
  try {
    const response = yield call(axios.get, "/api/accounts");
    yield put(fetchAccountsSuccess(response.data));
  } catch (error: any) {
    yield put(fetchAccountsFailure(error.message));
  }
}

export function* watchAccounts() {
  yield takeLatest(fetchAccountsRequest.type, fetchAccountsSaga);
}
