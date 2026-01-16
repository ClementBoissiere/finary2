import { Injectable } from '@nestjs/common';
import { CategorizationService } from './categorization/categorization.service';
import { CSVBrut } from './models/csvBrut.model';
import { CsvLine } from './models/csvLine.model';
import { ligneCSVBrut } from './models/ligneCSVBrut.model';

@Injectable()
export class CsvMapperService {
  constructor(private readonly categorizationService: CategorizationService) {}

  format(data: CSVBrut): CsvLine[] {
    const csvData: CsvLine[] = [];
    data.csvBody?.forEach((line: ligneCSVBrut) => {
      csvData.push(this.mapLineToCsvData(line));
    });

    return csvData;
  }

  mapLineToCsvData(rawData: ligneCSVBrut): CsvLine {
    const libelle = this.getLibelle(rawData.libelle);
    return {
      id: rawData.id,
      date: this.getDate(rawData.date),
      libelle,
      credit: this.getCredit(rawData.credit),
      debit: this.getDebit(rawData.debit),
      category: this.categorizationService.categorize(libelle),
    };
  }

  getDate(rawDate: string): Date {
    return new Date(rawDate);
  }

  getLibelle(line: string): string {
    return line;
  }

  getCredit(line: string): number {
    return Number.parseFloat(line);
  }

  getDebit(line: string): number {
    return Number.parseFloat(line);
  }
}
