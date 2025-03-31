import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  name: string;
  greetingMessage: string;
  loading: boolean;
  error: string | null;
}

const initialState: UserState = {
  name: "",
  greetingMessage: "",
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    fetchUserRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchUserSuccess: (
      state,
      action: PayloadAction<{ name: string; greetingMessage: string }>
    ) => {
      state.loading = false;
      state.name = action.payload.name;
      state.greetingMessage = action.payload.greetingMessage;
    },
    fetchUserFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchUserRequest, fetchUserSuccess, fetchUserFailure } =
  userSlice.actions;
export default userSlice.reducer;
