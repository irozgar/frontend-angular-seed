import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Player } from '../../entities';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.scss'],
})
export class PlayerListComponent {
  @Input() players: Player[];
  @Output() private delete = new EventEmitter<string>();

  constructor() {
  }

  onDelete($event: Event, playerId: string) {
    $event.stopPropagation();
    const remove = window.confirm('Are you sure?');
    if (remove) {
      this.delete.emit(playerId);
    }
  }

}
