import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { ProductDetailComponent } from '../shared/components/product-detail/product-detail.component';

@NgModule({
  declarations: [ProductDetailComponent],
  imports: [CommonModule, RouterModule, MatCardModule],
  exports: [ProductDetailComponent],
})
export class ProductsModule {}
