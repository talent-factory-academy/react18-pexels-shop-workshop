import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { act } from 'react-dom/test-utils';


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
      // state.text = action.payload;
      return {
        ...action.payload
      }
    }
  },
  /*
  extraReducers: builder => {
    builder
      .addMatcher(searchAPI.endpoints.search.matchFulfilled, (state, action) => {
        state.text = action.meta.arg.originalArgs;
      })
  }
  */
})
export const { search } = searchFiltersStore.actions;
