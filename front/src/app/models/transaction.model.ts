export interface Transaction {
  id: string;
  date: string;
  libelle: string;
  credit: number;
  debit: number;
  category: string;
}

export interface TransactionsByCategory {
  [category: string]: Transaction[];
}
