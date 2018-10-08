import {
  ActivatedRouteSnapshot,
  Params,
  RouterStateSnapshot,
} from '@angular/router';
import { createFeatureSelector } from '@ngrx/store';

import * as fromRouter from '@ngrx/router-store';
import { RouterReducerState } from '@ngrx/router-store';

export interface IRouterState {
  url: string;
  queryParams: Params;
  params: Params;
}

export const routerReducer = fromRouter.routerReducer;

export const GetRouterState = createFeatureSelector<
  fromRouter.RouterReducerState<IRouterState>
  >('router');

export class CustomSerializer
  implements fromRouter.RouterStateSerializer<IRouterState> {
  serialize(routerState: RouterStateSnapshot): IRouterState {
    const { url } = routerState;
    const { queryParams } = routerState.root;

    let state: ActivatedRouteSnapshot = routerState.root;
    while (state.firstChild) {
      state = state.firstChild;
    }
    const { params } = state;

    return { url, queryParams, params };
  }
}
