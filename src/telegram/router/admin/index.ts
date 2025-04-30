import { AppRouteConfig } from 'src/telegram/models/app-route-config.model';
import { AppRouteName } from 'src/telegram/constants';

export const routeConfig = new AppRouteConfig(AppRouteName.Admin);

routeConfig.addCommand({
  command: 'router_push_main',
  description: 'На главную',
  handler: async (ctx) => {
    ctx.session.routeName = AppRouteName.Index;
    await ctx.reply('Переход в Main');
  },
});
