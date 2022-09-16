import { combineReducers } from '@reduxjs/toolkit';
import { searchFiltersStore } from './filters/search-filters.store';
import { playerStore } from './player/player.store';

export const catalogStore = combineReducers({
  // Filter State: include the search text + totalItems to display
  searchFilters: searchFiltersStore.reducer,
  // Video Player State (Current Video)
  player: playerStore.reducer,
})
