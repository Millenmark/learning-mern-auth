/* eslint-disable no-unused-vars */
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

const baseQuery = fetchBaseQuery({ baseUrl: ""}) //empty string because we're using a proxy, if we're not. you need to put http://localhost: 5000 in the baseUrl

export const apiSlice = createApi({
  baseQuery,
  tagTypes: ["User"],
  endpoints: (builder) => ({})
})