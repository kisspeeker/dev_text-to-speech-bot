import { onlyAdmin } from 'src/telegram/filters/only-admin';
import { AppRouteConfig } from 'src/telegram/models/app-route-config.model';
import { AppRouteName } from 'src/telegram/constants';

export const routeConfig = new AppRouteConfig(AppRouteName.Index);

routeConfig.addCommand({
  command: 'start',
  description: 'Запустить бота',
  handler: async (ctx) => {
    await ctx.reply('Добро пожаловать!');
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
