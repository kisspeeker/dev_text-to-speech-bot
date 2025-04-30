import { NextFunction } from 'grammy';
import { AppContext } from 'src/telegram/types';

export async function parseUserMiddleware(
  ctx: AppContext,
  next: NextFunction,
): Promise<void> {
  if (!ctx.session.userId) {
    ctx.session.userId = String(ctx.from.id);
  }

  await next();
}
