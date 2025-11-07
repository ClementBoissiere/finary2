import { ligneCSVBrut } from './ligneCSVBrut.model';

export class CSVBrut {
  constructor() {
    this.csvBody = [];
  }
  csvBody: ligneCSVBrut[];
}
