import { BotConfig } from 'grammy';
import { AppContext } from 'src/telegram/types';

export const BOT_OPTIONS: BotConfig<AppContext> = {
  client: {},
} as const;
