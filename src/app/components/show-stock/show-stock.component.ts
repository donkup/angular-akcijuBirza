import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Stock } from 'src/app/models/stock';
import { StockService } from 'src/app/services/stock.service';

@Component({
  selector: 'app-show-stock',
  templateUrl: './show-stock.component.html',
  styleUrls: ['./show-stock.component.scss']
})
export class ShowStockComponent implements OnInit {

  public stock!: Stock;

  constructor(private stockService: StockService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.stockService.getShowStock(this.route.snapshot.params['code']).subscribe((response: Stock[]) => {
      this.stock = response[0];
      console.log(this.stock);

    })
  }

  submit() {
    console.log(this.stock);

    this.stockService.patchStock(this.stock).subscribe(
      (response) => {
        console.log(response);
        this.router.navigate(['/']);
      },
      (response) => {
        console.log("Klaida: " + response)
      })
  }

}
