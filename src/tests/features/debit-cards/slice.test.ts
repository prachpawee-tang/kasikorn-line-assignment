import debitCardsReducer, {
  fetchDebitCardsFailure,
  fetchDebitCardsRequest,
  fetchDebitCardsSuccess,
} from "@/redux/features/debit-cards/slice";
import { DebitCard } from "@/types";

describe("debit cards slice", () => {
  const initialState = {
    DebitCards: [],
    loading: false,
    error: null,
  };

  it("should handle fetchDebitCardsRequest", () => {
    const nextState = debitCardsReducer(initialState, fetchDebitCardsRequest());
    expect(nextState.loading).toBe(true);
    expect(nextState.error).toBeNull();
  });

  it("should handle fetchDebitCardsSuccess", () => {
    const mockDebit: DebitCard[] = [
      {
        name: "My Salary",
        status: "in-progress",
        issuer: "TestLab",
        color: "#00a1e2",
      },
      {
        name: "For My Dream",
        status: "in-progress",
        issuer: "TestLab",
        color: "#ff8300",
      },
    ];
    const nextState = debitCardsReducer(
      initialState,
      fetchDebitCardsSuccess(mockDebit)
    );
    expect(nextState.loading).toBe(false);
    expect(nextState.DebitCards).toEqual(mockDebit);
  });

  it("should handle fetchDebitCardsFailure", () => {
    const errorMessage = "Failed to fetch debit cards";
    const nextState = debitCardsReducer(
      initialState,
      fetchDebitCardsFailure(errorMessage)
    );
    expect(nextState.loading).toBe(false);
    expect(nextState.error).toBe(errorMessage);
  });
});
