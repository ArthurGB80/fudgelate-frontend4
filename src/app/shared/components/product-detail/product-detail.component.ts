import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../../products/model/product';
import { ProductsService } from '../../../products/services/products.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {
  product: Product | undefined;
  showZoom = false;
  mouseX = 0;
  mouseY = 0;
  backgroundPosition = '0% 0%'; 


  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const id = +params['id']; // convert id to number
      const product = this.productsService.getProduct(id);
      if (product) {
        this.product = product;
      } else {
        // handle error, e.g., assign a default value or show an error message
      }
    });
  }

  onMouseMove(event: MouseEvent) {
    const { offsetX, offsetY, target } = event;
    const { offsetWidth, offsetHeight } = target as HTMLElement;
    
    const x = (offsetX / offsetWidth) * 100;
    const y = (offsetY / offsetHeight) * 100;
  
    this.mouseX = offsetX + 150; // adjust these values as needed
    this.mouseY = offsetY - 50; // adjust these values as needed
  
    this.backgroundPosition = `${x}% ${y}%`;
  }
}
