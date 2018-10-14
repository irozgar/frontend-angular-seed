import {
  activateLoading,
  addItem,
  addItems,
  deactivateLoading,
  generateError,
  generateState,
  removeItem,
} from '../../../shared/store/utils';
import { Player } from '../../entities';
import * as fromPlayerActions from '../actions';
import { PlayerActions } from '../actions';

export interface IPlayerState {
  entities: { [key: string]: Player };
  loading: boolean;
  loaded: boolean;
  error: any;
}

export const initialState: IPlayerState = {
  entities: {},
  loading: false,
  loaded: false,
  error: null,
};

export const getPlayerEntities = (state: IPlayerState) => state.entities;
export const getPlayerLoading = (state: IPlayerState) => state.loading;
export const getPlayerLoaded = (state: IPlayerState) => state.loaded;

export function playerReducer(state: IPlayerState = initialState, action: PlayerActions) {
  const actions = {
    [fromPlayerActions.GET_PLAYERS]: activateLoading,
    [fromPlayerActions.GET_PLAYERS_SUCCESS]: [addItems, deactivateLoading],
    [fromPlayerActions.GET_PLAYERS_FAIL]: [generateError, deactivateLoading],
    [fromPlayerActions.GET_PLAYER]: activateLoading,
    [fromPlayerActions.GET_PLAYER_SUCCESS]: [addItem, deactivateLoading],
    [fromPlayerActions.GET_PLAYER_FAIL]: [generateError, deactivateLoading],
    [fromPlayerActions.CREATE_PLAYER]: activateLoading,
    [fromPlayerActions.CREATE_PLAYER_SUCCESS]: [addItem, deactivateLoading],
    [fromPlayerActions.CREATE_PLAYER_FAIL]: [generateError, deactivateLoading],
    [fromPlayerActions.UPDATE_PLAYER]: activateLoading,
    [fromPlayerActions.UPDATE_PLAYER_SUCCESS]: [addItem, deactivateLoading],
    [fromPlayerActions.UPDATE_PLAYER_FAIL]: [generateError, deactivateLoading],
    [fromPlayerActions.DELETE_PLAYER]: activateLoading,
    [fromPlayerActions.DELETE_PLAYER_SUCCESS]: [removeItem, deactivateLoading],
    [fromPlayerActions.DELETE_PLAYER_FAIL]: [generateError, deactivateLoading],
  };
  return generateState(state, action, actions);
}
