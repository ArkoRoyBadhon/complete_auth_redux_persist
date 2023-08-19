/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { api } from "../../api/apiSlice";



const userApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getUser: builder.query({
      query: () => ({
        url: `/api/v1/auth/user`,
      }),
      providesTags: ["user"]
    }),
    createUser: builder.mutation({
      query: ({ data }) => ({
        url: `/api/v1/auth/signup`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["user"]
    }),
    loginUser: builder.mutation({
      query: ({ data }) => ({
        url: `/api/v1/auth/login`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["user"]
    }),
    logOut: builder.mutation({
      query: () => ({
        url: `/api/v1/auth/logout`,
        method: "POST",
      }),
      invalidatesTags: ["user"]
    }),
  }),
});

export const { useGetUserQuery, useCreateUserMutation, useLoginUserMutation, useLogOutMutation } =
  userApi;
