import { RootState } from '../../../../main';

// get filter state (text + total of items to display)
export const getFilters = (state: RootState) => state.catalog.searchFilters
