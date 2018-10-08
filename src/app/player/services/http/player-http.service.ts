import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { Player } from '../../entities';

@Injectable({
  providedIn: 'root',
})
export class PlayerHttpService {

  constructor(private httpService: HttpClient) {
  }

  public create(player: Player): Observable<Player> {
    return this.httpService
      .post<Player>(`/api/player`, player)
      .pipe(catchError((error: any) => Observable.throw(error)));
  }

  public getAll(): Observable<Player[]> {
    return this.httpService
      .get<Player[]>(`/api/player`)
      .pipe(catchError((error: any) => Observable.throw(error)));
  }

  public getById(playerId: string): Observable<Player> {
    return this.httpService
      .get<Player>(`/api/player/${playerId}`)
      .pipe(catchError((error: any) => Observable.throw(error)));
  }

  public updateById(player: Player): Observable<Player> {
    return this.httpService
      .put<Player>(`/api/player/${player.id}`, player)
      .pipe(catchError((error: any) => {
        console.log(error);
        return Observable.throw(error);
      }));  }

  public deleteById(playerId: string): Observable<Player> {
    return this.httpService
      .delete<Player>(`/api/player/${playerId}`)
      .pipe(catchError((error: any) => Observable.throw(error)));
  }
}
