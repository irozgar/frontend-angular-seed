import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PlayerItemGuard, PlayerListGuard } from './guards';
import * as fromPresenters from './presenters';

const routes: Routes = [
  {
    path: '',
    component: fromPresenters.PlayerListPresenter,
    resolve: {
      projects: PlayerListGuard,
    },
  },
  {
    path: 'create',
    component: fromPresenters.PlayerItemPresenter,
  },
  {
    path: ':playerId/edit',
    component: fromPresenters.PlayerItemPresenter,
    resolve: {
      player: PlayerItemGuard,
    },

  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlayerRoutingModule {
}
