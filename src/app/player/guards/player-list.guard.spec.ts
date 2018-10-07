import { TestBed, async, inject } from '@angular/core/testing';

import { PlayerListGuard } from './player-list.guard';

describe('PlayerListGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PlayerListGuard]
    });
  });

  it('should ...', inject([PlayerListGuard], (guard: PlayerListGuard) => {
    expect(guard).toBeTruthy();
  }));
});
