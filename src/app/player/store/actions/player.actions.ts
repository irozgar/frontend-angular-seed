import { Action } from '@ngrx/store';

import { Player } from '../../entities';

export const CREATE_PLAYER = '[Player] Create Player';
export const CREATE_PLAYER_SUCCESS = '[Player] Create Playe Success';
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

export type PlayerActions =
  | CreatePlayer
  | CreatePlayerSuccess
  | CreatePlayerFail;
