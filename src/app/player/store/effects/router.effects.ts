import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, tap } from 'rxjs/operators';

import { RouterService } from '../../../shared/services';
import * as playerActions from '../actions/player.actions';

@Injectable()
export class PlayerRouterEffects {
  constructor(
    private actions$: Actions,
    private routerService: RouterService) {
  }

  @Effect({dispatch: false})
  public createPlayer = this.actions$.pipe(
    ofType(playerActions.CREATE_PLAYER_SUCCESS),
    tap(() => {
      this.routerService.navigate('/player');
    }),
  );

  @Effect({dispatch: false})
  public updatePlayer = this.actions$.pipe(
    ofType(playerActions.UPDATE_PLAYER_SUCCESS),
    tap(() => {
      this.routerService.navigate('/player');
    }),
  );
}
