import { expectSaga } from "redux-saga-test-plan";
import * as matchers from "redux-saga-test-plan/matchers";
import { throwError } from "redux-saga-test-plan/providers";
import axios from "axios";

import { fetchBanner } from "@/redux/features/banners/saga";
import {
  fetchBannersSuccess,
  fetchBannersFailure,
} from "@/redux/features/banners/slice";

describe("Banners Saga", () => {
  const mockBanners = [];

  it("should handle successful banners fetch", () => {
    return expectSaga(fetchBanner)
      .provide([
        [matchers.call(axios.get, "/api/banners"), { data: mockBanners }],
      ])
      .put(fetchBannersSuccess(mockBanners))
      .run();
  });

  it("should handle failed banners fetch", () => {
    const error = new Error("Failed to fetch banners");

    return expectSaga(fetchBanner)
      .provide([[matchers.call(axios.get, "/api/banners"), throwError(error)]])
      .put(fetchBannersFailure(error.message))
      .run();
  });
});
