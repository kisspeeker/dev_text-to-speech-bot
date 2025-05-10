import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';

import { TTSService } from 'src/tts/tts.service';
import { ConfigModule } from '@nestjs/config';
import { TTSFileWriter } from 'src/tts/tts.file-writer.service';

@Module({
  imports: [ConfigModule, HttpModule],
  providers: [TTSService, TTSFileWriter],
  exports: [TTSService, TTSFileWriter],
})
export class TTSModule { }
