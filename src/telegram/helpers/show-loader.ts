import { Reactions } from '@grammyjs/emoji';
import { getRandomValue } from 'src/telegram/helpers';
import { AppContext } from 'src/telegram/types';

export const showLoader = async (ctx: AppContext) => {
  const reaction = String(getRandomValue(Reactions));
  const loaderMessage = await ctx.reply(`Loading ${reaction}`);

  return {
    loaderMessage,
    hideLoader: () => ctx.deleteMessages([loaderMessage.message_id]),
  };
};
