import * as main from 'src/telegram/router/main';
import * as admin from 'src/telegram/router/admin';
import * as generator from 'src/telegram/router/generator';

export const routes = [
  ...Object.values(main),
  ...Object.values(admin),
  ...Object.values(generator),
] as const;
