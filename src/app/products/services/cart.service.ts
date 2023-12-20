import { Injectable } from '@angular/core';
import { CartItem } from '../model/cart-item.model';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItems: CartItem[] = [];
  subtotal = 0;


  addToCart(product: Product, quantity: number): void {
    const item = new CartItem();
    item.id = product._id;
    item.name = product.name;
    item.price = product.price;
    item.quantity = quantity;
    item.imageUrl = product.imageUrl;
    
    // set other properties as needed...

    this.cartItems.push(item);
    this.calculateSubtotal();
  }

  removeOneFromCart(item: CartItem): void {
    const foundItem = this.cartItems.find(cartItem => cartItem.id === item.id);

    if (foundItem) {
      if (foundItem.quantity > 1) {
        // Se a quantidade do item é maior que 1, diminui a quantidade
        foundItem.quantity -= 1;
      } else {
        // Se a quantidade do item é 1, remove o item do carrinho
        const index = this.cartItems.indexOf(foundItem);
        if (index > -1) {
          this.cartItems.splice(index, 1);
        }
      }
    }
    // Atualiza o total
    this.calculateSubtotal();
  }

  calculateTotal(): number {
    return this.cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  }

  calculateSubtotal() {
    this.subtotal = this.cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  }
}
