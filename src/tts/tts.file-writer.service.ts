import * as fs from 'fs';
import * as path from 'path';
import { createReadStream } from 'fs';
import { Injectable } from '@nestjs/common';
import { InputFile } from 'grammy';

@Injectable()
export class TTSFileWriter {
  private readonly tmpDir = path.resolve(process.cwd(), 'tmp');

  constructor() {}

  public async write(
    data: Buffer | Buffer[],
    userId: string,
  ) {
    const buffers = Array.isArray(data) ? data : [data];

    await fs.promises.mkdir(this.tmpDir, { recursive: true });

    const fileName = `tts_${userId}_${Date.now()}.mp3`;
    const outPath = path.join(this.tmpDir, fileName);
    const combined = Buffer.concat(buffers);

    await fs.promises.writeFile(outPath, combined);

    const stream = createReadStream(outPath);

    stream.once('close', () => {
      fs.promises.unlink(outPath).catch((error) => {
        console.error(`Failed to delete file ${outPath}:`, error);
      });
    });

    return new InputFile(stream, fileName);
  }
}
