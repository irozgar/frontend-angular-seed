import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Player } from '../../entities';
import { PlayerStoreService } from '../../services';

@Component({
  selector: 'app-player-list-presenter',
  templateUrl: './player-list.presenter.html',
  styleUrls: ['./player-list.presenter.scss'],
})
export class PlayerListPresenter implements OnInit {
  public players$: Observable<Player[]>;

  constructor(private playerStoreService: PlayerStoreService) {
  }

  ngOnInit() {
    this.players$ = this.playerStoreService.getAll();
  }

}
