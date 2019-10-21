import { Component, OnInit } from '@angular/core';

import { Product } from '../../models/product';

import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styles: []
})
export class ProductsComponent implements OnInit {

  products: any[] = [];

  editingProduct: Product;

  editing: boolean = false;

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.getProducts().subscribe(products => {
      this.products = products;
      console.log(products);
    });
  }

  deleteProduct(event, product) {

    this.productService.deleteProduct(product);

    console.log(product);
  }

  
  editProduct(event, product) {
    this.editingProduct = product;

    this.editing = !this.editing;

  }

  updateProduct() {

    this.productService.updateProduct(this.editingProduct);
    this.editingProduct = {} as Product;

    this.editing = false;

    console.log(this.editProduct)
  }


}
