import { async, inject, TestBed } from '@angular/core/testing';

import { PlayerItemGuard } from './player-item.guard';

describe('PlayerItemGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PlayerItemGuard],
    });
  });

  it('should ...', inject([PlayerItemGuard], (guard: PlayerItemGuard) => {
    expect(guard).toBeTruthy();
  }));
});
