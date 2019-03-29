import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { Player } from '../entities/index';

@Injectable({
  providedIn: 'root',
})
export class PlayerFacadeService {
  private players$ = new BehaviorSubject([]);
  private loading$ = new BehaviorSubject(false);

  constructor(private httpService: HttpClient) {
  }

  public loadAll() {
    this.loading$.next(true);
    return this.httpService
      .get<Player[]>(`/api/player`)
      .toPromise()
      .then(r => {
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
