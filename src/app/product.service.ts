import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products = [
    {
      id: 1,
      name: 'Bruno Mars',
      image:
          'image 1',
      description:
          [{ id : 5 , brightness: 48} , { id : 6 , brightness: 48} ]
    },
    {
      id: 2,
      name: 'BTS',
      image:
          'image 2',
      description:
          [{ id : 7 , brightness: 48} , { id : 8 , brightness: 48} ]
    },
    {
      id: 3,
      name: 'Bruno Mars',
      image:
          'image 3',
      description:
          [{ id : 9 , brightness: 48} , { id : 10 , brightness: 48} ]
    }
  ];

  constructor() { }

  getProducts(): any {
    return this.products;
  }

  getProductById(id: number): any {
    let product: any;
    this.products.map(a => {
      if (a.id === id) {
        product = a;
      }
    });
    return product;
  }

  getProductDescriptionId(id: number , descriptionId): any {
    let product: any;
    let descriptions: any;
    let description: any;
    this.products.map(a => {
      if (a.id === id) {
        product = a;
      }
    });
    descriptions = product.description;
    descriptions.forEach((res) => {
      if (res.id === descriptionId) {
        description = res;
      }

    });
    return description;
  }

  addProduct(v): any {
    this.products.push(v);
  }
}
