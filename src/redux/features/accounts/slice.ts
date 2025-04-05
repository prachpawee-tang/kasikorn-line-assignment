import { Account } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AccountState {
  accounts: Account[];
  loading: boolean;
  error: string | null;
}

const initialState: AccountState = {
  accounts: [],
  loading: false,
  error: null,
};

const accountSlice = createSlice({
  name: "accounts",
  initialState,
  reducers: {
    fetchAccountsRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchAccountsSuccess: (state, action: PayloadAction<Account[]>) => {
      state.loading = false;
      state.accounts = action.payload;
    },
    fetchAccountsFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchAccountsRequest,
  fetchAccountsSuccess,
  fetchAccountsFailure,
} = accountSlice.actions;
export default accountSlice.reducer;
