import { Action } from '@ngrx/store';

import { Player } from '../../entities';


export const CREATE_PLAYER = '[Player] Create Player';
export const CREATE_PLAYER_SUCCESS = '[Player] Create Player Success';
export const CREATE_PLAYER_FAIL = '[Player] Create Player Error';

export class CreatePlayer implements Action {
  public readonly type = CREATE_PLAYER;
  constructor(public payload: Player) {}
}

export class CreatePlayerSuccess implements Action {
  public readonly type = CREATE_PLAYER_SUCCESS;
  constructor(public payload: Player) {}
}

export class CreatePlayerFail implements Action {
  public readonly type = CREATE_PLAYER_FAIL;
  constructor(public payload: any) {}
}


export const GET_PLAYERS = '[Player] Get Players';
export const GET_PLAYERS_SUCCESS = '[Player] Get Players Success';
export const GET_PLAYERS_FAIL = '[Player] Get Players Error';

export class GetPlayers implements Action {
  public readonly type = GET_PLAYERS;
}

export class GetPlayersSuccess implements Action {
  public readonly type = GET_PLAYERS_SUCCESS;
  constructor(public payload: Player[]) {}
}

export class GetPlayersFail implements Action {
  public readonly type = GET_PLAYERS_FAIL;
  constructor(public payload: any) {}
}


export const GET_PLAYER = '[Player] Get Player';
export const GET_PLAYER_SUCCESS = '[Player] Get Player Success';
export const GET_PLAYER_FAIL = '[Player] Get Player Error';

export class GetPlayer implements Action {
  public readonly type = GET_PLAYER;
  constructor(public payload: string) {}
}

export class GetPlayerSuccess implements Action {
  public readonly type = GET_PLAYER_SUCCESS;
  constructor(public payload: Player) {}
}

export class GetPlayerFail implements Action {
  public readonly type = GET_PLAYER_FAIL;
  constructor(public payload: any) {}
}


export const UPDATE_PLAYER = '[Player] Update Player';
export const UPDATE_PLAYER_SUCCESS = '[Player] Update Player Success';
export const UPDATE_PLAYER_FAIL = '[Player] Update Player Error';

export class UpdatePlayer implements Action {
  public readonly type = UPDATE_PLAYER;
  constructor(public payload: Player) {}
}

export class UpdatePlayerSuccess implements Action {
  public readonly type = UPDATE_PLAYER_SUCCESS;
  constructor(public payload: Player) {}
}

export class UpdatePlayerFail implements Action {
  public readonly type = UPDATE_PLAYER_FAIL;
  constructor(public payload: any) {}
}


export const DELETE_PLAYER = '[Player] Delete Player';
export const DELETE_PLAYER_SUCCESS = '[Player] Delete Player Success';
export const DELETE_PLAYER_FAIL = '[Player] Delete Player Error';

export class DeletePlayer implements Action {
  public readonly type = DELETE_PLAYER;
  constructor(public payload: string) {}
}

export class DeletePlayerSuccess implements Action {
  public readonly type = DELETE_PLAYER_SUCCESS;
  constructor(public payload: string) {}
}

export class DeletePlayerFail implements Action {
  public readonly type = DELETE_PLAYER_FAIL;
  constructor(public payload: any) {}
}


export type PlayerActions =
  | CreatePlayer
  | CreatePlayerSuccess
  | CreatePlayerFail
  | GetPlayers
  | GetPlayersSuccess
  | GetPlayersFail
  | GetPlayer
  | GetPlayerSuccess
  | GetPlayerFail
  | UpdatePlayer
  | UpdatePlayerSuccess
  | UpdatePlayerFail
  | DeletePlayer
  | DeletePlayerSuccess
  | DeletePlayerFail;
