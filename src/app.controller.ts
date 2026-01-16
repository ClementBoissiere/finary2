import { Controller, Get } from '@nestjs/common';
import { csvOrchestrateurService } from './CSV/csvOrchestrateur.service';
import { CsvLine } from './CSV/models/csvLine.model';

@Controller()
export class AppController {
  constructor(private readonly csvOrchestrateurService: csvOrchestrateurService) {}

  @Get()
  getHello(): CsvLine[] {
    return this.csvOrchestrateurService.read('./input/test.csv');
  }
}
