import { Player } from '../../entities';

import * as fromProject from './player.actions';

const ErrorData = {};
const PlayerData = Player.builder().build();
const PlayersData = [PlayerData];
const PlayerIdData = '';

describe('Player Actions', () => {
  describe('[CreatePlayer actions]', () => {
    it('(CreatePlayer) should create an action', () => {
      const payload = PlayerData;
      const action = new fromProject.CreatePlayer(payload);

      expect({...action}).toEqual({
        type: fromProject.CREATE_PLAYER,
        payload,
      });
    });

    it('(CreatePlayerFail) should create an action', () => {
      const payload = ErrorData;
      const action = new fromProject.CreatePlayerFail(payload);

      expect({...action}).toEqual({
        type: fromProject.CREATE_PLAYER_FAIL,
        payload,
      });
    });

    it('(CreatePlayerSuccess) should create an action', () => {
      const payload = PlayerData;
      const action = new fromProject.CreatePlayerSuccess(payload);

      expect({...action}).toEqual({
        type: fromProject.CREATE_PLAYER_SUCCESS,
        payload,
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
      const payload = ErrorData;
      const action = new fromProject.GetPlayersFail(payload);

      expect({...action}).toEqual({
        type: fromProject.GET_PLAYERS_FAIL,
        payload,
      });
    });

    it('(GetPlayersSuccess) should create an action', () => {
      const payload = PlayersData;
      const action = new fromProject.GetPlayersSuccess(payload);

      expect({...action}).toEqual({
        type: fromProject.GET_PLAYERS_SUCCESS,
        payload,
      });
    });
  });

  describe('[GetPlayer actions]', () => {
    it('(GetPlayer) should create an action', () => {
      const payload = PlayerIdData;
      const action = new fromProject.GetPlayer(payload);

      expect({...action}).toEqual({
        type: fromProject.GET_PLAYER,
        payload,
      });
    });

    it('(GetPlayerFail) should create an action', () => {
      const payload = ErrorData;
      const action = new fromProject.GetPlayerFail(payload);

      expect({...action}).toEqual({
        type: fromProject.GET_PLAYER_FAIL,
        payload,
      });
    });

    it('(GetPlayerSuccess) should create an action', () => {
      const payload = PlayerData;
      const action = new fromProject.GetPlayerSuccess(payload);

      expect({...action}).toEqual({
        type: fromProject.GET_PLAYER_SUCCESS,
        payload,
      });
    });
  });

  describe('[UpdatePlayer actions]', () => {
    it('(UpdatePlayer) should create an action', () => {
      const payload = PlayerData;
      const action = new fromProject.UpdatePlayer(payload);

      expect({...action}).toEqual({
        type: fromProject.UPDATE_PLAYER,
        payload,
      });
    });

    it('(UpdatePlayerFail) should create an action', () => {
      const payload = ErrorData;
      const action = new fromProject.UpdatePlayerFail(payload);

      expect({...action}).toEqual({
        type: fromProject.UPDATE_PLAYER_FAIL,
        payload,
      });
    });

    it('(UpdatePlayerSuccess) should create an action', () => {
      const payload = PlayerData;
      const action = new fromProject.UpdatePlayerSuccess(payload);

      expect({...action}).toEqual({
        type: fromProject.UPDATE_PLAYER_SUCCESS,
        payload,
      });
    });
  });

  describe('[DeletePlayer actions]', () => {
    it('(DeletePlayer) should create an action', () => {
      const payload = PlayerIdData;
      const action = new fromProject.DeletePlayer(payload);

      expect({...action}).toEqual({
        type: fromProject.DELETE_PLAYER,
        payload,
      });
    });

    it('(DeletePlayerFail) should create an action', () => {
      const payload = ErrorData;
      const action = new fromProject.DeletePlayerFail(payload);

      expect({...action}).toEqual({
        type: fromProject.DELETE_PLAYER_FAIL,
        payload,
      });
    });

    it('(DeletePlayerSuccess) should create an action', () => {
      const payload = PlayerIdData;
      const action = new fromProject.DeletePlayerSuccess(payload);

      expect({...action}).toEqual({
        type: fromProject.DELETE_PLAYER_SUCCESS,
        payload,
      });
    });
  });
});
