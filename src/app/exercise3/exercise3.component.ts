import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../service/transaction.service';

@Component({
  selector: 'app-exercise3',
  templateUrl: './exercise3.component.html',
  styleUrl: './exercise3.component.scss'
})
export class Exercise3Component {
  transactions: any[] = []; 
  currentDateTime: Date | undefined;

  constructor(private transactionService: TransactionService) {}

  /**I use ngOnInit to load the data from teh json files at the same time the page is loaded, and use the service for it*/
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
