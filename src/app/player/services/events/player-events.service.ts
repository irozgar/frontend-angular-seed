import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { Player } from '../../entities';
import { CreatePlayer, DeletePlayer, GetPlayer, GetPlayers, UpdatePlayer } from '../../store/actions';
import { PlayerState } from '../../store/reducers';

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
    this.store.dispatch(new GetPlayers());
  }

  get(playerId: string): void {
    this.store.dispatch(new GetPlayer(playerId));
  }

  update(player: Player): void {
    this.store.dispatch(new UpdatePlayer(player));
  }

  delete(playerId: string): void {
    this.store.dispatch(new DeletePlayer(playerId));
  }
}
