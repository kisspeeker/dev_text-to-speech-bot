import { AppRouteName } from 'src/telegram/constants';
import { AppSessionState } from 'src/telegram/constants/app-session-state';

export interface AppSession {
  routeName: AppRouteName;
  state?: AppSessionState;
  userId?: string;
}
