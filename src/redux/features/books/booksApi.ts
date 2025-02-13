import { baseApi } from "../../api/baseApi";

const booksApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllBooks: builder.query({
      query: (args) => {
        console.log("from api call function args", args);
        return {
          url: "/products",
          method: "GET",
        };
      },
    }),
    getBookById: builder.query({
      query: (id) => ({
        url: `/products/${id}`, // Dynamic URL
        method: "GET",
      }),
    }),
  }),
});

export const { useGetAllBooksQuery, useGetBookByIdQuery } = booksApi;
