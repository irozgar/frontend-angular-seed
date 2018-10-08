import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterStateSerializer } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';

import { reducers } from './store/reducers';
import { CustomSerializer } from './store/reducers/router.reducer';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('router', reducers),
  ],
  providers: [
    { provide: RouterStateSerializer, useClass: CustomSerializer },
  ],
  declarations: [],
})
export class SharedModule { }
