import { Component, Input } from '@angular/core';
import { CartItem } from 'src/app/products/model/cart-item.model';
import { Product } from 'src/app/products/model/product';
import { CartService } from '../../../products/services/cart.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {
  @Input() product!: Product;

  constructor(private cartService: CartService) { }

  buyProduct(product: Product): void {
    const cartItem = new CartItem();
    cartItem.id = product._id;
    cartItem.name = product.name;
    cartItem.price = product.price;
    cartItem.quantity = 1; // or the selected quantity

    this.cartService.addToCart(this.product, cartItem.quantity);  }
}
