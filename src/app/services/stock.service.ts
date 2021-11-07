import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Stock } from '../models/Stock';


@Injectable({
  providedIn: 'root'
})
export class StockService {

  constructor(private httpClient: HttpClient) { }

  public getStocks(): Observable<Stock[]>{
    return this.httpClient.get<Stock[]>('http://localhost:3000/api/stock');
  }

  public addStock(stock: Stock): Observable<any>{
   return this.httpClient.post('http://localhost:3000/api/stock', stock)
  }
}
