import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Player } from '../../entities';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.scss'],
})
export class PlayerListComponent {
  @Input() players: Player[];
  @Output() private select = new EventEmitter<string>();
  @Output() private update = new EventEmitter<string>();

  constructor() {
  }

  onSelect($event: Event, playerId: string) {
    $event.stopPropagation();
    this.select.emit(playerId);
  }

  onUpdate($event: Event, playerId: string) {
    $event.stopPropagation();
    this.update.emit(playerId);
  }

}
