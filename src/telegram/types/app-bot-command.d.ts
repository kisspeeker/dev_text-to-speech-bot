import { AppContext } from './app-context';
import { BotCommand } from 'grammy/types';
import { CommandMiddleware } from 'grammy';

export interface AppBotCommand extends BotCommand {
  handler: CommandMiddleware<AppContext>;
  guard?: (ctx: AppContext) => boolean;
}
