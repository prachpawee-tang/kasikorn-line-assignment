import { RootState } from "@/redux/store";

export const selectMainAccount = (state: RootState) =>
  state.accounts.accounts?.find((acc) => acc.isMainAccount);

export const selectAccounts = (state: RootState) =>
  state.accounts.accounts?.filter((acc) => !acc.isMainAccount);
