import { AppRouteConfig } from 'src/telegram/models/app-route-config.model';
import { AppRouteName } from 'src/telegram/constants';
import { AppSessionState } from 'src/telegram/constants/app-session-state';

export const routeConfig = new AppRouteConfig(AppRouteName.GeneratorOpenai);

routeConfig.addTexts({
  guard: ctx => ctx.session.state === AppSessionState.AwaitPrompt,
  handler: async (ctx) => {
    try {
      // await ctx.ttsService.generateByOpenai(ctx.message.text, { userId: ctx.session.userId });
      await ctx.reply('openai doesntwork now');
    } catch (error) {
      console.error(error);
    } finally {
      ctx.session.routeName = AppRouteName.Index;
    }
  },
});
