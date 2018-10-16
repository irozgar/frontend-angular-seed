import { Injectable } from '@angular/core';

import { NotificationsService as NService } from 'angular2-notifications';

@Injectable({
  providedIn: 'root',
})
export class NotificationsService {

  constructor(private notificationsService: NService) { }

  success(title: string, text: string, options?: any) {
    this.notificationsService.success(title, text, options);
  }

  error(title: string, text: string, options?: any) {
    this.notificationsService.error(title, text, options);
  }

  alert(title: string, text: string, options?: any) {
    this.notificationsService.alert(title, text, options);
  }

  warn(title: string, text: string, options?: any) {
    this.notificationsService.warn(title, text, options);
  }

  info(title: string, text: string, options?: any) {
    this.notificationsService.info(title, text, options);
  }

  bare(title: string, text: string, options?: any) {
    this.notificationsService.bare(title, text, options);
  }
}
