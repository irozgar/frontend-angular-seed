import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Player } from './player/entities';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const player = [
      Player.builder().id('1').firstName('Albert').lastName('Parron').email('test@test.com').build(),
    ];
    return {player};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  genId(player: Player[]): string {
    const maxId = Math.max(...player.map(pl => Number(pl.id)));
    return player.length > 0 ?  String(maxId + 1) : '1';
  }
}
