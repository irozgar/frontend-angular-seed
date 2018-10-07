import { Injectable } from '@angular/core';
import { Player } from '../../entities';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PlayerStoreService {

  constructor() {
  }

  getAll(): Observable<Player[]> {
    console.log('[PlayerStoreService] GetAll');
    return;
  }

  getCurrent(): Observable<Player> {
    console.log('[PlayerStoreService] GetCurrent');
    return;
  }

  getLoading(): Observable<boolean> {
    console.log('[PlayerStoreService] GetLoading');
    return;
  }

  getLoaded(): Observable<boolean> {
    console.log('[PlayerStoreService] GetLoaded');
    return;
  }
}
