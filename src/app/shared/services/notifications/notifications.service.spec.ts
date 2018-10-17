import { inject, TestBed } from '@angular/core/testing';
import { SimpleNotificationsModule } from 'angular2-notifications';

import { NotificationsService } from './notifications.service';

describe('NotificationsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SimpleNotificationsModule.forRoot()],
      providers: [NotificationsService],
    });
  });

  it('should be created', inject([NotificationsService], (service: NotificationsService) => {
    expect(service).toBeTruthy();
  }));
});
