import { put, takeEvery, call } from "redux-saga/effects";
import { increment } from "@/redux/features/counter/slice";
import { delay } from "@/utils/delay";

export const incrementAsyncRequest = "counter/incrementAsyncRequest";

export function* incrementAsync() {
  try {
    yield call(delay, 1000);
    yield put(increment());
  } catch {
    console.log("error happend incrementAsync");
  }
}

export function* watchIncrementAsync() {
  yield takeEvery(incrementAsyncRequest, incrementAsync);
}
