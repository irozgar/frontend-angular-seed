import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Player } from '../../entities';
import { PlayerState } from '../../store/reducers';
import { GetPlayerEntities, GetPlayerList, GetPlayerLoaded, GetPlayerLoading, GetPlayerSelected } from '../../store/selectors';

@Injectable({
  providedIn: 'root',
})
export class PlayerStoreService {

  constructor(private store: Store<PlayerState>) {
  }

  getAll(): Observable<Player[]> {
    return this.store.pipe(select(GetPlayerList));
  }

  getEntities(): Observable<{[key: string]: Player}> {
    return this.store.pipe(select(GetPlayerEntities));
  }

  getCurrent(): Observable<Player> {
    return this.store.pipe(select(GetPlayerSelected));
  }

  getLoading(): Observable<boolean> {
    return this.store.pipe(select(GetPlayerLoading));
  }

  getLoaded(): Observable<boolean> {
    return this.store.pipe(select(GetPlayerLoaded));
  }
}
