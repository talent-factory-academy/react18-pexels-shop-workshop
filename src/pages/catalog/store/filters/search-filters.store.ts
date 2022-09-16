import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface FiltersState {
  text: string;
  totalItems: string;
}

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
