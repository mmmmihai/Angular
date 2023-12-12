import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  private jsonUrl = 'assets/data/transactions.json';

  constructor(private http: HttpClient) {}

  getTransactions(): Observable<any[]> {
    return this.http.get<any[]>(this.jsonUrl);
  }

  getTransactionDetail(id: string | null) {
    return this.http.get(`assets/data/${id}.json`);
  }
}
