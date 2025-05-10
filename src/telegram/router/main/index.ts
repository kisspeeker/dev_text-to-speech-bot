import { onlyAdmin } from 'src/telegram/filters';
import { AppRouteConfig } from 'src/telegram/models/app-route-config.model';
import { AppRouteName } from 'src/telegram/constants';
import { AppSessionState } from 'src/telegram/constants/app-session-state';
import { ROUTE_COMMANDS_MAP } from 'src/telegram/router';

export const routeConfig = new AppRouteConfig(AppRouteName.Index);

routeConfig.addCommand({
  command: 'start',
  description: 'Запустить бота',
  handler: async (ctx) => {
    const c = ROUTE_COMMANDS_MAP.get(ctx.session.routeName).filter(
        routeCommand => routeCommand.guard(ctx),
      );
    const commands = c.reduce((acc, cmd) => {
      acc += `\n /${cmd.command} ${cmd.description}`;

      return acc;
    }, '');

    await ctx.reply(`Добро пожаловать! \n\n ${commands}`);
  },
});

routeConfig.addCommand({
  command: 'router_push_settings',
  description: 'Настройки',
  handler: async (ctx) => {
    ctx.session.routeName = AppRouteName.Settings;
    await ctx.reply('Настройки:');
  },
});

routeConfig.addCommand({
  command: 'router_push_admin',
  description: 'Переход в /admin',
  guard: onlyAdmin,
  handler: async (ctx) => {
    ctx.session.routeName = AppRouteName.Admin;
    await ctx.reply('Переход в Admin');
  },
});

routeConfig.addCommand({
  command: 'generate_by_openai',
  description: 'Генерация аудио через OpenAI',
  handler: async (ctx) => {
    ctx.session.routeName = AppRouteName.GeneratorOpenai;
    ctx.session.state = AppSessionState.AwaitPrompt;
    await ctx.reply('Введите текст для генерации аудио:');
  },
});

routeConfig.addCommand({
  command: 'generate_by_googletts',
  description: 'Генерация аудио через Google TTS',
  handler: async (ctx) => {
    ctx.session.routeName = AppRouteName.GeneratorGoogletts;
    ctx.session.state = AppSessionState.AwaitPrompt;
    await ctx.reply('Введите текст для генерации аудио:');
  },
});
