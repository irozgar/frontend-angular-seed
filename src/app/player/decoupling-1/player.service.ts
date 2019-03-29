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
    return new Promise((resolve, reject) => {
      this.httpService
        .get<Player[]>(`/api/player`)
        .toPromise()
        .then(result => {
          resolve(result);
        })
        .catch(err => {
          reject(err);
        });
    });
  }
}
