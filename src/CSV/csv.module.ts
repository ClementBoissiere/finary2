import { Module } from '@nestjs/common';
import { CategorizationService } from './categorization/categorization.service';
import { csvOrchestrateurService } from './csvOrchestrateur.service';
import { CsvMapperService } from './csvMapper.service';
import { CsvParserService } from './csvParser.service';
import { CsvReaderService } from './csvReader.service';

@Module({
  imports: [],
  providers: [csvOrchestrateurService, CsvReaderService, CsvMapperService, CsvParserService, CategorizationService],
  exports: [csvOrchestrateurService],
})
export class CSVModule {}
