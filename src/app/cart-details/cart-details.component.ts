import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../models/product';

@Component({
  selector: 'app-cart-details',
  templateUrl: './cart-details.component.html',
  styleUrls: ['./cart-details.component.css'],
})
export class CartDetailsComponent implements OnInit {
  @Input() cartDetails: Product[] = [];
  constructor() {}

  ngOnInit(): void {}
}
