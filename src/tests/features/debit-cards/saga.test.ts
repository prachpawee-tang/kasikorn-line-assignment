import { expectSaga } from "redux-saga-test-plan";
import * as matchers from "redux-saga-test-plan/matchers";
import { throwError } from "redux-saga-test-plan/providers";
import axios from "axios";

import { fetchDebitCard } from "@/redux/features/debit-cards/saga";
import {
  fetchDebitCardsFailure,
  fetchDebitCardsSuccess,
} from "@/redux/features/debit-cards/slice";

describe("Debit Cards Saga", () => {
  const mockDebitCards = [];

  it("should handle successful debit cards fetch", () => {
    return expectSaga(fetchDebitCard)
      .provide([
        [
          matchers.call(axios.get, "/api/debit-cards"),
          { data: mockDebitCards },
        ],
      ])
      .put(fetchDebitCardsSuccess(mockDebitCards))
      .run();
  });

  it("should handle failed debit cards fetch", () => {
    const error = new Error("Failed to fetch debit cards");

    return expectSaga(fetchDebitCard)
      .provide([
        [matchers.call(axios.get, "/api/debit-cards"), throwError(error)],
      ])
      .put(fetchDebitCardsFailure(error.message))
      .run();
  });
});
