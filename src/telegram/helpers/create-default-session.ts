import { SessionOptions } from 'grammy';
import { AppRouteName } from 'src/telegram/constants';
import { AppSession } from 'src/telegram/types';

export function createDefaultSession(
  params: Record<string, unknown> = {},
): SessionOptions<AppSession> {
  return {
    initial: () => ({
      routeName: AppRouteName.Index,
      ...(params ?? {}),
    }),
  };
}
