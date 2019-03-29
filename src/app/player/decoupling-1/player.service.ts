import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Player } from '../entities/index';

import { PlayerHttpService } from './player-http.service';

@Injectable({
  providedIn: 'root',
})
export class PlayerFacadeService {
  private players = {};

  private players$ = new BehaviorSubject(this.players);
  private loading$ = new BehaviorSubject(false);

  constructor(private playerHttpService: PlayerHttpService) {
  }

  public loadAll() {
    this.loading$.next(true);
    return this.playerHttpService.loadAll()
      .pipe(map(convertToObjectLiteral))
      .subscribe(r => {
        this.updatePlayers(r);
        this.loading$.next(false);
      });
  }

  public getAll(): Observable<Player[]> {
    return this.players$.pipe(map(convertToArray));
  }

  public getLoading(): Observable<boolean> {
    return this.loading$;
  }

  public getOne(id: string): Observable<Player> {
    return this.players$.pipe(map(r => r[id]));
  }

  public updateOne(id: string): void {
    const selectedOne = this.players[id];
    const newOne = {...selectedOne, firstName: 'Dani'};
    this.updatePlayers({...this.players, [id]: newOne});
  }

  private updatePlayers(v) {
    this.players = v;
    this.players$.next(this.players);
  }
}

// -------------------

const convertToObjectLiteral = <T extends { id: string; }>(data: T[]): { [key: string]: T } => {
  return data.reduce((acc, val) => {
    return {...acc, [val.id]: val};
  }, {});
};

const convertToArray = (data: { [key: string]: Player }): Player[] => {
  return Object.keys(data).map(key => {
    return data[key];
  });
};
