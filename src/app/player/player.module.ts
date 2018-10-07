import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlayerRoutingModule } from './player-routing.module';

import * as fromComponents from './components';

@NgModule({
  imports: [
    CommonModule,
    PlayerRoutingModule
  ],
  declarations: [
    ...fromComponents.components,
  ]
})
export class PlayerModule { }
