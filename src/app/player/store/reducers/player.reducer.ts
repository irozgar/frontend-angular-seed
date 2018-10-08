import { Player } from '../../entities';
import * as fromPlayerActions from '../actions';
import { PlayerActions } from '../actions';

export interface IPlayerState {
  entities: { [key: string]: Player };
  loading: boolean;
  loaded: boolean;
  error: any;
}

const pl = Player.builder().id('1').firstName('Albert').lastName('Parron').email('test@test.com').build();

const initialState: IPlayerState = {
  entities: {
    [pl.id]: pl,
  },
  loading: false,
  loaded: false,
  error: null,
};

export function playerReducer(state: IPlayerState = initialState, action: PlayerActions) {
  switch (action.type) {
    case fromPlayerActions.CREATE_PLAYER:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case fromPlayerActions.CREATE_PLAYER_SUCCESS:
      const playerCreated = action.payload;
      return {
        ...state,
        loading: false,
        entities: {
          [playerCreated.id]: playerCreated,
        },
        error: null,
      };

    case fromPlayerActions.CREATE_PLAYER_FAIL:
      const error = action.payload;
      return {
        ...state,
        loading: false,
        error,
      };

    default:
      return state;
  }
}

export const getPlayerEntities = (state: IPlayerState) => state.entities;
export const getPlayerLoading = (state: IPlayerState) => state.loading;
export const getPlayerLoaded = (state: IPlayerState) => state.loaded;
