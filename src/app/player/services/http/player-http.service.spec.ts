import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { getTestBed, inject, TestBed } from '@angular/core/testing';

import { Player } from '../../entities';

import { PlayerHttpService } from './player-http.service';

describe('PlayerHttpService', () => {
  let injector: TestBed;
  let service: PlayerHttpService;
  let httpMock: HttpTestingController;

  const playersData = [
    Player.builder().id('1').firstName('Albert').build(),
    Player.builder().id('2').firstName('Albert2').build(),
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PlayerHttpService],
    });
    injector = getTestBed();
    service = injector.get(PlayerHttpService);
    httpMock = injector.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', inject([PlayerHttpService], (service: PlayerHttpService) => {
    expect(service).toBeTruthy();
  }));

  describe('Get all players', () => {
    it('should return an Observable<Player[]>', () => {
      service.getAll().subscribe((response: Player[]) => {
        expect(response.length).toBe(2);
        expect(response).toEqual(playersData);
      });

      const req = httpMock.expectOne(`/api/player`);
      expect(req.request.method).toBe('GET');
      req.flush(playersData);
    });

    it('should throw error', () => {
      service.getAll().subscribe(
        () => {},
        err => {
          expect(err.name).toBe(`TypeError`);
        },
      );

      const req = httpMock
        .expectOne(`/api/player`)
        .error(new ErrorEvent('Error'));
    });
  });

  describe('Get player', () => {
    it('should return an Observable<Player>', () => {
      service.getById(playersData[0].id).subscribe((response: Player) => {
        expect(response).toEqual(playersData[0]);
      });

      const req = httpMock.expectOne(`/api/player/${playersData[0].id}`);
      expect(req.request.method).toBe('GET');
      req.flush(playersData[0]);
    });

    it('should throw error', () => {
      service.getById(playersData[0].id).subscribe(
        () => {},
        err => {
          expect(err.name).toBe(`TypeError`);
        },
      );

      const req = httpMock
        .expectOne(`/api/player/${playersData[0].id}`)
        .error(new ErrorEvent('Error'));
    });
  });

  describe('Create player', () => {
    it('should return an Observable<Player>', () => {
      service.create(playersData[0]).subscribe((response: Player) => {
        expect(response).toEqual(playersData[0]);
      });

      const req = httpMock.expectOne(`/api/player`);
      expect(req.request.method).toBe('POST');
      req.flush(playersData[0]);
    });

    it('should throw error', () => {
      service.create(playersData[0]).subscribe(
        () => {},
        err => {
          expect(err.name).toBe(`TypeError`);
        },
      );

      const req = httpMock
        .expectOne(`/api/player`)
        .error(new ErrorEvent('Error'));
    });
  });

  describe('Update player', () => {
    it('should return player', () => {
      service.updateById(playersData[0]).subscribe((response: Player) => {
        expect(response).toEqual(playersData[0]);
      });

      const req = httpMock.expectOne(`/api/player/${playersData[0].id}`);
      expect(req.request.method).toBe('PUT');
      req.flush(playersData[0]);
    });

    it('should throw error', () => {
      service.updateById(playersData[0]).subscribe(
        () => {
        },
        err => {
          expect(err.name).toBe(`TypeError`);
        },
      );

      const req = httpMock
        .expectOne(`/api/player/${playersData[0].id}`)
        .error(new ErrorEvent('Error'));
    });
  });

  describe('Remove project', () => {
    it('should return player', () => {
      service.deleteById(playersData[0].id).subscribe((response: Player) => {
        expect(response).toEqual(playersData[0]);
      });

      const req = httpMock.expectOne(`/api/player/${playersData[0].id}`);
      expect(req.request.method).toBe('DELETE');
      req.flush(playersData[0]);
    });

    it('should throw error', () => {
      service.deleteById(playersData[0].id).subscribe(
        () => {},
        err => {
          expect(err.name).toBe(`TypeError`);
        },
      );

      const req = httpMock
        .expectOne(`/api/player/${playersData[0].id}`)
        .error(new ErrorEvent('Error'));
    });
  });
});

