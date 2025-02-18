import { baseApi } from "../../api/baseApi";

const productManagement = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addBook: builder.mutation({
      query: (data) => ({
        url: "/products",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useAddBookMutation } = productManagement;
