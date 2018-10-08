import * as fromRouter from '@ngrx/router-store';

import { IRouterState, routerReducer } from './router.reducer';

export interface SharedState {
  router: fromRouter.RouterReducerState<IRouterState>;
}

export const reducers = routerReducer;
