import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { TransactionService } from '../service/transaction.service';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

interface Line {
  id: string;
  amount: number;
  balance : number;
  label : string;
  date : string;
}
@Component({
  selector: 'app-exercise3',
  templateUrl: './exercise3.component.html',
  styleUrl: './exercise3.component.css'

})

export class Exercise3Component implements AfterViewInit, OnInit {
  transactions: Line[] = [];
  currentDateTime: Date | undefined;
  displayedColumns: string[] = ['id', 'amount', 'balance', 'label', 'date'];
  public dataSource = new MatTableDataSource<Line>();
  
  //sort: MatSort | null = new MatSort;

  @ViewChild(MatSort) sort!: MatSort;
  constructor(private transactionService: TransactionService, private _liveAnnouncer: LiveAnnouncer) { }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  /** Announce the change in sort state for assistive technology. */
  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

  ngOnInit(): void {
    this.transactionService.getTransactions().subscribe(data => {
      this.dataSource.data = data;
      console.log(this.dataSource);
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
