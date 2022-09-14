import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../../../../main';
import { getVideoId } from '../player/player.selectors';
import { searchAPI } from './search.api';

export const getFilters = (state: RootState) => state.searchFilters

export const getCurrentVideos = (state: RootState) =>
    searchAPI.endpoints.search
      .select(state.searchFilters.text)(state).data;

export const getCurrentVideo = createSelector(
  [getCurrentVideos, getVideoId],
  (videos, currentVideoId) => {
    return videos?.find(item => item.id === currentVideoId)
  }
)

