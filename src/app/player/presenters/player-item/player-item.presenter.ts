import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

import { RouterService } from '../../../shared/services';
import { Player } from '../../entities';
import { PlayerEventsService, PlayerStoreService } from '../../services';

@Component({
  selector: 'app-player-item',
  templateUrl: './player-item.presenter.html',
  styleUrls: ['./player-item.presenter.scss'],
})
export class PlayerItemPresenter implements OnInit {
  public player$: Observable<Player>;

  constructor(
    private playerEventsService: PlayerEventsService,
    private playerStoreService: PlayerStoreService,
    private routerService: RouterService,
  ) {
  }

  ngOnInit() {
    this.player$ = this.playerStoreService.getCurrent();
  }

  onCreate($event: Player) {
    this.playerEventsService.create($event);
  }

  onUpdate($event: Player) {
    this.playerEventsService.update($event);
  }

  onCancel() {
    this.routerService.navigate('/player');
  }

}
