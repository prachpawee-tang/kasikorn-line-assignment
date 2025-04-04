import { RootState } from "@/redux/store";
import { createSelector } from "@reduxjs/toolkit";

export const selectAllAccounts = (state: RootState) => state.accounts.accounts;

export const selectMainAccount = createSelector(
  [selectAllAccounts],
  (accounts) => accounts?.find((acc) => acc.isMainAccount)
);

export const selectAccounts = createSelector([selectAllAccounts], (accounts) =>
  accounts?.filter((acc) => !acc.isMainAccount)
);
