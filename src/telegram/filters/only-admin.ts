import { AppContext } from 'src/telegram/types';
import config from 'src/config';

export const onlyAdmin = (ctx: AppContext) => {
  return (
    config().SUPER_ADMIN_ID === ctx.session.userId ||
    config().ADMIN_IDS.includes(ctx.session.userId)
  );
};
