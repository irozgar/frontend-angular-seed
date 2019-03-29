import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Player } from '../entities/index';

@Injectable({
  providedIn: 'root',
})
export class PlayerHttpService {
  constructor(private httpService: HttpClient) {
  }

  public loadAll() {
    return this.httpService
      .get<Player[]>(`/api/player`);
  }
}
