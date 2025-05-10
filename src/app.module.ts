import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import config from 'src/config';
import { TelegramModule } from 'src/telegram/telegram.module';
import { TTSModule } from 'src/tts/tts.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env.local', '.env'],
      load: [config],
    }),
    TelegramModule,
    TTSModule,
  ],
})
export class AppModule {
  constructor() { }
}
