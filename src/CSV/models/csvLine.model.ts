import { UUID } from 'node:crypto';
import { Category } from './category.enum';

export interface CsvLine {
  id: UUID;
  date: Date;
  libelle: string;
  credit: number;
  debit: number;
  category: Category;
}
