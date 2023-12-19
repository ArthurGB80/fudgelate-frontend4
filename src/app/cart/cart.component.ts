import { Component, OnInit } from '@angular/core';
import { CartItem } from '../products/model/cart-item.model';
import { CartService } from '../products/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  cartItems: CartItem[] = [];
  total: number = 0;
  subtotal = 0;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartItems = this.cartService.cartItems;
    this.cartItems.forEach(item => {
      if (!item.randomImageUrl) {
        item.randomImageUrl = this.getRandomImage();
      }
    });
    this.total = this.cartService.calculateTotal();
  }

  removeFromCart(item: CartItem): void {
    this.cartService.removeFromCart(item);
    this.total = this.cartService.calculateTotal();
  }

  getRandomImage() {
    const randomProduct = this.cartItems[Math.floor(Math.random() * this.cartItems.length)];
    return randomProduct ? randomProduct.imageUrl : '';
  }
}
