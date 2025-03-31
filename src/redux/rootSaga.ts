import { all } from "redux-saga/effects";
import { watchIncrementAsync } from "@/redux/features/counter/saga";

export function* helloSaga() {
  console.log("Hello Sagas!");
}

export function* rootSaga() {
  yield all([helloSaga(), watchIncrementAsync()]);
}
