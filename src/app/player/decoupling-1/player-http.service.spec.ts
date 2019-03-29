import { TestBed, inject } from '@angular/core/testing';

import { PlayerHttpService } from './player-http.service';

describe('PlayerHttpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PlayerHttpService]
    });
  });

  it('should be created', inject([PlayerHttpService], (service: PlayerHttpService) => {
    expect(service).toBeTruthy();
  }));
});
