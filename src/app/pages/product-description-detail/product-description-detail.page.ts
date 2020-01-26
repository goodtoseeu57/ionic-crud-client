import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProductService} from '../../product.service';

@Component({
  selector: 'app-product-description-detail',
  templateUrl: './product-description-detail.page.html',
  styleUrls: ['./product-description-detail.page.scss'],
})
export class ProductDescriptionDetailPage implements OnInit {
  result: any;

  constructor(private activatedRoute: ActivatedRoute , private productService: ProductService) { }

  ngOnInit() {
    const id = + this.activatedRoute.snapshot.paramMap.get('id');
    const keyframeId = + this.activatedRoute.snapshot.paramMap.get('desc_id');
    console.log(id);
    console.log(keyframeId);
    this.result = this.productService.getProductDescriptionId( id, keyframeId);
    console.log(this.result);
  }

}
