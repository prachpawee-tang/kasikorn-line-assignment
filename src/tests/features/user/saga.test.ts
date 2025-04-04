import { expectSaga } from "redux-saga-test-plan";
import * as matchers from "redux-saga-test-plan/matchers";
import { throwError } from "redux-saga-test-plan/providers";
import axios from "axios";

import { fetchUser } from "@/redux/features/user/saga";
import {
  fetchUserFailure,
  fetchUserSuccess,
} from "@/redux/features/user/slice";

describe("User Saga", () => {
  const mockUser = {
    name: "Clare",
    greetingMessage: "Have a nice day Clare",
  };

  it("should handle successful user fetch", () => {
    return expectSaga(fetchUser)
      .provide([[matchers.call(axios.get, "/api/user"), { data: mockUser }]])
      .put(fetchUserSuccess(mockUser))
      .run();
  });

  it("should handle failed user fetch", () => {
    const error = new Error("Failed to fetch user");

    return expectSaga(fetchUser)
      .provide([[matchers.call(axios.get, "/api/user"), throwError(error)]])
      .put(fetchUserFailure(error.message))
      .run();
  });
});
