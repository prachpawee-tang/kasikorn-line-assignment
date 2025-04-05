import userReducer, {
  fetchUserFailure,
  fetchUserRequest,
  fetchUserSuccess,
} from "@/redux/features/user/slice";
import { User } from "@/types";

describe("banners slice", () => {
  const initialState = {
    name: "",
    greetingMessage: "",
    loading: false,
    error: null,
  };

  it("should handle fetchUserRequest", () => {
    const nextState = userReducer(initialState, fetchUserRequest());
    expect(nextState.loading).toBe(true);
    expect(nextState.error).toBeNull();
  });

  it("should handle fetchUserSuccess", () => {
    const mockUser: User = {
      name: "Clare",
      greetingMessage: "Have a nice day Clare",
    };
    const nextState = userReducer(initialState, fetchUserSuccess(mockUser));
    expect(nextState.loading).toBe(false);
    expect(nextState.name).toEqual(mockUser.name);
    expect(nextState.greetingMessage).toEqual(mockUser.greetingMessage);
  });

  it("should handle fetchUserFailure", () => {
    const errorMessage = "Failed to fetch user";
    const nextState = userReducer(initialState, fetchUserFailure(errorMessage));
    expect(nextState.loading).toBe(false);
    expect(nextState.error).toBe(errorMessage);
  });
});
