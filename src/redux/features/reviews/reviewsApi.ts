import { baseApi } from "@/redux/api/baseApi";

const reviewsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getReviews: builder.query({
      query: () => ({ url: "/api/v1/reviews", method: "GET" }),
      providesTags: ["reviews"],
    }),

    createReviews: builder.mutation({
      query: (data) => {
        return {
          url: "/api/v1/create-reviews",
          method: "POST",
          body: data,
        };
      },
    }),
  }),
});
export const { useGetReviewsQuery, useCreateReviewsMutation } = reviewsApi;
export default reviewsApi.reducer;
