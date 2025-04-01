import { all } from "redux-saga/effects";
import { watchUser } from "./features/user/saga";
import { watchAccounts } from "./features/accounts/saga";
import { watchBanner } from "./features/banners/saga";
import { watchDebitCard } from "./features/debit-cards/saga";
import { watchTransaction } from "./features/transactions/saga";

export function* rootSaga() {
  yield all([
    watchUser(),
    watchAccounts(),
    watchBanner(),
    watchDebitCard(),
    watchTransaction(),
  ]);
}
