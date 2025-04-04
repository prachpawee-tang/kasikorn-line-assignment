import { expectSaga } from "redux-saga-test-plan";
import * as matchers from "redux-saga-test-plan/matchers";
import { throwError } from "redux-saga-test-plan/providers";
import axios from "axios";

import { fetchAccountsSaga } from "@/redux/features/accounts/saga";
import {
  fetchAccountsSuccess,
  fetchAccountsFailure,
} from "@/redux/features/accounts/slice";

describe("Accounts Saga", () => {
  const mockAccounts = [
    {
      type: "smart-account" as const,
      amount: 62000.0,
      currency: "THB",
      accountNumber: "568-2-81740-9",
      issuer: "TestLab",
      color: "#24c875",
      isMainAccount: true,
      accountName: "Saving Account",
    },
    {
      type: "credit-loan" as const,
      amount: 300.1,
      currency: "THB",
      accountNumber: "568-2-81740-9",
      issuer: "TestLab",
      color: "#9366ed",
      isMainAccount: false,
      accountName: "Credit Loan",
    },
    {
      type: "goal-saving-account" as const,
      amount: 30000.0,
      currency: "THB",
      accountNumber: "568-2-81740-9",
      issuer: "TestLab",
      progress: 24,
      color: "#00a1e2",
      isMainAccount: false,
      accountName: "Travel New York",
    },
    {
      type: "credit-loan" as const,
      amount: 30000.0,
      currency: "THB",
      accountNumber: "568-2-81740-9",
      issuer: "TestLab",
      flags: ["Disbursement", "Overdue"],
      color: "#15bbc7",
      isMainAccount: false,
      accountName: "Need to repay",
    },
  ];

  it("should handle successful accounts fetch", () => {
    return expectSaga(fetchAccountsSaga)
      .provide([
        [matchers.call(axios.get, "/api/accounts"), { data: mockAccounts }],
      ])
      .put(fetchAccountsSuccess(mockAccounts))
      .run();
  });

  it("should handle failed accounts fetch", () => {
    const error = new Error("Failed to fetch accounts");

    return expectSaga(fetchAccountsSaga)
      .provide([[matchers.call(axios.get, "/api/accounts"), throwError(error)]])
      .put(fetchAccountsFailure(error.message))
      .run();
  });
});
