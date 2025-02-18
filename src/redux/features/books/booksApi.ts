import { baseApi } from "../../api/baseApi";

const booksApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllBooks: builder.query({
      query: (params = {}) => {
        // Convert params object into a query string
        const queryParams = new URLSearchParams(params).toString();
        return {
          url: `/products${queryParams ? `?${queryParams}` : ""}`, // Append params dynamically
          method: "GET",
        };
      },
    }),
    getBookById: builder.query({
      query: (id) => ({
        url: `/products/${id}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetAllBooksQuery, useGetBookByIdQuery } = booksApi;
