import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import * as fromComponents from './components';
import { PlayerRoutingModule } from './player-routing.module';
import * as fromPresenters from './presenters';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    PlayerRoutingModule,
  ],
  declarations: [
    ...fromPresenters.presenters,
    ...fromComponents.components,
  ],
})
export class PlayerModule {
}
