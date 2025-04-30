import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AUTO_RETRY_OPTIONS, BOT_OPTIONS } from 'src/telegram/constants';
import { AppContext } from 'src/telegram/types';
import { Bot, session } from 'grammy';
import { autoRetry } from '@grammyjs/auto-retry';
import {
  parseUserMiddleware,
  underConstructionMiddleware,
  updateCommandsMiddleware,
} from 'src/telegram/middleware';
import { createDefaultSession } from 'src/telegram/helpers';
import { router } from 'src/telegram/router';

@Injectable()
export class TelegramService {
  private bot: Bot;

  constructor(private config: ConfigService) {
    this.bot = new Bot<AppContext>(this.botToken, BOT_OPTIONS);
  }

  private get botToken() {
    return this.config.get<string>('BOT_TOKEN');
  }

  private get isUnderConstruction() {
    return this.config.get<string>('IS_UNDER_CONSTRUCTION') === 'true';
  }

  get botInstance() {
    return this.bot;
  }

  /**
   * Порядок мидлварей важен
   */
  private setupMiddleware() {
    this.botInstance.api.config.use(autoRetry(AUTO_RETRY_OPTIONS));
    this.botInstance.use(
      (ctx: AppContext, next) =>
        underConstructionMiddleware(this.isUnderConstruction, ctx, next),
      session(createDefaultSession()),
      parseUserMiddleware,
      updateCommandsMiddleware,
      router,
    );
  }

  async startBot() {
    this.setupMiddleware();
    return this.botInstance.start();
  }
}
