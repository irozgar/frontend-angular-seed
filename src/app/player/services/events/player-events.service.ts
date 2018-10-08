import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { Player } from '../../entities';
import { PlayerState } from '../../store';
import { CreatePlayer } from '../../store/actions';

@Injectable({
  providedIn: 'root',
})
export class PlayerEventsService {

  constructor(private store: Store<PlayerState>) {
  }

  create(player: Player): void {
    this.store.dispatch(new CreatePlayer(player));
  }

  getAll(): void {
    console.log('[PlayerEventsService] GetAll');
  }

  get(): void {
    console.log('[PlayerEventsService] Get');
  }

  update(player: Player): void {
    console.log('[PlayerEventsService] Update');
  }

  deleteById(playerId: string): void {
    console.log('[PlayerEventsService] DeleteById', playerId);
  }
}
