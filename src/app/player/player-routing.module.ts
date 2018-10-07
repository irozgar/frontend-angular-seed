import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import * as fromPresenters from './presenters';

const routes: Routes = [
  {
    path: '',
    component: fromPresenters.PlayerListPresenter,
  },
  {
    path: 'create',
    component: fromPresenters.PlayerItemPresenter,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlayerRoutingModule {
}
