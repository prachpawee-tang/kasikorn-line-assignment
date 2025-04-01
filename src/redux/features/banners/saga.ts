import { call, put, takeLatest } from "redux-saga/effects";
import axios from "axios";
import {
  fetchBannersRequest,
  fetchBannersSuccess,
  fetchBannersFailure,
} from "./slice";

export function* fetchBanner() {
  try {
    const response = yield call(axios.get, "/api/banners");
    yield put(fetchBannersSuccess(response.data));
  } catch (error: any) {
    yield put(fetchBannersFailure(error.message));
  }
}

export function* watchBanner() {
  yield takeLatest(fetchBannersRequest.type, fetchBanner);
}
