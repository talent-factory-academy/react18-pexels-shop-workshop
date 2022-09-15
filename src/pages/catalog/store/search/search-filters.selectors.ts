import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../../../../main';
import { getVideoId } from '../player/player.selectors';
import { searchAPI } from './search.api';

export const getFilters = (state: RootState) => state.searchFilters

/**
 * Get current searched videos by using the RTK query API
 * @param state
 */
export const getCurrentSearchedVideos = (state: RootState) =>
    searchAPI.endpoints.search
      .select(state.searchFilters.text)(state).data;

/**
 * Get Current Video Object
 * Get the current selected video obj searching in the video list
 */
export const getCurrentVideo = createSelector(
  [getCurrentSearchedVideos, getVideoId],
  (videos, currentVideoId) => {
    return videos?.find(item => item.id === currentVideoId)
  }
)

