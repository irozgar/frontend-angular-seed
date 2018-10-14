import { async, inject, TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';

import { PlayerListGuard } from './player-list.guard';

describe('PlayerListGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PlayerListGuard],
      imports: [StoreModule.forRoot({})],
    });
  });

  it('should ...', inject([PlayerListGuard], (guard: PlayerListGuard) => {
    expect(guard).toBeTruthy();
  }));
});
