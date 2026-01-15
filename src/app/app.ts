import { Component, computed, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SummaryCard } from "./components/summary-card/summary-card";
import { TransactionList } from './components/transaction-list/transaction-list';
import { TransactionForm } from './components/transaction-form/transaction-form';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SummaryCard, TransactionList, TransactionForm],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('nibo-lite')

  // 1. O sinal com a lista de transações (Estado Inicial)
  transactions = signal([
    { id: 1, description: 'Mensalidade Nibo', value: 150.00, type: 'expense', date: '2026-01-10' },
    { id: 2, description: 'Freelance Design', value: 2500.00, type: 'income', date: '2026-01-12' },
    { id: 3, description: 'Internet', value: 100.00, type: 'expense', date: '2026-01-15' },
  ]);

  //2. Cálculos automáticos usando COMPUTED (Mágica do Angular)
  //Se o sinal 'transactions' mudar, esses valores recalcularão sozinhos!

  totalIncome = computed(() =>
    this.transactions()
      .filter(t => t.type === 'income')
      .reduce((acc, t) => acc + t.value, 0)
  );

  totalExpense = computed(() =>
    this.transactions()
      .filter(t => t.type === 'expense')
      .reduce((acc, t) => acc + t.value, 0)
  );

  balance = computed(() => this.totalIncome() - this.totalExpense());

  //3. Função para adicionar nova transação
  handleNewTransaction(newTranasaction: any) {
    // Adiciona no topo da lista (imutabilidade com Signals)
    this.transactions.update(old => [newTranasaction, ...old]);
  }
}
