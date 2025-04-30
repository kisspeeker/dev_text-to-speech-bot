import { AppRouteName } from 'src/telegram/constants';

export interface AppSession {
  routeName: AppRouteName;
  userId?: string;
}
