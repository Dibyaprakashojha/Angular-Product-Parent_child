import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../models/product';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  date = new Date('2025-05-22');
  productsArray = [
    new Product('Earphones', 'Sony', 899, 'Electronics', 2, 4.4),
    new Product('Bravia', 'Sony', 29000, 'Electronics', 1, 4.6, this.date),
    new Product('Keyboard', 'Corsair', 2899, 'Electronics', 2, 4.4),
    new Product('A56', 'Samsung', 28999, 'Mobile', 2, 4.2, this.date),
    new Product('Rog 5', 'Asus', 58999, 'Mobile', 1, 4.9),
    new Product('Rog 3', 'Asus', 43999, 'Mobile', 3, 4.9),
    new Product('Toy Train', 'Hamleys', 999, 'Toys', 4, 4.8),
    new Product('Toy Gun', 'Hamleys', 599, 'Toys', 5, 4.6),
  ];

  cartArray: Product[] = [];

  addToCart = (product: Product) => {
    this.cartArray.push(product);
  };

  constructor() {}

  ngOnInit(): void {}
}
