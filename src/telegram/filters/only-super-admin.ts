import { AppContext } from 'src/telegram/types';
import config from 'src/config';

export const onlySuperAdmin = (ctx: AppContext) => {
  return config().SUPER_ADMIN_ID === ctx.session.userId
};
