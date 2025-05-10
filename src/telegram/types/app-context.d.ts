import { Context, SessionFlavor } from 'grammy';
import { AppSession } from './app-session';
import { TTSService } from 'src/tts/tts.service';

export type AppContext = Context & SessionFlavor<AppSession> & {
    ttsService: TTSService
};
