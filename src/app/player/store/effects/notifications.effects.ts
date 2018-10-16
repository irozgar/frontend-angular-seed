import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, tap } from 'rxjs/operators';

import { NotificationsService } from '../../../shared/services/notifications/notifications.service';
import * as playerActions from '../actions/player.actions';

@Injectable()
export class PlayerNotificationsEffects {
  constructor(
    private actions$: Actions,
    private notificationsService: NotificationsService) {
  }

  @Effect({dispatch: false})
  public createPlayer = this.actions$.pipe(
    ofType(playerActions.CREATE_PLAYER_SUCCESS),
    tap(() => {
      this.notificationsService.success('Create', 'Created player succesfully');
    }),
  );

  @Effect({dispatch: false})
  public updatePlayer = this.actions$.pipe(
    ofType(playerActions.UPDATE_PLAYER_SUCCESS),
    tap(() => {
      this.notificationsService.success('Update', 'Updated player succesfully');
    }),
  );

  @Effect({dispatch: false})
  public deletePlayer = this.actions$.pipe(
    ofType(playerActions.DELETE_PLAYER_SUCCESS),
    tap(() => {
      this.notificationsService.success('Delete', 'Deleted player succesfully');
    }),
  );
}
