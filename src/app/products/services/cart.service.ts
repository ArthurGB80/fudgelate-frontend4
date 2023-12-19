import { Injectable } from '@angular/core';
import { CartItem } from '../model/cart-item.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItems: CartItem[] = [];
  subtotal = 0;


  addToCart(product: CartItem) {
    this.cartItems.push(product);
    this.calculateSubtotal();

  }

  removeFromCart(product: CartItem) {
    const index = this.cartItems.findIndex(item => item.id === product.id);
    if (index > -1) {
      this.cartItems.splice(index, 1);
    }
  }

  calculateTotal(): number {
    return this.cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  }

  calculateSubtotal() {
    this.subtotal = this.cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  }
}
