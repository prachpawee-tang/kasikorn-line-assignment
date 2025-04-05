import bannersReducer, {
  fetchBannersFailure,
  fetchBannersRequest,
  fetchBannersSuccess,
} from "@/redux/features/banners/slice";
import { Banner } from "@/types";

describe("banners slice", () => {
  const initialState = {
    banners: [],
    loading: false,
    error: null,
  };

  it("should handle fetchBannersRequest", () => {
    const nextState = bannersReducer(initialState, fetchBannersRequest());
    expect(nextState.loading).toBe(true);
    expect(nextState.error).toBeNull();
  });

  it("should handle fetchBannersSuccess", () => {
    const mockBanners: Banner[] = [
      {
        title: "Want some money?",
        description: "You can start apply 'Clare'",
        image: "https://dummyimage.com/54x54/999/fff",
      },
    ];
    const nextState = bannersReducer(
      initialState,
      fetchBannersSuccess(mockBanners)
    );
    expect(nextState.loading).toBe(false);
    expect(nextState.banners).toEqual(mockBanners);
  });

  it("should handle fetchBannersFailure", () => {
    const errorMessage = "Failed to fetch banners";
    const nextState = bannersReducer(
      initialState,
      fetchBannersFailure(errorMessage)
    );
    expect(nextState.loading).toBe(false);
    expect(nextState.error).toBe(errorMessage);
  });
});
