import { Component, output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-transaction-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './transaction-form.html',
  styleUrl: './transaction-form.css',
})
export class TransactionForm {
  //Usando o novo "output()" do Angular 17.3+ para enviar dados ao pai
  onAdd = output<any>();

  //Sinais para os campos do formulário
  description = '';
  value: number | null = null;
  type: 'income' | 'expense' = 'income';

  submit() {
    if (this.description && this.value) {
      this.onAdd.emit({
        id: Date.now(),
        description: this.description,
        value: this.value,
        type: this.type,
        date: new Date().toISOString().split('T')[0]
      });

      //Limpar campos
      this.description = '';
      this.value = null;
    }
  }
}
