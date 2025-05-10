import { AppContext } from './app-context';
import { Middleware } from 'grammy';

export interface AppBotTexts {
  guard?: (ctx: AppContext) => boolean;
  handler: Middleware<AppContext>;
}
