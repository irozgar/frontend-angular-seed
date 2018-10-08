import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Player } from '../../entities';
import { PlayerEventsService } from '../../services';

@Component({
  selector: 'app-player-item',
  templateUrl: './player-item.presenter.html',
  styleUrls: ['./player-item.presenter.scss'],
})
export class PlayerItemPresenter implements OnInit {
  public player$: Observable<Player>;

  constructor(private playerEvents: PlayerEventsService) {
  }

  ngOnInit() {
    const pl = Player.builder().id('1').firstName('Albert').lastName('Parron').email('test@test.com').build();

    this.player$ = of(null);
  }

  onCreate($event: Player) {
    this.playerEvents.create($event);
  }

  onCancel() {
    console.log('cancel');
  }

}
