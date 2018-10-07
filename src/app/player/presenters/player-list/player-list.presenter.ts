import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Player } from '../../entities';

@Component({
  selector: 'app-player-list-presenter',
  templateUrl: './player-list.presenter.html',
  styleUrls: ['./player-list.presenter.scss'],
})
export class PlayerListPresenter implements OnInit {
  public players$: Observable<Player[]>;

  constructor() {
  }

  ngOnInit() {
    const pl = Player.builder().firstName('Albert').lastName('Parron').email('test@test.com').build();
    this.players$ = of([pl]);
  }

}
