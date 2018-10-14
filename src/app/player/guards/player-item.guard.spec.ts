import { async, inject, TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';

import { PlayerItemGuard } from './player-item.guard';

describe('PlayerItemGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PlayerItemGuard],
      imports: [StoreModule.forRoot({})],
    });
  });

  it('should ...', inject([PlayerItemGuard], (guard: PlayerItemGuard) => {
    expect(guard).toBeTruthy();
  }));
});
