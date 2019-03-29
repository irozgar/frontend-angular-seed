import { TestBed, inject } from '@angular/core/testing';

import { PlayerFacadeService } from './player.service';

describe('PlayerFacadeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PlayerFacadeService]
    });
  });

  it('should be created', inject([PlayerFacadeService], (service: PlayerFacadeService) => {
    expect(service).toBeTruthy();
  }));
});
