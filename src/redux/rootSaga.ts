import { all } from "redux-saga/effects";
import { watchIncrementAsync } from "@/redux/features/counter/saga";
import { watchUser } from "./features/user/saga";
import { watchAccounts } from "./features/accounts/saga";

export function* rootSaga() {
  yield all([watchIncrementAsync(), watchUser(), watchAccounts()]);
}
