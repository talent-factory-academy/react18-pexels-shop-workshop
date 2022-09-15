import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const searchFiltersStore = createSlice({
  name: 'searchFilters',
  initialState: {
    text: 'new york'
  },
  reducers: {
    search: (state, action: PayloadAction<string>) => {
      state.text = action.payload;
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
