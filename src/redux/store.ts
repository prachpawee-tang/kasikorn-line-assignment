import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import userReducer from "@/redux/features/user/slice";
import accountsReducer from "@/redux/features/accounts/slice";
import bannersReducer from "@/redux/features/banners/slice";
import debitCardsReducer from "@/redux/features/debit-cards/slice";
import transactionsReducer from "@/redux/features/transactions/slice";
import { rootSaga } from "@/redux/rootSaga";

const sagaMiddleware = createSagaMiddleware();

export const makeStore = () => {
  const store = configureStore({
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(sagaMiddleware),
    reducer: {
      user: userReducer,
      accounts: accountsReducer,
      banners: bannersReducer,
      debitCards: debitCardsReducer,
      transactions: transactionsReducer,
    },
  });

  sagaMiddleware.run(rootSaga);
  return store;
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
