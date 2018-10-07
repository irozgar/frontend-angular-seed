import { Injectable } from '@angular/core';

import { Player } from '../../entities';

@Injectable({
  providedIn: 'root',
})
export class PlayerEventsService {

  constructor() {
  }

  create(player: Player): void {
    console.log('[PlayerEventsService] Create', player);
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
