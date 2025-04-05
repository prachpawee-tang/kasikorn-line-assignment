import transactionsReducer, {
  fetchRecentTransactionsFailure,
  fetchRecentTransactionsRequest,
  fetchRecentTransactionsSuccess,
} from "@/redux/features/transactions/slice";
import { Recent } from "@/types";

describe("transactions slice", () => {
  const initialState = {
    recents: [],
    loading: false,
    error: null,
  };

  it("should handle fetchRecentTransactionsRequest", () => {
    const nextState = transactionsReducer(
      initialState,
      fetchRecentTransactionsRequest()
    );
    expect(nextState.loading).toBe(true);
    expect(nextState.error).toBeNull();
  });

  it("should handle fetchRecentTransactionsSuccess", () => {
    const mockRecent: Recent[] = [
      {
        name: "Emily",
        image: "https://dummyimage.com/54x54/999/fff",
        isBank: false,
      },
      {
        name: "Jone Kiersten",
        image: "https://dummyimage.com/54x54/999/fff",
        isBank: false,
      },
    ];
    const nextState = transactionsReducer(
      initialState,
      fetchRecentTransactionsSuccess(mockRecent)
    );
    expect(nextState.loading).toBe(false);
    expect(nextState.recents).toEqual(mockRecent);
  });

  it("should handle fetchRecentTransactionsFailure", () => {
    const errorMessage = "Failed to fetch recent transactions";
    const nextState = transactionsReducer(
      initialState,
      fetchRecentTransactionsFailure(errorMessage)
    );
    expect(nextState.loading).toBe(false);
    expect(nextState.error).toBe(errorMessage);
  });
});
