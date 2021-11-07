import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddStockComponent } from './components/add-stock/add-stock.component';
import { StocksComponent } from './components/stocks/stocks.component';

const routes: Routes = [
  {path:'', component: StocksComponent},
  {path: 'add', component: AddStockComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
