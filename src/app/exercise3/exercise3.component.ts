import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../service/transaction.service';

@Component({
  selector: 'app-exercise3',
  templateUrl: './exercise3.component.html',
  styleUrl: './exercise3.component.css'
})
export class Exercise3Component {
  transactions: any[] = []; 
  currentDateTime: Date | undefined;

  constructor(private transactionService: TransactionService) {}

  ngOnInit(): void {
    this.transactionService.getTransactions().subscribe(data => {
      this.transactions = data; 
      console.log(this.transactions);
    });
    this.updateDateTime();
    setInterval(() => {
      this.updateDateTime();
    }, 1000);
  }

  private updateDateTime() {
    this.currentDateTime = new Date();
  }
}
