import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionService } from './services/transaction.service';
import { Transaction, TransactionsByCategory } from './models/transaction.model';

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  private readonly transactionService = inject(TransactionService);

  transactionsByCategory: TransactionsByCategory = {};
  categories: string[] = [];
  loading = true;
  error: string | null = null;

  ngOnInit(): void {
    this.loadTransactions();
  }

  loadTransactions(): void {
    this.transactionService.getTransactions().subscribe({
      next: (transactions) => {
        this.transactionsByCategory = this.groupByCategory(transactions);
        this.categories = Object.keys(this.transactionsByCategory);
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Erreur lors du chargement des transactions';
        this.loading = false;
        console.error(err);
      },
    });
  }

  private groupByCategory(transactions: Transaction[]): TransactionsByCategory {
    return transactions.reduce((acc, transaction) => {
      const category = transaction.category;
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].push(transaction);
      return acc;
    }, {} as TransactionsByCategory);
  }

  getCategoryTotal(category: string): number {
    const transactions = this.transactionsByCategory[category] || [];
    return transactions.reduce((sum, t) => sum + (t.debit || 0) - (t.credit || 0), 0);
  }
}
