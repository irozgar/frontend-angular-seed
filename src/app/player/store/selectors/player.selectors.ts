import { createFeatureSelector, createSelector } from '@ngrx/store';

import { GetRouterState } from '../../../shared/store/reducers/router.reducer';
import { Player } from '../../entities';
import * as fromReducers from '../reducers/player.reducer';

export const GetPlayerState = createFeatureSelector<fromReducers.IPlayerState>(
  'player',
);

export const GetPlayerEntities = createSelector(
  GetPlayerState,
  fromReducers.getPlayerEntities,
);

export const GetPlayerList = createSelector(
  GetPlayerEntities,
  entities => Object.keys(entities).map(id => entities[id]),
);

export const GetPlayerSelected = createSelector(
  GetPlayerEntities,
  GetRouterState,
  (entities, router): Player => {
    return router.state && entities[router.state.params.playerId];
  },
);

export const getPlayerLoaded = createSelector(
  GetPlayerState,
  fromReducers.getPlayerLoaded,
);

export const getPlayerLoading = createSelector(
  GetPlayerState,
  fromReducers.getPlayerLoading,
);
