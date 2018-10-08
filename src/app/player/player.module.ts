import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';

import * as fromComponents from './components';
import { PlayerRoutingModule } from './player-routing.module';
import * as fromPresenters from './presenters';
import * as fromReducers from './store/reducers';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    PlayerRoutingModule,
    StoreModule.forFeature('player', fromReducers.reducers),
  ],
  declarations: [
    ...fromPresenters.presenters,
    ...fromComponents.components,
  ],
})
export class PlayerModule {
}
