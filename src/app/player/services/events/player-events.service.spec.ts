import { TestBed, inject } from '@angular/core/testing';

import { PlayerEventsService } from './player-events.service';
import { StoreModule } from '@ngrx/store';

describe('PlayerEventsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PlayerEventsService],
      imports: [StoreModule.forRoot({})],
    });
  });

  it('should be created', inject([PlayerEventsService], (service: PlayerEventsService) => {
    expect(service).toBeTruthy();
  }));
});
