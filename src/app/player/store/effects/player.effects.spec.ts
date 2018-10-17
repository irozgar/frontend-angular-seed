import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Actions } from '@ngrx/effects';
import { cold, hot } from 'jasmine-marbles';
import { empty, Observable, of, throwError } from 'rxjs';

import { Player } from '../../entities';
import { PlayerHttpService } from '../../services/http/player-http.service';
import * as fromActions from '../actions/player.actions';

import * as fromEffects from './player.effects';

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
  let service: PlayerHttpService;
  let effects: fromEffects.PlayerEffects;

  const players = [
    Player.builder().id('1').firstName('Albert').build(),
    Player.builder().id('2').firstName('Albert2').build(),
  ];

  const error = new Error('Test error');

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        PlayerHttpService,
        fromEffects.PlayerEffects,
        { provide: Actions, useFactory: getActions },
      ],
    });

    actions$ = TestBed.get(Actions);
    service = TestBed.get(PlayerHttpService);
    effects = TestBed.get(fromEffects.PlayerEffects);
  });

  describe('getPlayers$', () => {
    it('should work', () => {
      spyOn(service, 'getAll').and.returnValue(of(players));
      const action = new fromActions.GetPlayers();
      const completion = new fromActions.GetPlayersSuccess(players);

      actions$.stream = hot('-a', { a: action });
      const expected = cold('-b', { b: completion });

      expect(effects.getPlayers$).toBeObservable(expected);
      expect(service.getAll).toHaveBeenCalled();
    });

    it('should throw error', () => {
      spyOn(service, 'getAll').and.returnValue(throwError(error));
      const action = new fromActions.GetPlayers();
      const completion = new fromActions.GetPlayersFail(error);

      actions$.stream = hot('-a', { a: action });
      const expected = cold('-b', { b: completion });

      expect(effects.getPlayers$).toBeObservable(expected);
      expect(service.getAll).toHaveBeenCalled();
    });
  });

  describe('getPlayer$', () => {
    it('should work', () => {
      spyOn(service, 'getById').and.returnValue(of(players[0]));
      const action = new fromActions.GetPlayer(players[0].id);
      const completion = new fromActions.GetPlayerSuccess(players[0]);

      actions$.stream = hot('-a', { a: action });
      const expected = cold('-b', { b: completion });

      expect(effects.getPlayer$).toBeObservable(expected);
      expect(service.getById).toHaveBeenCalled();
    });

    it('should throw error', () => {
      spyOn(service, 'getById').and.returnValue(throwError(error));
      const action = new fromActions.GetPlayer(players[0].id);
      const completion = new fromActions.GetPlayerFail(error);

      actions$.stream = hot('-a', { a: action });
      const expected = cold('-b', { b: completion });

      expect(effects.getPlayer$).toBeObservable(expected);
      expect(service.getById).toHaveBeenCalled();
    });
  });

  describe('createPlayer$', () => {
    it('should work', () => {
      spyOn(service, 'create').and.returnValue(of(players[0]));
      const action = new fromActions.CreatePlayer(players[0]);
      const completion = new fromActions.CreatePlayerSuccess(players[0]);

      actions$.stream = hot('-a', { a: action });
      const expected = cold('-c', { c: completion });

      expect(effects.createPlayer$).toBeObservable(expected);
      expect(service.create).toHaveBeenCalled();
    });

    it('should throw error', () => {
      spyOn(service, 'create').and.returnValue(throwError(error));
      const action = new fromActions.CreatePlayer(players[0]);
      const completion = new fromActions.CreatePlayerFail(error);

      actions$.stream = hot('-a', { a: action });
      const expected = cold('-c', { c: completion });

      expect(effects.createPlayer$).toBeObservable(expected);
      expect(service.create).toHaveBeenCalled();
    });
  });

  describe('updatePlayer$', () => {
    it('should work', () => {
      spyOn(service, 'updateById').and.returnValue(of(players[0]));
      const action = new fromActions.UpdatePlayer(players[0]);
      const completion = new fromActions.UpdatePlayerSuccess(players[0]);

      actions$.stream = hot('-a', { a: action });
      const expected = cold('-c', { c: completion });

      expect(effects.updatePlayer$).toBeObservable(expected);
      expect(service.updateById).toHaveBeenCalled();
    });

    it('should throw error', () => {
      spyOn(service, 'updateById').and.returnValue(throwError(error));
      const action = new fromActions.UpdatePlayer(players[0]);
      const completion = new fromActions.UpdatePlayerFail(error);

      actions$.stream = hot('-a', { a: action });
      const expected = cold('-c', { c: completion });

      expect(effects.updatePlayer$).toBeObservable(expected);
      expect(service.updateById).toHaveBeenCalled();
    });
  });

  describe('deletePlayer$', () => {
    it('should work', () => {
      spyOn(service, 'deleteById').and.returnValue(of(players[0]));
      const action = new fromActions.DeletePlayer(players[0].id);
      const completion = new fromActions.DeletePlayerSuccess(players[0].id);

      actions$.stream = hot('-a', { a: action });
      const expected = cold('-c', { c: completion });

      expect(effects.deletePlayer$).toBeObservable(expected);
      expect(service.deleteById).toHaveBeenCalled();
    });

    it('should throw error', () => {
      spyOn(service, 'deleteById').and.returnValue(throwError(error));
      const action = new fromActions.DeletePlayer(players[0].id);
      const completion = new fromActions.DeletePlayerFail(error);

      actions$.stream = hot('-a', { a: action });
      const expected = cold('-c', { c: completion });

      expect(effects.deletePlayer$).toBeObservable(expected);
      expect(service.deleteById).toHaveBeenCalled();
    });
  });
});
