import { Component, OnInit } from '@angular/core';
import { Product } from '../../../products/model/product';
import { ProductsService } from '../../../products/services/products.service';
import { CartService } from '../../../products/services/cart.service';
import { CartItem } from 'src/app/products/model/cart-item.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];

  constructor(
    private productsService: ProductsService,
    private cartService: CartService,
    ) {}

  ngOnInit(): void {
    this.products = this.productsService.getProducts();
  }

  buyProduct(product: Product): void {
    const cartItem = new CartItem();
    cartItem.id = product._id;
    cartItem.name = product.name;
    cartItem.price = product.price;
    cartItem.quantity = 1; // or the selected quantity

    this.cartService.addToCart(product, cartItem.quantity);
  }
}
