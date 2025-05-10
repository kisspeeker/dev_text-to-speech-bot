import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';

import { TelegramService } from 'src/telegram/telegram.service';
import { ConfigModule } from '@nestjs/config';
import { TTSModule } from 'src/tts/tts.module';

@Module({
  imports: [ConfigModule, HttpModule, TTSModule],
  providers: [TelegramService],
})
export class TelegramModule { }
