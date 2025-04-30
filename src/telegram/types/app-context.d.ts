import { Context, SessionFlavor } from 'grammy';
import { AppSession } from './app-session';

export type AppContext = Context & SessionFlavor<AppSession>;
