import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "@/redux/features/counter/slice";

export const makeStore = () => {
  const store = configureStore({
    reducer: {
      counter: counterReducer,
    },
  });

  return store;
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
