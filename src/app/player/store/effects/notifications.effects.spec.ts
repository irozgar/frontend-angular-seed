import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Actions } from '@ngrx/effects';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { cold, hot } from 'jasmine-marbles';
import { empty, Observable, of, throwError } from 'rxjs';

import { NotificationsService } from '../../../shared/services/notifications/notifications.service';
import { Player } from '../../entities';
import * as fromActions from '../actions/player.actions';

import * as fromEffects from './notifications.effects';

export class TestActions extends Actions {
  constructor() {
    super(empty());
  }

  set stream(source: Observable<any>) {
    this.source = source;
  }
}

export function getActions() {
  return new TestActions();
}

describe('PlayerEffects', () => {
  let actions$: TestActions;
  let service: NotificationsService;
  let effects: fromEffects.PlayerNotificationsEffects;

  const players = [
    Player.builder().id('1').firstName('Albert').build(),
    Player.builder().id('2').firstName('Albert2').build(),
  ];

  const error = new Error('Test error');

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, SimpleNotificationsModule.forRoot()],
      providers: [
        NotificationsService,
        fromEffects.PlayerNotificationsEffects,
        { provide: Actions, useFactory: getActions },
      ],
    });

    actions$ = TestBed.get(Actions);
    service = TestBed.get(NotificationsService);
    effects = TestBed.get(fromEffects.PlayerNotificationsEffects);
  });

  describe('createPlayer$', () => {
    // it('should notify success', () => {
    //   spyOn(service, 'success').and.callThrough();
    //   const action = new fromActions.GetPlayersSuccess(players);
    //
    //   actions$.stream = hot('-a', { a: action });
    //   const expected = cold('' );
    //   expect(effects.createPlayer$).toBeObservable(expected);
    //   expect(service.success).toHaveBeenCalled();
    // });
  });
});
