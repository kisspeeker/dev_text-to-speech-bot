import { NextFunction } from 'grammy';
import { ROUTE_COMMANDS_MAP } from 'src/telegram/router';
import { AppContext } from 'src/telegram/types';

export async function updateCommandsMiddleware(
  ctx: AppContext,
  next: NextFunction,
): Promise<void> {
  await next();

  const currRoute = ctx.session.routeName;

  const currCommands = ROUTE_COMMANDS_MAP.get(currRoute).filter(
    (routeCommand) => routeCommand.guard(ctx),
  );
  await ctx.api.deleteMyCommands();
  await ctx.api.setMyCommands(currCommands, {
    scope: { type: 'chat', chat_id: ctx.chat.id },
  });
}
