import { TestBed, inject } from '@angular/core/testing';

import { PlayerEventsService } from './player-events.service';

describe('PlayerEventsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PlayerEventsService]
    });
  });

  it('should be created', inject([PlayerEventsService], (service: PlayerEventsService) => {
    expect(service).toBeTruthy();
  }));
});
