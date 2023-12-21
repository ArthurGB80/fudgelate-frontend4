import { Component, OnInit } from '@angular/core';
import { Product } from '../../../products/model/product';
import { ProductsService } from '../../../products/services/products.service';
import { CartService } from '../../../products/services/cart.service';
import { CartItem } from 'src/app/products/model/cart-item.model';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent implements OnInit {
  product!: Product;

  constructor(
    private productsService: ProductsService,
    private cartService: CartService,
  ) {}

  ngOnInit(): void {
    const products = this.productsService.getProducts();
    const randomIndex = Math.floor(Math.random() * products.length);
    this.product = products[randomIndex];
  }

  buyProduct(): void {
    const cartItem = new CartItem();
    cartItem.id = this.product._id;
    cartItem.name = this.product.name;
    cartItem.price = this.product.price;
    cartItem.quantity = 1;

    this.cartService.addToCart(this.product, cartItem.quantity);
  }
}
