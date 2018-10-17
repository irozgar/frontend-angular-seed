import { ROUTER_NAVIGATION } from '@ngrx/router-store';
import { combineReducers, Store, StoreModule } from '@ngrx/store';

import { TestBed } from '@angular/core/testing';

import * as fromRoot from '../../../shared/store/reducers';
import * as fromRootReducers from '../../../shared/store/reducers/router.reducer';
import { Player } from '../../entities';
import * as fromActions from '../actions/index';
import * as fromReducers from '../reducers/player.reducer';
import * as fromSelectors from '../selectors/player.selectors';


const PlayerData = Player.builder().id('1').firstName('Albert').build();
const PlayerData2 = Player.builder().id('2').firstName('Albert2').build();
const PlayersData = [PlayerData, PlayerData2];
const PlayerEntities = {
  [PlayerData.id]: PlayerData,
  [PlayerData2.id]: PlayerData2,
};

export const NavigationData = {
  type: 'ROUTER_NAVIGATION',
  payload: {
    routerState: {
      url: '/player',
      queryParams: {},
      params: { playerId: PlayerData.id },
    },
    event: {},
  },
};

describe('Player Selectors', () => {
  let store: Store<fromReducers.IPlayerState>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          router: fromRoot.reducers,
          player: fromReducers.playerReducer,
        }),
      ],
    });

    store = TestBed.get(Store);
  });

  describe('[Player Entities selectors]', () => {
    it('(GetPlayerState) should return state of player store slice', () => {
      let result: fromReducers.IPlayerState =
        fromReducers.initialState;

      store
        .select(fromSelectors.GetPlayerState)
        .subscribe(value => (result = value));
      expect(result).toEqual(fromReducers.initialState);

      store.dispatch(new fromActions.GetPlayersSuccess(PlayersData));
      expect(result).toEqual({
        ...fromReducers.initialState,
        entities: PlayerEntities,
        loaded: true,
      });
    });

    it('(GetPlayerEntities) should return project as entities', () => {
      let result: { [id: string]: Player } = {};

      store
        .select(fromSelectors.GetPlayerEntities)
        .subscribe(value => (result = value));

      store.dispatch(new fromActions.GetPlayersSuccess(PlayersData));
      expect(result).toEqual(PlayerEntities);
    });

    it('(GetPlayerSelected) should return selected player as an entity', () => {
      let result = {};
      let params: { [key: string]: string } = {};

      store.dispatch(new fromActions.GetPlayerSuccess(PlayerData));
      store.dispatch(NavigationData);
      store
        .select(fromRootReducers.GetRouterState)
        .subscribe(routerState => (params = routerState.state.params));
      expect(params).toEqual({ playerId: PlayerData.id });

      store
        .select(fromSelectors.GetPlayerSelected)
        .subscribe(selectedPlayer => (result = selectedPlayer));
      expect(result).toEqual(PlayerData);
    });

    it('(GetPlayerList) should return players as an array', () => {
      let result: Player[] = [];

      store
        .select(fromSelectors.GetPlayerList)
        .subscribe(value => (result = value));
      expect(result).toEqual([]);

      store.dispatch(new fromActions.GetPlayersSuccess(PlayersData));
      expect(result).toEqual(PlayersData);
    });

    it('(GetPlayerLoaded) should return the player loaded state', () => {
      let result = false;

      store
        .select(fromSelectors.GetPlayerLoaded)
        .subscribe(value => (result = value));
      expect(result).toEqual(false);

      store.dispatch(new fromActions.GetPlayersSuccess(PlayersData));
      expect(result).toEqual(true);
    });

    it('(GetPlayerLoading) should return the player loading state', () => {
      let result = false;

      store
        .select(fromSelectors.GetPlayerLoading)
        .subscribe(value => (result = value));
      expect(result).toEqual(false);

      store.dispatch(new fromActions.GetPlayers());
      expect(result).toEqual(true);
    });
  });
});
