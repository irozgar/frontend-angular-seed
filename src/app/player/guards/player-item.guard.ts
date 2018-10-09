import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';

import { Observable } from 'rxjs';
import { filter, map, switchMap, take, tap } from 'rxjs/operators';

import { Player } from '../entities';
import { PlayerEventsService, PlayerStoreService } from '../services';

@Injectable({
  providedIn: 'root',
})
export class PlayerItemGuard implements Resolve<Observable<boolean>> {
  private playerRouteId: string;

  constructor(
    private playerStoreService: PlayerStoreService,
    private playerEventsService: PlayerEventsService,
  ) {
  }

  resolve(route: ActivatedRouteSnapshot): Observable<boolean> {
    this.playerRouteId = route.params.playerId;
    return this.checkStore().pipe(
      switchMap(() => {
        return this.hasPlayer(this.playerRouteId);
      }),
    );
  }

  hasPlayer(playerId: string): Observable<boolean> {
    return this.playerStoreService.getEntities().pipe(
      map((entities: { [key: string]: Player }) => !!entities[playerId]),
      take(1),
    );
  }

  checkStore(): Observable<boolean> {
    return this.playerStoreService.getLoaded().pipe(
      tap(loaded => {
        if (!loaded) {
          this.playerEventsService.get(this.playerRouteId);
        }
      }),
      filter(loaded => loaded),
      take(1),
    );
  }
}
