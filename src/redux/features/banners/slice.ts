import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Banner {
  title: string;
  description: string;
  image: string;
}

interface BannerState {
  banners: Banner[];
  loading: boolean;
  error: string | null;
}

const initialState: BannerState = {
  banners: [],
  loading: false,
  error: null,
};

const bannersSlice = createSlice({
  name: "banner",
  initialState,
  reducers: {
    fetchBannersRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchBannersSuccess: (state, action: PayloadAction<Banner[]>) => {
      state.loading = false;
      state.banners = action.payload;
    },
    fetchBannersFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchBannersRequest, fetchBannersSuccess, fetchBannersFailure } =
  bannersSlice.actions;
export default bannersSlice.reducer;
