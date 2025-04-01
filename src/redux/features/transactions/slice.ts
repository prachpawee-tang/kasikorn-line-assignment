import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Transaction {
  name: string;
  image: string;
  isBank: boolean;
}

interface TransactionState {
  recents: Transaction[];
  loading: boolean;
  error: string | null;
}

const initialState: TransactionState = {
  recents: [],
  loading: false,
  error: null,
};

const TransactionsSlice = createSlice({
  name: "Transaction",
  initialState,
  reducers: {
    fetchRecentTransactionsRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchRecentTransactionsSuccess: (
      state,
      action: PayloadAction<Transaction[]>
    ) => {
      state.loading = false;
      state.recents = action.payload;
    },
    fetchRecentTransactionsFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchRecentTransactionsRequest,
  fetchRecentTransactionsSuccess,
  fetchRecentTransactionsFailure,
} = TransactionsSlice.actions;
export default TransactionsSlice.reducer;
