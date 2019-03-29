import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Player } from '../entities/index';

@Injectable({
  providedIn: 'root',
})
export class PlayerService {

  constructor(private httpService: HttpClient) {
  }

  public getAll(): Promise<Player[]> {
      return this.httpService
        .get<Player[]>(`/api/player`)
        .toPromise();
  }
}
