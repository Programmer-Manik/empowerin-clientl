import { baseApi } from "@/redux/api/baseApi";

const donationApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllDonation: builder.query({
      query: () => {
        return {
          url: "/api/v1/allDonors",
          method: "GET",
        };
      },
      providesTags: ["donations"],
    }),

    addDonation: builder.mutation({
      query: (data) => {
        return {
          url: "/api/v1/donor-collection",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["donations"],
    }),

    addGratitudeWall: builder.mutation({
      query: (data) => {
        return {
          url: "/api/v1/gratitude",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["gratitudes"],
    }),

    getAllGratitudeWall: builder.query({
      query: () => {
        return {
          url: "/api/v1/gratitude",
          method: "GET",
        };
      },
      providesTags: ["gratitudes"],
    }),
  }),
});

export const {
  useGetAllDonationQuery,
  useAddDonationMutation,
  useAddGratitudeWallMutation,
  useGetAllGratitudeWallQuery,
} = donationApi;
