import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

import { PlayerFacadeService } from '../../decoupling-1/player.service';
import { Player } from '../../entities';

@Component({
  selector: 'app-player-list-presenter',
  templateUrl: './player-list.presenter.html',
  styleUrls: ['./player-list.presenter.scss'],
})
export class PlayerListPresenter implements OnInit {
  public players$: Observable<Player[]>;
  public selectedPlayer$: Observable<Player>;
  public loading$: Observable<boolean>;

  constructor(
    private playerFacade: PlayerFacadeService,
  ) {
  }

  ngOnInit() {
    this.playerFacade.loadAll();

    this.loading$ = this.playerFacade.getLoading();
    this.players$ = this.playerFacade.getAll();

  }

  onSelect(id: string) {
    this.selectedPlayer$ = this.playerFacade.getOne(id);
  }

  onUpdate(id: string) {
    this.playerFacade.updateOne(id);
  }

}
