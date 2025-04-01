import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface DebitCard {
  name: string;
  status: "active" | "in-progress";
  issuer: string;
  color: string;
  borderColor?: string;
  number?: string;
}

interface DebitCardState {
  DebitCards: DebitCard[];
  loading: boolean;
  error: string | null;
}

const initialState: DebitCardState = {
  DebitCards: [],
  loading: false,
  error: null,
};

const DebitCardsSlice = createSlice({
  name: "DebitCard",
  initialState,
  reducers: {
    fetchDebitCardsRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchDebitCardsSuccess: (state, action: PayloadAction<DebitCard[]>) => {
      state.loading = false;
      state.DebitCards = action.payload;
    },
    fetchDebitCardsFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchDebitCardsRequest,
  fetchDebitCardsSuccess,
  fetchDebitCardsFailure,
} = DebitCardsSlice.actions;
export default DebitCardsSlice.reducer;
