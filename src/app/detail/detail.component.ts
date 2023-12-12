import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TransactionService } from '../service/transaction.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css'
})
export class DetailComponent {
  transactionId: string | null = '';
  transaction: any;

  constructor(
    private route: ActivatedRoute,
    private transactionService: TransactionService
  ) {}
  
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.transactionId = params.get('id');
      console.log(this.transactionId);
      this.transactionService.getTransactionDetail(this.transactionId)
        .subscribe(data => {
          this.transaction = data;
          console.log("transaction: ", this.transaction);
        });
    });
  }
}
