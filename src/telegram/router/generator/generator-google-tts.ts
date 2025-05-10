import { AppRouteConfig } from 'src/telegram/models/app-route-config.model';
import { AppRouteName } from 'src/telegram/constants';
import { AppSessionState } from 'src/telegram/constants/app-session-state';
import { showLoader } from 'src/telegram/helpers';

export const routeConfig = new AppRouteConfig(AppRouteName.GeneratorGoogletts);

routeConfig.addTexts({
  guard: ctx => ctx.session.state === AppSessionState.AwaitPrompt,
  handler: async (ctx) => {
    try {
      const { hideLoader } = await showLoader(ctx);
      const outputFile = await ctx.ttsService.generateGoogleTTS(ctx.message.text, { userId: ctx.session.userId });

      await hideLoader();
      await ctx.replyWithAudio(outputFile);
    } catch (error) {
      console.error(error);
      await ctx.reply('Ошибка генерации файла');
    } finally {
      ctx.session.routeName = AppRouteName.Index;
    }
  },
});
