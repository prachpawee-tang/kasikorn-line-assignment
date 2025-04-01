import { call, put, takeLatest } from "redux-saga/effects";
import axios from "axios";
import {
  fetchDebitCardsRequest,
  fetchDebitCardsSuccess,
  fetchDebitCardsFailure,
} from "./slice";

export function* fetchDebitCard() {
  try {
    const response = yield call(axios.get, "/api/debit-cards");
    yield put(fetchDebitCardsSuccess(response.data));
  } catch (error: any) {
    yield put(fetchDebitCardsFailure(error.message));
  }
}

export function* watchDebitCard() {
  yield takeLatest(fetchDebitCardsRequest.type, fetchDebitCard);
}
