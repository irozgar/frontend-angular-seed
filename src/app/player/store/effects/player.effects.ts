import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import { Player } from '../../entities';
import { PlayerHttpService } from '../../services';
import * as playerActions from '../actions/player.actions';

@Injectable()
export class PlayerEffects {
  constructor(
    private actions$: Actions,
    private playerHttpService: PlayerHttpService) {
  }

  @Effect()
  public createPlayer = this.actions$.pipe(
    ofType(playerActions.CREATE_PLAYER),
    map((action: playerActions.CreatePlayer) => action.payload),
    switchMap((player: Player) => {
      return this.playerHttpService.create(player.toJSON()).pipe(
        map(response => Player.fromJSON(response)),
        map(playerEntity => new playerActions.CreatePlayerSuccess(playerEntity)),
        catchError(error => of(new playerActions.CreatePlayerFail(error))),
      );
    }),
  );

  @Effect()
  public getPlayers = this.actions$.pipe(
    ofType(playerActions.GET_PLAYERS),
    switchMap(() => {
      return this.playerHttpService.getAll().pipe(
        map(response => response.map(player => Player.fromJSON(player))),
        map(players => new playerActions.GetPlayersSuccess(players)),
        catchError(error => of(new playerActions.GetPlayersFail(error))),
      );
    }),
  );

  @Effect()
  public getPlayer = this.actions$.pipe(
    ofType(playerActions.GET_PLAYER),
    map((action: playerActions.GetPlayer) => action.payload),
    switchMap((playerId: string) => {
      return this.playerHttpService.getById(playerId).pipe(
        map(player => Player.fromJSON(player)),
        map(player => new playerActions.GetPlayerSuccess(player)),
        catchError(error => of(new playerActions.GetPlayerFail(error))),
      );
    }),
  );

  @Effect()
  public updatePlayer = this.actions$.pipe(
    ofType(playerActions.UPDATE_PLAYER),
    map((action: playerActions.UpdatePlayer) => action.payload),
    switchMap((player: Player) => {
      return this.playerHttpService.updateById(player).pipe(
        map(res => new playerActions.UpdatePlayerSuccess(player)),
        catchError(error => of(new playerActions.UpdatePlayerFail(error))),
      );
    }),
  );

  @Effect()
  public deletePlayer = this.actions$.pipe(
    ofType(playerActions.DELETE_PLAYER),
    map((action: playerActions.DeletePlayer) => action.payload),
    switchMap((playerId: string) => {
      return this.playerHttpService.deleteById(playerId).pipe(
        map(players => new playerActions.DeletePlayerSuccess(playerId)),
        catchError(error => of(new playerActions.DeletePlayerFail(error))),
      );
    }),
  );
}
