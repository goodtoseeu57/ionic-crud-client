import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../product.service';
import {Product} from '../../model';


@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {

  response: any;

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.response = this.productService.getProducts();
    console.log(typeof this.response);

    this.response.forEach((response) => {
      if (response.id === 1) {
        response.description.forEach((res) => {
          console.log(res.id);
          console.log(res.brightness);
        });
      }
    });
  }
// it works
  add() {
    let product = new Product();
    product.id = 1;
    product.name = 'new name';
    product.description = [{id: 54  , brightness: 67} , {id: 55  , brightness: 67}];
    this.productService.addProduct(product);
  }

}
