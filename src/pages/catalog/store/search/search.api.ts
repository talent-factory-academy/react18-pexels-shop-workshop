import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { PexelsVideoResponse, Video } from '../../../../model/pexels-video-response';

// Define a service using a base URL and expected endpoints
export const searchAPI = createApi({
  reducerPath: 'search',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.pexels.com/videos',
    prepareHeaders: (headers, { getState }) => {
      headers.set('Authorization', import.meta.env.VITE_PEXELS_KEY);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    // query types: return type and query params <Video[], string>
    search: builder.query<Video[], string>({
      query: (text) => `/search?per_page=21&query=${text}`,
      transformResponse: (response: PexelsVideoResponse ) => response.videos,
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useSearchQuery } = searchAPI
