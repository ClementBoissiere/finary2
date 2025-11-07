import { Injectable } from '@nestjs/common';
import { readFileSync } from 'node:fs';

@Injectable()
export class CsvReaderService {
  readFile(filePath: string): string {
    return readFileSync(filePath, 'utf8');
  }
}
