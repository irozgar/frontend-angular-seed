import { Player } from '../../entities';
import * as fromPlayerActions from '../actions';
import { PlayerActions } from '../actions';

export interface IPlayerState {
  entities: { [key: string]: Player };
  loading: boolean;
  loaded: boolean;
  error: any;
}

const initialState: IPlayerState = {
  entities: {},
  loading: false,
  loaded: false,
  error: null,
};

export function playerReducer(state: IPlayerState = initialState, action: PlayerActions) {
  switch (action.type) {
    case fromPlayerActions.GET_PLAYERS:
    case fromPlayerActions.CREATE_PLAYER:
    case fromPlayerActions.UPDATE_PLAYER:
    case fromPlayerActions.DELETE_PLAYER:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case fromPlayerActions.CREATE_PLAYER_SUCCESS:
    case fromPlayerActions.UPDATE_PLAYER_SUCCESS:
      const newPlayer = action.payload;
      return {
        ...state,
        loading: false,
        entities: {
          [newPlayer.id]: newPlayer,
        },
        error: null,
      };

    case fromPlayerActions.DELETE_PLAYER_SUCCESS:
      const playerDeleted = action.payload;
      const {[playerDeleted]: removed, ...others} = state.entities;

      return {
        ...state,
        loading: false,
        entities: others,
        error: null,
      };

    case fromPlayerActions.CREATE_PLAYER_FAIL:
      const error = action.payload;
      return {
        ...state,
        loading: false,
        error,
      };


    case fromPlayerActions.GET_PLAYERS_SUCCESS:
      const players = action.payload;

      const entities = players.reduce(
        (list: { [id: string]: Player }, player: Player) => {
          return {
            ...list,
            [player.id]: player,
          };
        },
        {
          ...state.entities,
        },
      );
      return {
        ...state,
        loading: false,
        loaded: true,
        entities,
        error: null,
      };

    default:
      return state;
  }
}

export const getPlayerEntities = (state: IPlayerState) => state.entities;
export const getPlayerLoading = (state: IPlayerState) => state.loading;
export const getPlayerLoaded = (state: IPlayerState) => state.loaded;
