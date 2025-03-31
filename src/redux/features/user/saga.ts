import { call, put, takeLatest } from "redux-saga/effects";
import axios from "axios";
import { fetchUserRequest, fetchUserSuccess, fetchUserFailure } from "./slice";

export function* fetchUser() {
  try {
    const response = yield call(axios.get, "/api/user");
    yield put(fetchUserSuccess(response.data));
  } catch (error: any) {
    yield put(fetchUserFailure(error.message));
  }
}

export function* watchUser() {
  yield takeLatest(fetchUserRequest.type, fetchUser);
}
