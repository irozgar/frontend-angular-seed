import { Player } from '../../entities';

import * as fromProject from './player.actions';

const ErrorData = {};
const PlayerData = Player.builder().build();
const PlayersData = [PlayerData];
const PlayerIdData = '';

describe('Player Actions', () => {
  describe('[CreatePlayer actions]', () => {
    it('(CreatePlayer) should create an action', () => {
      const action = new fromProject.CreatePlayer(PlayerData);

      expect({...action}).toEqual({
        type: fromProject.CREATE_PLAYER,
        payload: PlayerData,
      });
    });

    it('(CreatePlayerFail) should create an action', () => {
      const action = new fromProject.CreatePlayerFail(ErrorData);

      expect({...action}).toEqual({
        type: fromProject.CREATE_PLAYER_FAIL,
        payload: ErrorData,
      });
    });

    it('(CreatePlayerSuccess) should create an action', () => {
      const action = new fromProject.CreatePlayerSuccess(PlayerData);

      expect({...action}).toEqual({
        type: fromProject.CREATE_PLAYER_SUCCESS,
        payload: PlayerData,
      });
    });
  });

  describe('[GetPlayers actions]', () => {
    it('(GetPlayers) should create an action', () => {
      const action = new fromProject.GetPlayers();

      expect({...action}).toEqual({
        type: fromProject.GET_PLAYERS,
      });
    });

    it('(GetPlayersFail) should create an action', () => {
      const action = new fromProject.GetPlayersFail(ErrorData);

      expect({...action}).toEqual({
        type: fromProject.GET_PLAYERS_FAIL,
        payload: ErrorData,
      });
    });

    it('(GetPlayersSuccess) should create an action', () => {
      const action = new fromProject.GetPlayersSuccess(PlayersData);

      expect({...action}).toEqual({
        type: fromProject.GET_PLAYERS_SUCCESS,
        payload: PlayersData,
      });
    });
  });

  describe('[GetPlayer actions]', () => {
    it('(GetPlayer) should create an action', () => {
      const action = new fromProject.GetPlayer(PlayerIdData);

      expect({...action}).toEqual({
        type: fromProject.GET_PLAYER,
        payload: PlayerIdData,
      });
    });

    it('(GetPlayerFail) should create an action', () => {
      const action = new fromProject.GetPlayerFail(ErrorData);

      expect({...action}).toEqual({
        type: fromProject.GET_PLAYER_FAIL,
        payload: ErrorData,
      });
    });

    it('(GetPlayerSuccess) should create an action', () => {
      const action = new fromProject.GetPlayerSuccess(PlayerData);

      expect({...action}).toEqual({
        type: fromProject.GET_PLAYER_SUCCESS,
        payload: PlayerData,
      });
    });
  });

  describe('[UpdatePlayer actions]', () => {
    it('(UpdatePlayer) should create an action', () => {
      const action = new fromProject.UpdatePlayer(PlayerData);

      expect({...action}).toEqual({
        type: fromProject.UPDATE_PLAYER,
        payload: PlayerData,
      });
    });

    it('(UpdatePlayerFail) should create an action', () => {
      const action = new fromProject.UpdatePlayerFail(ErrorData);

      expect({...action}).toEqual({
        type: fromProject.UPDATE_PLAYER_FAIL,
        payload: ErrorData,
      });
    });

    it('(UpdatePlayerSuccess) should create an action', () => {
      const action = new fromProject.UpdatePlayerSuccess(PlayerData);

      expect({...action}).toEqual({
        type: fromProject.UPDATE_PLAYER_SUCCESS,
        payload: PlayerData,
      });
    });
  });

  describe('[DeletePlayer actions]', () => {
    it('(DeletePlayer) should create an action', () => {
      const action = new fromProject.DeletePlayer(PlayerIdData);

      expect({...action}).toEqual({
        type: fromProject.DELETE_PLAYER,
        payload: PlayerIdData,
      });
    });

    it('(DeletePlayerFail) should create an action', () => {
      const action = new fromProject.DeletePlayerFail(ErrorData);

      expect({...action}).toEqual({
        type: fromProject.DELETE_PLAYER_FAIL,
        payload: ErrorData,
      });
    });

    it('(DeletePlayerSuccess) should create an action', () => {
      const action = new fromProject.DeletePlayerSuccess(PlayerIdData);

      expect({...action}).toEqual({
        type: fromProject.DELETE_PLAYER_SUCCESS,
        payload: PlayerIdData,
      });
    });
  });
});
