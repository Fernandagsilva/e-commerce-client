import { Component, OnInit } from '@angular/core';
import { Observable, VirtualTimeScheduler } from 'rxjs';
import { IBasketTotal } from '../../models/basket';
import { BasketService } from 'src/app/basket/basket.service';

@Component({
  selector: 'app-order-totals',
  templateUrl: './order-totals.component.html',
  styleUrls: ['./order-totals.component.css'],
})
export class OrderTotalsComponent implements OnInit {
  basketTotals$: Observable<IBasketTotal>;

  constructor(private basketService: BasketService) {}

  ngOnInit(): void {
    this.basketTotals$ = this.basketService.basketTotal$;
  }
}
