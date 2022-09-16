import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { PexelsVideoResponse, Video } from '../../../../model/pexels-video-response';
import { FiltersState } from '../filters/search-filters.store';

export const videosSearchAPI = createApi({
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
    search: builder.query<Video[], FiltersState>({
      query: (filters) => `/search?per_page=${filters.totalItems}&query=${filters.text}`,
      //query: (text) => `/popular`,
      transformResponse: (response: PexelsVideoResponse ) => response.videos,
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useSearchQuery } = videosSearchAPI
