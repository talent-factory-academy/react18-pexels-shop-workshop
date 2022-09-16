import { RootState } from '../../../../main';

export const getSelectedVideo = (state: RootState) => state.catalog.player.video;

