import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { Player } from '../entities/index';
import { map } from 'rxjs/operators';
import { PlayerHttpService } from './player-http.service';

@Injectable({
  providedIn: 'root',
})
export class PlayerFacadeService {
  private players$ = new BehaviorSubject([]);
  private loading$ = new BehaviorSubject(false);

  constructor(private playerHttpService: PlayerHttpService) {
  }

  public loadAll() {
    this.loading$.next(true);
    return this.playerHttpService.loadAll()
      .pipe(map(r => r))
      .subscribe(r => {
        this.players$.next(r);
        this.loading$.next(false);
      });
  }

  public getAll(): Observable<Player[]> {
    return this.players$;
  }

  public getLoading(): Observable<boolean> {
    return this.loading$;
  }
}
