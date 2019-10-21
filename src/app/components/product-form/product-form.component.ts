import { Component, OnInit } from '@angular/core';

import { ProductService } from '../../services/product.service';

import { Product } from '../../models/product';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styles: []
})
export class ProductFormComponent implements OnInit {

  product = {} as Product;

  constructor(private productService: ProductService) { }

  ngOnInit() {
  }

  addProduct() {

    if (this.product.name !== '' && this.product.description !== '' && this.product.price !== 0) {

      this.productService.addProduct(this.product);
      //console.log(this.product);

      this.product = {} as Product;

    }


  }
}
