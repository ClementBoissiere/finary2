import { Injectable } from '@nestjs/common';
import { CSVBrut } from './models/csvBrut.model';
import { ligneCSVBrut } from './models/ligneCSVBrut.model';
import { randomUUID } from 'node:crypto';

@Injectable()
export class CsvParserService {
  formatStringDataCSV(data: string): CSVBrut {
    let ligne: ligneCSVBrut;
    const brut: CSVBrut = new CSVBrut();
    data.split(';').forEach((csv: string, index: number) => {
      switch (index % 4) {
        case 0:
          ligne = new ligneCSVBrut();
          ligne.id = randomUUID();
          ligne.date = csv.trim();
          break;
        case 1:
          ligne.libelle = csv.trim();
          break;
        case 2:
          ligne.debit = csv.trim();
          break;
        case 3:
          ligne.credit = csv.trim();
          brut.csvBody?.push(ligne);
          break;
        default:
          console.log(`${data}`);
          break;
      }
    });

    return brut;
  }
}
