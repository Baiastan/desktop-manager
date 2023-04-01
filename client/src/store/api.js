import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "http://127.0.0.1:5001/api/" }),
  reducerPath: "myApi",
  tagTypes: ["Links", "ToDo"],
  endpoints: (build) => ({
    getLinks: build.query({
      query: () => "links",
      providesTags: ["Links"],
    }),
    addLinks: build.mutation({
      query: (data) => ({
        url: "links",
        method: "POST",
        body: data,
      }),
    }),
    deleteLink: build.mutation({
      query: (id) => ({
        url: `links/${id}`,
        method: "DELETE",
      }),
    }),
    getTodo: build.query({
      query: () => "todos",
      providesTags: ["ToDo"],
    }),
    addTodo: build.mutation({
      query: (data) => ({
        url: "todos",
        method: "POST",
        body: data,
      }),
    }),
    deleteTodo: build.mutation({
      query: (id) => ({
        url: `todos/${id}`,
        method: "DELETE",
      }),
    }),
    updateTodo: build.mutation({
      query: ({ id, ...completed }) => ({
        url: `todos/${id}`,
        method: "PUT",
        body: completed,
      }),
      invalidatesTags: ["ToDo"],
    }),
  }),
});

export const {
  useGetLinksQuery,
  useAddLinksMutation,
  useDeleteLinkMutation,
  useAddTodoMutation,
  useDeleteTodoMutation,
  useGetTodoQuery,
  useUpdateTodoMutation,
} = api;
