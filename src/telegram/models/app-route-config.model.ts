import { AppRouteName } from 'src/telegram/constants';
import { AppBotCommand } from 'src/telegram/types/app-bot-command';

export class AppRouteConfig {
  routeName: AppRouteName;
  commands: AppBotCommand[] = [];

  constructor(routeName: AppRouteName) {
    this.routeName = routeName;
  }

  private get prefix() {
    return this.routeName === AppRouteName.Index ? '' : `${this.routeName}_`;
  }

  addCommand(payload: AppBotCommand) {
    this.commands.push({
      guard: () => true, // fallback при отсутствии guard
      ...payload,
      command: `${this.prefix}${payload.command}`,
    });
  }
}
