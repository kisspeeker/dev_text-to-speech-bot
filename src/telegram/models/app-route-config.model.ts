import { AppRouteName } from 'src/telegram/constants';
import { AppBotCommand } from 'src/telegram/types/app-bot-command';
import { AppBotTexts } from 'src/telegram/types/app-bot-texts';

export class AppRouteConfig {
  routeName: AppRouteName;
  commands: AppBotCommand[] = [];
  texts: AppBotTexts[] = [];

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

  addTexts(payload: AppBotTexts) {
    this.texts.push({
      guard: () => true, // fallback при отсутствии guard
      handler: payload.handler,
    });
  }
}
