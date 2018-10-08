import { Injectable } from '@angular/core';
import { CanActivate, Resolve } from '@angular/router';

import { Observable, of } from 'rxjs';
import { catchError, filter, switchMap, take, tap } from 'rxjs/operators';

import { PlayerEventsService, PlayerStoreService } from '../services';

@Injectable({
  providedIn: 'root',
})
export class PlayerListGuard implements Resolve<Observable<boolean>> {
  constructor(
    private playerStoreService: PlayerStoreService,
    private playerEventsService: PlayerEventsService,
  ) {
  }

  resolve(): Observable<boolean> {
    return this.checkStore().pipe(
      switchMap(() => of(true)),
      catchError(() => of(false)),
    );
  }

  checkStore(): Observable<boolean> {
    return this.playerStoreService.getLoaded().pipe(
      tap(loaded => {
        if (!loaded) {
          this.playerEventsService.getAll();
        }
      }),
      filter(loaded => loaded),
      take(1),
    );
  }
}
