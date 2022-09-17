import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FiltersState } from '../../../../model/video-filters';

const initialState: FiltersState = {
  text: 'faces',
  totalItems: '21'
}

export const searchFiltersStore = createSlice({
  name: 'searchFilters',
  initialState,
  reducers: {
    search: (state, action: PayloadAction<FiltersState>) => {
      return { ...action.payload }
    }
  },
})
export const { search } = searchFiltersStore.actions;
