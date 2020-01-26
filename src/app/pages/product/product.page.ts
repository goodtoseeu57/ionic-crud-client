import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProductService} from '../../product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.page.html',
  styleUrls: ['./product.page.scss'],
})
export class ProductPage implements OnInit {
  product: any;
  description: any;
  testResult: any;
  constructor(private activatedRoute: ActivatedRoute , private productService: ProductService) { }

  ngOnInit() {
    const id = + this.activatedRoute.snapshot.paramMap.get('id');
    this.product = this.productService.getProductById(id);
    this.description = this.product.description;
    console.log(this.description);
    this.product.description.forEach((response) => {
      console.log(response);
      console.log(this.description);

    });
    console.log(this.product);

  }


  test() {
    const id = + this.activatedRoute.snapshot.paramMap.get('id');
    this.testResult = this.productService.getProductDescriptionId(1 , 5);
    console.log(this.testResult);

  }

}
