import { Player } from '../../entities';
import * as fromActions from '../actions/player.actions';

import * as fromReducer from './player.reducer';

const {initialState} = fromReducer;

const ErrorData = {};
const PlayerIdData = '1';
const PlayerData = Player.builder().id('1').firstName('Albert').build();
const PlayerData2 = Player.builder().id('2').firstName('Albert2').build();
const PlayersData = [PlayerData, PlayerData2];
const PlayerEntities = {
  [PlayerData.id]: PlayerData,
  [PlayerData2.id]: PlayerData2,
};

const customInitialState = {
  ...initialState,
  entities: PlayerEntities,
};

describe('ProjectsReducer', () => {
  describe('undefined action', () => {
    it('should return the default state', () => {
      const action = {} as any;
      const state = fromReducer.playerReducer(undefined, action);

      expect(state).toBe(initialState);
    });
  });

  describe('[CREATE_PLAYER actions]', () => {
    it('(CREATE_PLAYER) should set loading to true', () => {
      const action = new fromActions.CreatePlayer(PlayerData);
      const state = fromReducer.playerReducer(initialState, action);

      expect(state.loading).toEqual(true);
      expect(state.error).toEqual(null);
    });

    it('(CREATE_PLAYER_SUCCESS) should populate the new project', () => {
      const action = new fromActions.CreatePlayerSuccess(PlayerData);
      const state = fromReducer.playerReducer(customInitialState, action);

      expect(Object.keys(state.entities).length).toEqual(2);
      expect(state.loading).toEqual(false);
      expect(state.entities).toEqual(PlayerEntities);
    });

    it('(CREATE_PLAYER_FAIL) should return the initial state', () => {
      const action = new fromActions.CreatePlayerFail(ErrorData);
      const state = fromReducer.playerReducer(
        {...initialState, loading: true},
        action,
      );

      expect(state.loading).toEqual(false);
      expect(state.error).toEqual(ErrorData);
    });
  });

  describe('[GET_PLAYERS actions]', () => {
    it('(GET_PLAYERS) should set loading to true', () => {
      const action = new fromActions.GetPlayers();
      const state = fromReducer.playerReducer(initialState, action);

      expect(state.loading).toEqual(true);
      expect(state.error).toEqual(null);
    });

    it('(GET_PLAYERS_SUCCESS) should populate the new project', () => {
      const action = new fromActions.GetPlayersSuccess(PlayersData);
      const state = fromReducer.playerReducer(initialState, action);

      expect(Object.keys(state.entities).length).toEqual(2);
      expect(state.loading).toEqual(false);
      expect(state.entities).toEqual(PlayerEntities);
    });

    it('(GET_PLAYERS_FAIL) should return the initial state', () => {
      const action = new fromActions.GetPlayersFail(ErrorData);
      const state = fromReducer.playerReducer(
        {...initialState, loading: true},
        action,
      );

      expect(state.loading).toEqual(false);
      expect(state.error).toEqual(ErrorData);
    });
  });

  describe('[GET_PLAYER actions]', () => {
    it('(GET_PLAYER) should set loading to true', () => {
      const action = new fromActions.GetPlayer(PlayerIdData);
      const state = fromReducer.playerReducer(initialState, action);

      expect(state.loading).toEqual(true);
      expect(state.error).toEqual(null);
    });

    it('(GET_PLAYER_SUCCESS) should populate the new project', () => {
      const action = new fromActions.GetPlayerSuccess(PlayerData);
      const state = fromReducer.playerReducer(initialState, action);

      expect(Object.keys(state.entities).length).toEqual(1);
      expect(state.loading).toEqual(false);
      expect(state.error).toEqual(null);
    });

    it('(GET_PLAYER_FAIL) should return the initial state', () => {
      const action = new fromActions.GetPlayerFail(ErrorData);
      const state = fromReducer.playerReducer(
        {...initialState, loading: true},
        action,
      );

      expect(state.loading).toEqual(false);
      expect(state.error).toEqual(ErrorData);
    });
  });

  describe('[UPDATE_PLAYER actions]', () => {
    it('(UPDATE_PLAYER) should set loading to true', () => {
      const action = new fromActions.UpdatePlayer(PlayerData);
      const state = fromReducer.playerReducer(initialState, action);

      expect(state.loading).toEqual(true);
      expect(state.error).toEqual(null);
    });

    it('(UPDATE_PLAYER_SUCCESS) should populate the new project', () => {
      const action = new fromActions.UpdatePlayerSuccess(PlayerData);
      const state = fromReducer.playerReducer(customInitialState, action);

      expect(Object.keys(state.entities).length).toEqual(2);
      expect(state.loading).toEqual(false);
      expect(state.entities).toEqual(PlayerEntities);
    });

    it('(UPDATE_PLAYER_FAIL) should return the initial state', () => {
      const action = new fromActions.UpdatePlayerFail(ErrorData);
      const state = fromReducer.playerReducer(
        {...initialState, loading: true},
        action,
      );

      expect(state.loading).toEqual(false);
      expect(state.error).toEqual(ErrorData);
    });
  });

  describe('[DELETE_PLAYER actions]', () => {
    it('(DELETE_PLAYER) should set loading to true', () => {
      const action = new fromActions.DeletePlayer(PlayerIdData);
      const state = fromReducer.playerReducer(initialState, action);

      expect(state.loading).toEqual(true);
      expect(state.error).toEqual(null);
    });

    it('(DELETE_PLAYER_SUCCESS) should remove the player', () => {
      const action = new fromActions.DeletePlayerSuccess(PlayerIdData);
      const state = fromReducer.playerReducer(customInitialState, action);

      expect(state.loading).toEqual(false);
      expect(Object.keys(state.entities).length).toEqual(1);
    });

    it('(DELETE_PLAYER_FAIL) should return the initial state', () => {
      const action = new fromActions.DeletePlayerFail(ErrorData);
      const state = fromReducer.playerReducer(
        {...initialState, loading: true},
        action,
      );

      expect(state.loading).toEqual(false);
      expect(state.error).toEqual(ErrorData);
    });
  });
});
