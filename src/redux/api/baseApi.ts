// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// // Base query with credentials
// const baseQuery = fetchBaseQuery({
//   baseUrl: "http://localhost:5000/api",
//   credentials: "include",
// });

// export const baseApi = createApi({
//   reducerPath: "baseApi",
//   baseQuery: baseQuery,
//   endpoints: () => ({}),
// });

// export default baseApi;

import {
  BaseQueryApi,
  BaseQueryFn,
  DefinitionType,
  FetchArgs,
  createApi,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";
import { logout, setUser } from "../features/auth/AuthSlice";
import { toast } from "sonner";

const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:5000/api",
  credentials: "include",
  // prepareHeaders: (headers, { getState }) => {
  //   const token = (getState() as RootState).auth.token;

  //   if (token) {
  //     headers.set("authorization", `${token}`);
  //   }

  //   return headers;
  // },
});

const baseQueryWithRefreshToken: BaseQueryFn<
  FetchArgs,
  BaseQueryApi,
  DefinitionType
> = async (args, api, extraOptions): Promise<any> => {
  let result = await baseQuery(args, api, extraOptions);
  console.log("from base api", result.error);

  if (result?.error?.status === 500) {
    toast.error(result.error.data.errorSources[0].message);
  }
  if (result?.error?.status === 400) {
    toast.error(result.error.data.message);
  }
  if (result?.error?.status === 403) {
    toast.error(result.error.data.message);
  }

  return result;
};

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: baseQuery,
  tagTypes: ["semester", "courses", "offeredCourse"],
  endpoints: () => ({}),
});
