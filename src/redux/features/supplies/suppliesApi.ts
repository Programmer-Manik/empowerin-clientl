import { baseApi } from "@/redux/api/baseApi";

const suppliesApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getSupplies: builder.query({
      query: () => ({
        url: "/api/v1/supplies",
        method: "GET",
      }),
      providesTags: ["supplies"],
    }),

    addSupply: builder.mutation({
      query: (supply) => {
        return {
          url: "/api/v1/create-supply",
          method: "POST",
          body: supply,
        };
      },
      invalidatesTags: ["supplies"],
    }),

    updateSupply: builder.mutation({
      query: ({ id, updateDoc }) => {
        return {
          url: `/api/v1/update-supply/${id}`,
          method: "PUT",
          body: updateDoc,
        };
      },
      invalidatesTags: ["supplies"],
    }),

    deleteSupply: builder.mutation({
      query: (id) => {
        return {
          url: `/api/v1/delete-supply/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["supplies"],
    }),
  }),
});
export const {
  useGetSuppliesQuery,
  useAddSupplyMutation,
  useUpdateSupplyMutation,
  useDeleteSupplyMutation,
} = suppliesApi;
export default suppliesApi.reducer;
