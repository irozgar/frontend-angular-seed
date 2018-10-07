import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Player } from '../../entities';

@Injectable({
  providedIn: 'root',
})
export class PlayerHttpService {

  constructor(private httpService: HttpClient) {
  }

  public create(player: Player): Observable<Player> {
    return this.httpService
      .post<Player>(`/api/players`, player)
      .pipe(catchError((error: any) => Observable.throw(error)));
  }

  public getAll(): Observable<Player[]> {
    return this.httpService
      .get<Player[]>(`/api/players`)
      .pipe(catchError((error: any) => Observable.throw(error)));
  }

  public getById(playerId: string): Observable<Player> {
    return this.httpService
      .get<Player>(`/api/player/${playerId}`)
      .pipe(catchError((error: any) => Observable.throw(error)));
  }

  public updateById(playerId: string, player: Player): Observable<Player> {
    return this.httpService
      .put<Player>(`/api/player/${playerId}`, player)
      .pipe(catchError((error: any) => Observable.throw(error)));
  }

  public deleteById(playerId: string): Observable<Player> {
    return this.httpService
      .delete<Player>(`/api/player/${playerId}`)
      .pipe(catchError((error: any) => Observable.throw(error)));
  }
}
