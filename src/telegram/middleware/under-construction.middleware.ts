import { NextFunction } from 'grammy';
import { AppContext } from 'src/telegram/types';

export async function underConstructionMiddleware(
  isUnderConstruction: boolean,
  ctx: AppContext,
  next: NextFunction,
): Promise<unknown> {
  if (isUnderConstruction) {
    return ctx.reply('isUnderConstruction');
  }

  await next();
}
