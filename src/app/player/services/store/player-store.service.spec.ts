import { inject, TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';

import { PlayerStoreService } from './player-store.service';

describe('PlayerStoreService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [StoreModule.forRoot({})],
      providers: [PlayerStoreService],
    });
  });

  it('should be created', inject([PlayerStoreService], (service: PlayerStoreService) => {
    expect(service).toBeTruthy();
  }));
});
