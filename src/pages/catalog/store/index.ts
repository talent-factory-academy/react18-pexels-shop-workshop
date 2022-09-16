import { combineReducers } from '@reduxjs/toolkit';
import { searchFiltersStore } from './filters/search-filters.store';
import { playerStore } from './player/player.store';
import { videosSearchAPI } from './search/videosSearchAPI';

export const catalogStore = combineReducers({
  // Filter State: include the search text
  searchFilters: searchFiltersStore.reducer,
  // Video Player:
  player: playerStore.reducer,
  // Current Video
  // Search Result (it uses RTK Query)
})
