import { UUID } from 'node:crypto';

export class ligneCSVBrut {
  constructor() {}
  id: UUID;
  date: string;
  libelle: string;
  debit: string;
  credit: string;
}
