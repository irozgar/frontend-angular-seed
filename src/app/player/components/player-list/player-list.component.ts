import { Component, Input, OnInit } from '@angular/core';

import { Player } from '../../entities';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.scss'],
})
export class PlayerListComponent implements OnInit {
  @Input() players: Player[];

  constructor() {
  }

  ngOnInit() {
  }

}
