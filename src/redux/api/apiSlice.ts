/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  createApi,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";
// import { RootState } from "../store";

const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:5000",
  credentials: "include",
  // prepareHeaders: (headers, { getState }) => {
  //   const state = (getState() as unknown) as RootState; // Explicit cast here
  //   const token = state.auth.token;
  //   console.log(token);
    
  //   if (token) {
  //     headers.set("Authorization", `Bearer ${token}`);
  //   }
  //   return headers;
  // },
});

export const api = createApi({
  reducerPath: "api",
  baseQuery: baseQuery,
  tagTypes: ["user", "notes"],
  endpoints: () => ({}),
});


// function getState(): { auth: any; api: import("@reduxjs/toolkit/dist/query/core/apiState").CombinedState<{}, "user" | "notes", "api"> } {
//   throw new Error('Function not implemented.')
// }
// const baseQuery = fetchBaseQuery({
//   baseUrl: 'http://localhost:3500',
//   credentials: 'include',
//   prepareHeaders: (headers, { getState }) => {
//     const state = api.getState() as RootState;
//       const token = state.auth.token
//       if (token) {
//           headers.set("authorization", `Bearer ${token}`)
//       }
//       return headers
//   }
// })

// const baseQueryWithReauth = async (args: string | FetchArgs, api: BaseQueryApi, extraOptions: {}) => {
//   let result = await baseQuery(args, api, extraOptions)

//   if (result?.error?.status === 403) {
//       console.log('sending refresh token')
//       // send refresh token to get new access token
//       const refreshResult = await baseQuery('/refresh', api, extraOptions)
//       console.log(refreshResult)
//       if (refreshResult?.data) {
//           const user = api.getState().auth.user
//           // store the new token
//           api.dispatch(setCredentials({ ...refreshResult.data, user }))
//           // retry the original query with new access token
//           result = await baseQuery(args, api, extraOptions)
//       } else {
//           // api.dispatch(logOut())
//       }
//   }

//   return result
// }

// export const apiSlice = createApi({
//   baseQuery: baseQueryWithReauth,
//   endpoints: builder => ({})
// })

// import { BaseQueryApi, FetchArgs, createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
// import { RootState } from '../store'
// import { setCredentials } from '../features/user/userSlice'

// const baseQuery = fetchBaseQuery({
//   baseUrl: 'http://localhost:5000',
//   credentials: 'include',
//   prepareHeaders: (headers, { getState }) => {
//     const token = (getState() as RootState).auth.token;
//     if (token) {
//       headers.set("authorization", `Bearer ${token}`);
//     }
//     return headers;
//   },
// });

// const baseQueryWithReauth = async (args: string | FetchArgs, api: BaseQueryApi, extraOptions: {}) => {
//   let result = await baseQuery(args, api, extraOptions)

//   if (result?.error?.status === 403) {
//     console.log('sending refresh token');
//     // send refresh token to get a new access token
//     const refreshResult = await baseQuery('/refresh', api, extraOptions);
//     console.log(refreshResult);
//     if (refreshResult?.data) {
//       const user = (api.getState() as { auth: { user: unknown } }).auth.user // Replace 'User' with the appropriate type for your user data
//       // store the new token
//       api.dispatch(setCredentials({ ...refreshResult.data, user }));
//       // retry the original query with the new access token
//       result = await baseQuery(args, api, extraOptions);
//     } else {
//       // handle the case where refresh token fails
//       // api.dispatch(logOut())
//     }
//   }

//   return result;
// };

// export const apiSlice = createApi({
//   baseQuery: baseQueryWithReauth,
//   endpoints: (builder) => ({}),
// });

// export const api = createApi({
//   reducerPath: "api",
//   baseQuery: fetchBaseQuery({
//     baseUrl: "http://localhost:5000",
//     prepareHeaders: (headers, { getState, endpoint }) => {
//       const user = (getState() as RootState).auth

//       if (user && endpoint !== 'refresh') {
//         headers.set('Authorization', `${user}`)
//     }

//       return headers;
//     },
//     credentials: "include",
//   }),
//   tagTypes: ["user", "notes"],
//   endpoints: () => ({}),
// });
