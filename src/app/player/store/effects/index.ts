import { PlayerNotificationsEffects } from './notifications.effects';
import { PlayerEffects } from './player.effects';
import { PlayerRouterEffects } from './router.effects';

export const effects = [PlayerEffects, PlayerNotificationsEffects, PlayerRouterEffects];

export * from './notifications.effects';
export * from './player.effects';
export * from './router.effects';
