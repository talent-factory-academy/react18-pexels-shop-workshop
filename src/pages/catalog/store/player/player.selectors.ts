import { RootState } from '../../../../main';

// Get current video object (with all properties)
export const getSelectedVideo = (state: RootState) => state.catalog.player.video;

