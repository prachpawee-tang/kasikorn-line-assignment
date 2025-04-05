import accountReducer, {
  fetchAccountsRequest,
  fetchAccountsSuccess,
  fetchAccountsFailure,
} from "@/redux/features/accounts/slice";
import { Account } from "@/types";

describe("accounts slice", () => {
  const initialState = {
    accounts: [],
    loading: false,
    error: null,
  };

  it("should handle fetchAccountsRequest", () => {
    const nextState = accountReducer(initialState, fetchAccountsRequest());
    expect(nextState.loading).toBe(true);
    expect(nextState.error).toBeNull();
  });

  it("should handle fetchAccountsSuccess", () => {
    const mockAccounts: Account[] = [
      {
        type: "goal-saving-account",
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
        type: "credit-loan",
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
    const nextState = accountReducer(
      initialState,
      fetchAccountsSuccess(mockAccounts)
    );
    expect(nextState.loading).toBe(false);
    expect(nextState.accounts).toEqual(mockAccounts);
  });

  it("should handle fetchAccountsFailure", () => {
    const errorMessage = "Failed to fetch accounts";
    const nextState = accountReducer(
      initialState,
      fetchAccountsFailure(errorMessage)
    );
    expect(nextState.loading).toBe(false);
    expect(nextState.error).toBe(errorMessage);
  });
});
