import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Player } from '../../entities';
import { PlayerEventsService, PlayerStoreService } from '../../services';
import { PlayerService } from '../../decoupling-1/player.service';

@Component({
  selector: 'app-player-list-presenter',
  templateUrl: './player-list.presenter.html',
  styleUrls: ['./player-list.presenter.scss'],
})
export class PlayerListPresenter implements OnInit {
  public players: Player[] = [];
  public loading: boolean;

  constructor(
    private playerService: PlayerService,
  ) {
  }

  ngOnInit() {
    this.loading = true;
    this.playerService.getAll().then(r => {
      this.players = r;
      this.loading = false;
    });
  }

  onDelete($event: string) {
  }

}
