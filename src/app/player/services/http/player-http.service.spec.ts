import { HttpClientModule } from '@angular/common/http';
import { inject, TestBed } from '@angular/core/testing';

import { PlayerHttpService } from './player-http.service';

describe('PlayerHttpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [PlayerHttpService],
    });
  });

  it('should be created', inject([PlayerHttpService], (service: PlayerHttpService) => {
    expect(service).toBeTruthy();
  }));
});
