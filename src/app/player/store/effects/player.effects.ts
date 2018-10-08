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
  public createTalentLead$ = this.actions$.pipe(
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
}
