import { Module } from '@nestjs/common';
import { csvOrchestrateurService } from './csvOrchestrateur.service';
import { CsvReaderService } from './csvReader.service';
import { CsvMapperService } from './csvMapper.service';
import { CsvParserService } from './csvParser.service';

@Module({
  imports: [],
  providers: [csvOrchestrateurService, CsvReaderService, CsvMapperService, CsvParserService],
  exports: [csvOrchestrateurService],
})
export class CSVModule {}
