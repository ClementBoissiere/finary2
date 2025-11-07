import { Injectable } from '@nestjs/common';
import { CSVBrut } from './models/csvBrut.model';
import { CsvLine } from './models/csvLine.model';
import { ligneCSVBrut } from './models/ligneCSVBrut.model';

@Injectable()
export class CsvMapperService {
  format(data: CSVBrut): CsvLine[] {
    const csvData: CsvLine[] = [];
    data.csvBody?.forEach((line: ligneCSVBrut) => {
      csvData.push(this.mapLineToCsvData(line));
    });

    return csvData;
  }

  mapLineToCsvData(rawData: ligneCSVBrut): CsvLine {
    return {
      id: rawData.id,
      date: this.getDate(rawData.date),
      libelle: this.getLibelle(rawData.libelle),
      credit: this.getCredit(rawData.credit),
      debit: this.getDebit(rawData.debit),
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
