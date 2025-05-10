import Openai from 'openai';
import * as googleTTS from 'google-tts-api';

import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TTSFileWriter } from 'src/tts/tts.file-writer.service';

@Injectable()
export class TTSService {
  constructor(
    private http: HttpService, 
    private config: ConfigService,
    private writer: TTSFileWriter,
  ) { }

  async generateGoogleTTS(text: string, options: {userId: string}) {
    const urls = googleTTS.getAllAudioUrls(text, { lang: 'en' });
    const buffers = [];

    for (const { url } of urls) {
      const res = await this.http.axiosRef.get(url, { responseType: 'arraybuffer' });

      buffers.push(Buffer.from(res.data));
    }

    return this.writer.write(buffers, options.userId);
  }

  /** TODO: WIP generateByOpenai */
  async generateByOpenai(input: string, options: {userId: string}) {
    try {
      const openai = new Openai({
        apiKey: this.config.get<string>('OPENAI_SECRET_KEY'),
      });
      const mp3 = await openai.audio.speech.create({
        model: 'tts-1',
        voice: 'coral',
        input,
        // instructions: options?.instructions,
      });
  
      const buffers = Buffer.from(await mp3.arrayBuffer());

      return this.writer.write(buffers, options.userId);
    } catch(error) {
      console.error(error);
    }
  }
}
