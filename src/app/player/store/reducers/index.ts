import * as fromReducer from './player.reducer';

import { playerReducer } from './player.reducer';

export interface PlayerState {
  player: fromReducer.IPlayerState;
}

export const reducers = playerReducer;
