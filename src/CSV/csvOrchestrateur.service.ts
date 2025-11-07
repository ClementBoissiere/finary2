import { Injectable } from '@nestjs/common';
import { CsvParserService } from './csvParser.service';
import { CsvReaderService } from './csvReader.service';
import { CSVBrut } from './models/csvBrut.model';
import { CsvLine } from './models/csvLine.model';
import { CsvMapperService } from './csvMapper.service';

@Injectable()
export class csvOrchestrateurService {
  constructor(
    private readonly csvParserService: CsvParserService,
    private readonly csvReaderService: CsvReaderService,
    private readonly csvMapperService: CsvMapperService,
  ) {}

  read(filePath: string): CsvLine[] {
    const rawLines: string = this.csvReaderService.readFile(filePath);
    const rawData: CSVBrut = this.csvParserService.formatStringDataCSV(rawLines);

    return this.csvMapperService.format(rawData);
  }
}
