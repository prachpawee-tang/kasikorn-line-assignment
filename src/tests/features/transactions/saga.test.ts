import { expectSaga } from "redux-saga-test-plan";
import * as matchers from "redux-saga-test-plan/matchers";
import { throwError } from "redux-saga-test-plan/providers";
import axios from "axios";

import { fetchTransaction } from "@/redux/features/transactions/saga";
import {
  fetchRecentTransactionsFailure,
  fetchRecentTransactionsSuccess,
} from "@/redux/features/transactions/slice";

describe("Banners Saga", () => {
  const mockTransactions = [];

  it("should handle successful recent transactions fetch", () => {
    return expectSaga(fetchTransaction)
      .provide([
        [
          matchers.call(axios.get, "/api/transactions/recent"),
          { data: mockTransactions },
        ],
      ])
      .put(fetchRecentTransactionsSuccess(mockTransactions))
      .run();
  });

  it("should handle failed recent transaction fetch", () => {
    const error = new Error("Failed to fetch recent transactions");

    return expectSaga(fetchTransaction)
      .provide([
        [
          matchers.call(axios.get, "/api/transactions/recent"),
          throwError(error),
        ],
      ])
      .put(fetchRecentTransactionsFailure(error.message))
      .run();
  });
});
