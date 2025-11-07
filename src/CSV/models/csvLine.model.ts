import { UUID } from 'node:crypto';

export interface CsvLine {
  id: UUID;
  date: Date;
  libelle: string;
  credit: number;
  debit: number;
}
