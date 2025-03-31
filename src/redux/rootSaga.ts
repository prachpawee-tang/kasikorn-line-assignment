import { all } from "redux-saga/effects";
import { watchUser } from "./features/user/saga";
import { watchAccounts } from "./features/accounts/saga";

export function* rootSaga() {
  yield all([watchUser(), watchAccounts()]);
}
