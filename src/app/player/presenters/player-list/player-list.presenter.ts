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
  public players$: Observable<Player[]>;
  public loading$: Observable<boolean>;

  constructor(
    private playerService: PlayerService,
  ) {
  }

  ngOnInit() {
    this.playerService.loadAll();

    this.loading$ = this.playerService.getLoading();
    this.players$ = this.playerService.getAll();
  }

  onDelete($event: string) {
  }

}
