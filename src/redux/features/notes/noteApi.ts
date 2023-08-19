/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { api } from "../../api/apiSlice";



const userApi = api.injectEndpoints({
  endpoints: (builder) => ({

    createNote: builder.mutation({
      query: ({ data }) => ({
        url: `/api/v1/createnote`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["notes"],
    }),
  }),
});

export const { useCreateNoteMutation } =
  userApi;
