import { Router } from '@grammyjs/router';
import { routes } from 'src/telegram/router/routes';
import { AppContext } from 'src/telegram/types';
import { AppRouteConfig } from 'src/telegram/models/app-route-config.model';
import { AppRouteName } from 'src/telegram/constants';

export const router = new Router((ctx: AppContext) => ctx.session.routeName);

export const ROUTE_COMMANDS_MAP = new Map<
  AppRouteName,
  AppRouteConfig['commands']
>();

const setupRoute = (routeConfig: AppRouteConfig) => {
  const currentRoute = router.route(routeConfig.routeName);

  routeConfig.commands.forEach((routeCommand) => {
    currentRoute
      .filter(routeCommand.guard)
      .command(routeCommand.command, routeCommand.handler);
  });

  routeConfig.texts.forEach((routeTexts) => {
    currentRoute
      .filter(routeTexts.guard)
      .on(':text', routeTexts.handler);
  });

  ROUTE_COMMANDS_MAP.set(routeConfig.routeName, routeConfig.commands);
};

routes.forEach(setupRoute);
