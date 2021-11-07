import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Stock } from '../models/stock';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  constructor(private httpClient: HttpClient) { }

  public getStock(): Observable<Stock[]> {
    return this.httpClient.get<Stock[]>('http://127.0.0.1:3000/api/stock');
  }

  public addStock(stock: Stock): Observable<any> {
    return this.httpClient.post('http://127.0.0.1:3000/api/stock', stock)
  }

  public getShowStock(code: string): Observable<Stock[]> {
    return this.httpClient.get<Stock[]>('http://127.0.0.1:3000/api/stock/?q=' + code);
  }

  public patchStock(stock: Stock): Observable<any> {
    return this.httpClient.patch('http://127.0.0.1:3000/api/stock/' + stock.code, stock)

  }
}
